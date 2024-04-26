var map = L.map('map').setView([-34.61315,-58.38], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([-34.61315,-58.38]).addTo(map)





function BuscarUsuario() {


  fetch('https://randomuser.me/api/').then(response=> response.json())
  .then(function (data) {
    marker.remove(map) 
    marker = L.marker([data.results[0].location.coordinates.latitude,data.results[0].location.coordinates.longitude]).addTo(map)
    .bindPopup(data.results[0].name.title+" "+data.results[0].name.first+" "+data.results[0].name.last)
    .openPopup();
   


    console.log(data.results[0].location.coordinates)
  }).catch(error=>{
    console.log("error");
    document.getElementById("error").innerHTML="Se a producido un error: "+error;
  })
}