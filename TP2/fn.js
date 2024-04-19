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
    let mainContainer = document.getElementById("Mostrar1");
    let img = document.createElement('img');
    let div = document.createElement("div");
    img.src = data[0].image;
    img.innerHTML = 
       div.innerHTML =data[0].name + ' ' + data[0].gender;
       mainContainer.appendChild(img);
       mainContainer.appendChild(div);
  
    mainContainer = document.getElementById("Mostrar2");
    img = document.createElement('img');
    div = document.createElement("div");
    if(data[0].gender==data[1].gender) {img.src = "tick.jpg";
    img.innerHTML = div.innerHTML = "son compatibles";}
    else {img.src = "Cross.jpg"; img.innerHTML = div.innerHTML = "no son compatibles";};
    mainContainer.appendChild(img);
    mainContainer.appendChild(div);

    mainContainer = document.getElementById("Mostrar3");
    img = document.createElement('img');
    div = document.createElement("div");
    img.src = data[1].image;
    img.innerHTML = 
       div.innerHTML =data[1].name + ' ' + data[1].gender;
       mainContainer.appendChild(img);
       mainContainer.appendChild(div);

    
}    
