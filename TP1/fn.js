//let frutas=['pera','manzana','frutilla','naranja','banana']
//console.log(frutas[1])

/*
for(i=0; i<=frutas.length-1;i++) {console.log(frutas[i])}
frutas.forEach(fruta=>{console.log(fruta)})
*/
//for(const fruta of frutas){console.log(fruta)}
// for(const fruta of frutas){if(fruta=='manzana'){console.log(fruta)}}
var Character
function Buscar(IdCharacter){  
fetch('https://rickandmortyapi.com/api/character/'+IdCharacter)
.then(response => response.json())
.then(data => alert(data.name+" "+data.gender)).then (data => Character=data)
}

function ShowCharacter(Character){

    
}