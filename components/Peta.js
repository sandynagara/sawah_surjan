import React,{useRef,useEffect,useState} from 'react'
import * as ol from "ol";
import XYZ from 'ol/source/XYZ';
import OLTileLayer from "ol/layer/Tile";

function Peta({zoom=10}) {

    const mapRef = useRef();
    const [map, setMap] = useState(null);
    var center = [110.377832,-7.770439]

    useEffect(() => {
        let options = {
          view: new ol.View({ zoom, center,projection: "EPSG:4326" }),
          layers: [new OLTileLayer({
            properties:"Basemap",
            source: new XYZ({
              //url: 'http://mt1.google.com/vt/lyrs=s&hl=pl&&x={x}&y={y}&z={z}'
              url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
          })],
          controls: [],
          overlays: []
        };
        let mapObject = new ol.Map(options);
        mapObject.setTarget(mapRef.current);
        setMap(mapObject);
        return () => mapObject.setTarget(undefined);
      }, []);

  return (
    <div ref={mapRef} className="h-screen w-screen flex flex-grow relative ol-map">
        
    </div>
  )
}

export default Peta