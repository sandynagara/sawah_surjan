import React,{useRef,useEffect,useState} from 'react'
import * as ol from "ol";
import XYZ from 'ol/source/XYZ';
import OLTileLayer from "ol/layer/Tile";
import TileWMS from 'ol/source/TileWMS';

function Peta({zoom=17,basemapSelect,basemapActive,sawahActive,setSawahActive}) {

    const mapRef = useRef();
    const [map, setMap] = useState(null);
    var center = [110.093639,-7.896110]

    useEffect(() => {
        let options = {
          view: new ol.View({ zoom, center,projection: "EPSG:4326" }),
          layers: [new OLTileLayer({
            properties:"Basemap",
            source: new XYZ({
              //url: 'http://mt1.google.com/vt/lyrs=s&hl=pl&&x={x}&y={y}&z={z}'
              url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
          }),new OLTileLayer({
            zIndex:99,
            properties:"sawah",
            source: new TileWMS({
              url: 'https://ppids-ugm.com/geoserver/wms',
              params: {'LAYERS': 'sawah', 'TILED': true,'CRS':4326},
              serverType: 'geoserver',
              // Countries have transparency, so do not fade tiles:
              transition: 0,
            }),
          }),],
          controls: [],
          overlays: []
        };
        let mapObject = new ol.Map(options);
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
          var sawahLayer= new OLTileLayer({
            zIndex:99,
            properties:"sawah",
            source: new TileWMS({
              url: 'https://ppids-ugm.com/geoserver/wms',
              params: {'LAYERS': 'sawah', 'TILED': true,'CRS':4326},
              serverType: 'geoserver',
              // Countries have transparency, so do not fade tiles:
              transition: 0,
            }),
          })
          map.addLayer(sawahLayer)
        }else{
          map.getLayers().forEach(layer => {
            if (layer && layer.values_.properties == 'sawah' ){
              map.removeLayer(layer)
            }
          });
        }
        
      }, [sawahActive])

  return (
    <div ref={mapRef} className="h-screen w-screen flex flex-grow relative ol-map">
        
    </div>
  )
}

export default Peta