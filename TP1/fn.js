//let frutas=['pera','manzana','frutilla','naranja','banana']
//console.log(frutas[1])

/*
for(i=0; i<=frutas.length-1;i++) {console.log(frutas[i])}
frutas.forEach(fruta=>{console.log(fruta)})
*/
//for(const fruta of frutas){console.log(fruta)}
// for(const fruta of frutas){if(fruta=='manzana'){console.log(fruta)}}
var data = JSON.parse 
function Buscar(IdCharacter,IdCharacter2){  
fetch('https://rickandmortyapi.com/api/character/'+IdCharacter+","+IdCharacter2)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    ShowCharacters(data);
})  


}

function ShowCharacters(data){
    let mainContainer = document.getElementById("Mostrar");
    let img = document.createElement('img');
    let div = document.createElement("div");
    
    cargarImg(data[0]);   
    cargarImg(data[1]);
    if(data[0].gender==data[1].gender) {img.src = "tick.jpg";
                                         div.innerHTML = "son compatibles";}
    else {img.src = "Cross.jpg"; div.innerHTML = "son compatibles";};
    mainContainer.appendChild(img);
    
}    

   
function cargarImg(data){
    let mainContainer = document.getElementById("Mostrar");
    let div = document.createElement("div");
    let img = document.createElement('img');
    img.src = data.image;
    img.innerHTML = 
       div.innerHTML =data.name + ' ' + data.gender;
       mainContainer.appendChild(img);
       mainContainer.appendChild(div);

}