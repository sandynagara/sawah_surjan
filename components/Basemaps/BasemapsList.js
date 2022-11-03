// import OpenStreetMap from '/images/Basemap/OpenStreetMap.jpg'
// import EsriWorldImagery from '/images/Basemap/EsriWorldImagenery.jpg'
// import EsriToPo from '/images/Basemap/EsriToPo.jpg'
// import StadiaDark from '/images/Basemap/StadiaDark.jpg'
// import GoogleMaps from '/images/Basemap/GoogleMaps.jpg'
// import GoogleStreet from '/images/Basemap/GoogleStreet.jpg'
// import CartoDb from '/images/Basemap/CartoDb.jpg'

const daftarBasemap = [
  {
    url: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    nama: "Google Satelite",
    gambar: '/images/Basemap/GoogleMaps.jpg',
  },
  {
    url: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    nama: "Google Streets",
    gambar: '/images/Basemap/GoogleStreet.jpg',
  },
  {
    url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    nama: "OpenStreetMap",
    gambar: '/images/Basemap/OpenStreetMap.jpg',
  },
  {
    url: "https://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}@2x.png",
    nama: "Carto Dark",
    gambar: '/images/Basemap/StadiaDark.jpg',
  },
  {
      url: "https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png",
      nama: "Carto Positron",
      gambar: '/images/Basemap/CartoDb.jpg',
  },
  {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    nama: "Esri.WorldImagery",
    gambar: '/images/Basemap/EsriWorldImagenery.jpg',
  },
  {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    nama: "Esri.WorldTopoMap",
    gambar: '/images/Basemap/EsriToPo.jpg',
  },
];

export default daftarBasemap;