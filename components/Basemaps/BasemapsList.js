import OpenStreetMap from '../../public/images/Basemap/OpenStreetMap.jpg'
import EsriWorldImagery from '../../public/images/Basemap/EsriWorldImagenery.jpg'
import EsriToPo from '../../public/images/Basemap/EsriToPo.jpg'
import StadiaDark from '../../public/images/Basemap/StadiaDark.jpg'
import GoogleMaps from '../../public/images/Basemap/GoogleMaps.jpg'
import GoogleStreet from '../../public/images/Basemap/GoogleStreet.jpg'
import CartoDb from '../../public/images/Basemap/CartoDb.jpg'

const daftarBasemap = [
    {
      url: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
      nama: "Google Satelite",
      gambar: GoogleMaps,
    },
    {
      url: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      nama: "Google Streets",
      gambar: GoogleStreet,
    },
    {
      url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      nama: "OpenStreetMap",
      gambar: OpenStreetMap,
    },
    {
      url: "https://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}@2x.png",
      nama: "Carto Dark",
      gambar: StadiaDark,
    },
    {
        url: "https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png",
        nama: "Carto Positron",
        gambar: CartoDb,
    },
    {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      nama: "Esri.WorldImagery",
      gambar: EsriWorldImagery,
    },
    {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
      nama: "Esri.WorldTopoMap",
      gambar: EsriToPo,
    },
  ];

  export default daftarBasemap;