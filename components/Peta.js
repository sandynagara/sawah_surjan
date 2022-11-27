import React,{useRef,useEffect,useState,useContext} from 'react'
import {FilterContext} from "./Context/FilterContext.js"
import * as ol from "ol";
import XYZ from 'ol/source/XYZ';
import {toFeature} from 'ol/render/Feature'
import OLTileLayer from "ol/layer/Tile";
import MVT from 'ol/format/MVT';
import {Vector,VectorTile as VectorTileLayer} from 'ol/layer';
import {VectorTile as VectorTileSource,Vector as VectorSource,TileWMS} from 'ol/source';
import Style from 'ol/style/Style';
import {Stroke,Fill} from 'ol/style';


function Peta({zoom=17,basemapSelect,basemapActive,sawahActive,setInfo}) {

    const mapRef = useRef();
    const [map, setMap] = useState(null);
    const [petaUrl, setPetaUrl] = useContext(FilterContext);
    var center = [12259751.774012776, -878817.760197904]

    const vectorLayerSelect = new Vector({
      properties:"select",
      source: new VectorSource({}),
      zIndex:21,
      style:new Style({
        stroke: new Stroke({
           color: 'yellow',
           width: 1
          }),
        fill:new Fill({
            color:"yellow"
        })  
      }),
    })

    const vectorLayerHover = new Vector({
      properties:"hover",
      source: new VectorSource({}),
      zIndex:21,
      style:new Style({
        stroke: new Stroke({
           color: 'yellow',
           width: 1
          }),
        fill:new Fill({
            color:"yellow"
        })  
      }),
    })

    const vectorLayer = new VectorTileLayer({
      properties:"sawah",
      declutter: false,
      source: new VectorTileSource({
        format: new MVT(),
        //"https://ppids-ugm.com/maptile/public.sawahsurjandemo/{z}/{x}/{y}.pbf"
        url:petaUrl,
      }),
      zIndex:20,
      style:new Style({
        stroke: new Stroke({
           color: 'white',
           width: 1
          }),
        fill:new Fill({
            color:"green"
        })  
      }),
    })

    const sourceWMS = new TileWMS({
      url: 'https://ppids-ugm.com/geoserver/wms',
      params: {'LAYERS': 'sawahsurjandemo', 'TILED': true},
      serverType: 'geoserver',
      // Countries have transparency, so do not fade tiles:
      transition: 0,
    })

    const tileLayerSawahGeoserver = new OLTileLayer({
      zIndex:99,
      properties:"sawah",
      source: sourceWMS,
    })

    useEffect(() => {

      if (!map) return;
      var newSource = new VectorTileSource({
        format: new MVT(),
        //"http://localhost:7800/postgisftw.FilterVector/{z}/{x}/{y}.pbf"
        url:petaUrl,
      })
      map.getLayers().forEach(layer => {
        if (layer && layer.values_.properties == 'sawah' ){
          layer.setSource(newSource)
        }
      });
    }, [petaUrl])
    

    useEffect(() => {
        var options = {
          view: new ol.View({ zoom, center }),
          layers: [new OLTileLayer({
            properties:"Basemap",
            source: new XYZ({
              //url: 'http://mt1.google.com/vt/lyrs=s&hl=pl&&x={x}&y={y}&z={z}'
              url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
          }),vectorLayer,vectorLayerHover,vectorLayerSelect
        ],
          controls: [],
          overlays: []
        };
        
        var mapObject = new ol.Map(options);
        mapObject.setTarget(mapRef.current);

        setMap(mapObject);
        return () => mapObject.setTarget(undefined);
      }, []);

      useEffect(() => {
        if (!map) return;
        map.getLayers().forEach(layer => {
          if (layer && layer.values_.properties == 'Basemap' ){
            map.removeLayer(layer)
          }
        });
    
        var basemapLayer= new OLTileLayer({
          properties:"Basemap",
          source: new XYZ({
            url: basemapSelect
          })
        })
        map.addLayer(basemapLayer)
      }, [basemapSelect])

      useEffect(() => {
        if (!map) return;
        if(basemapActive){
          var basemapLayer= new OLTileLayer({
            properties:"Basemap",
            source: new XYZ({
              url: basemapSelect
            })
          })
          map.addLayer(basemapLayer)
        }else{
          map.getLayers().forEach(layer => {
            if (layer && layer.values_.properties == 'Basemap' ){
              map.removeLayer(layer)
            }
          });
        }
        
      }, [basemapActive])
      
      useEffect(() => {
        if (!map) return;
        if(sawahActive){
          map.addLayer(vectorLayer)
        }else{
          map.getLayers().forEach(layer => {
            if (layer && layer.values_.properties == 'sawah' ){
              map.removeLayer(layer)
            }
          });
        }
      }, [sawahActive])
    
      const selectStyle = new Style({
        fill: new Fill({
          color: 'red',
        }),
        stroke: new Stroke({
          color: 'rgba(255, 255, 255, 0.7)',
          width: 2,
        }),
      });
  
    const ChangeStyleHover = () => {
      if (!map) return;
      map.on("pointermove",(event)=>{
        var hit = map.hasFeatureAtPixel(event.pixel);
        if(hit){
          map.getViewport().style.cursor = 'pointer';
          map.forEachFeatureAtPixel(event.pixel,function (feature, layer){
            if(layer.values_.properties == "sawah"){
              map.getLayers().forEach(layer => {
                if (layer && layer.values_.properties == 'hover' ){
                  var source = layer.getSource()
                  source.clear()
                  feature = toFeature(feature)
                  feature.setStyle(selectStyle)
                  source.addFeature(feature)
                }
              });
            }
           }
          );
        }else{
          map.getViewport().style.cursor = '';
          map.getLayers().forEach(layer => {
            if (layer && layer.values_.properties == 'hover' ){
              var source = layer.getSource()
              source.clear()
            }
          });
        }
      })
    }

    const SelectVectorAction = () => {
      if (!map) return;
      map.on("click",(event)=>{
        map.forEachFeatureAtPixel(event.pixel,function (feature, layer){
          var properties = feature.getProperties()
          setInfo(properties)
          if(layer.values_.properties == "sawah"){
            map.getLayers().forEach(layer => {
              if (layer && layer.values_.properties == 'select' ){
                var source = layer.getSource()
                source.clear()
                feature = toFeature(feature)
                source.addFeature(feature)
              }
            });
          }
         }
        );

      })
    }

    // var GetFeatureInfo = () => {
    //   if (!map) return;
    //   map.on('singleclick', function (evt) {
    //     if (!map) return;
    //     const zoomWMS = 15
    //     const centerWMS =  evt.coordinate
    //     const view = new ol.View({ zoomWMS, centerWMS,projection: "EPSG:3857"})
    //     const viewResolution = /** @type {number} */ (view.getResolution());
    //     const url = sourceWMS.getFeatureInfoUrl(
    //       centerWMS,
    //       viewResolution,
    //       'EPSG:3857',
    //       {'INFO_FORMAT': 'application/json'}
    //     );
    //       console.log( centerWMS)
    //     if (url) {
    //       fetch(url)
    //         .then((response) => response.json())
    //         .then((res) => {
    //           if(res["features"].length == 0) return
    //           console.log(res)
    //         })
    //         .catch((err)=>{
    //           console.log(err)
    //         });
    //     }
    //     })
    // }
      
  return (
    <div ref={mapRef} className="h-screen w-screen flex flex-grow relative ol-map">
      {/* <GetFeatureInfo/> */}
      <ChangeStyleHover/>
      <SelectVectorAction/>
    </div>
  )
}

export default Peta