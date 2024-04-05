const Personaje={
  "id": 140,
  "name": "Genital Washer",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Post-Apocalyptic Earth",
    "url": "https://rickandmortyapi.com/api/location/8"
  },
  "location": {
    "name": "Post-Apocalyptic Earth",
    "url": "https://rickandmortyapi.com/api/location/8"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/140.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/23"
  ],
  "url": "https://rickandmortyapi.com/api/character/140",
  "created": "2017-12-27T18:47:44.566Z"
}
//console.log(Personaje)
//console.log(Personaje.name)
const Jugador={
  "clave": "1",
  "nombre": "nahuel",
  "apellido": "Barrios",
  "apodo": "Perrito",
  "edad": 28,
  "clubes": [
    "San Lorenzo",
    "Racing"
  ],
  "Activo": true,
  "Sueldo": 1000000.99
}
console.log(Jugador.clubes[
  0
])

const personaje2={
  "id": 826,
  "name": "Butter Robot",
  "status": "Alive",
  "species": "Robot",
  "type": "Passing Butter Robot",
  "gender": "Genderless",
  "origin": {
    "name": "Earth (Replacement Dimension)",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  "location": {
    "name": "Earth (Replacement Dimension)",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/826.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/9"
  ],
  "url": "https://rickandmortyapi.com/api/character/826",
  "created": "2021-11-02T17:24:37.458Z"
}
console.log(personaje2.status)
document.write(personaje2.status)