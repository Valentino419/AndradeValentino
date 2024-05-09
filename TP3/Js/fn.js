var ANumeros0 = [];
var ANumeros1 = [];

//const Imput1 = document.getElementById(Imput-1)


function Seleccion(numeroI, entrada) {
    if ((numeroI < 827) == (numeroI > 0)) {// pregunta por los rangos para no pasar a la api valores fuera de rango

        //separo con los if de que input provienen los datos
        if (entrada == 0) {
            if (ANumeros0.length < 3) { //pregunta si el vactor contiene menos de 3 elementos antes de añadir uno nuevo

                ANumeros0.push(parseInt(numeroI));

            }else { alert("lista llena") }// en caso de que se allan ingresado los 3 numeros da un aviso
            document.getElementById('Imput-0').value = "";//limpi el imput
            DesabilitarImput(ANumeros1, 'Imput-0');
            console.log(ANumeros0);
        }
        if (entrada == 1) {
            if (ANumeros1.length < 3) {
                ANumeros1.push(parseInt(numeroI));
                console.log(ANumeros1);

            }else { alert("lista llena") }
            document.getElementById('Imput-1').value = "";
            DesabilitarImput(ANumeros1, 'Imput-1');
        }
        if (ANumeros0.length == 3) { //si ambos vectores tiene 3 elementos pasa a la llamada de la api de rick and morty
            if (ANumeros1.length == 3) {
                console.log(ANumeros0, ANumeros1);
                
                ObtenerPersonaje(ANumeros0.concat(ANumeros1))  // pasa los vectores concatenados
                console.log();
            }

        }
    } else { alert("Numero furta de Rango") }
}





function ObtenerPersonaje(NumeroP) { //le pasa a la funcion fech los datos en los vectores y luego llama a una funcion para que cargue las imagenes en la pagina
    fetch("https://rickandmortyapi.com/api/character/" + NumeroP)
        .then(response => response.json())
        .then(data => SepararCharacter(data)).catch(console.log('error'))


};
function SepararCharacter(data) {// recorre el array de .JSON entregados por la api y los separa usando los vectores, y los va pasando a una funcion que los cargqa en el lugar adecuado
    data.forEach((character) => ANumeros0.forEach((idcharacter) => ShowCharacters(character, idcharacter, 'imagSet0')))
    data.forEach((character) => ANumeros1.forEach((idcharacter) => ShowCharacters(character, idcharacter, 'imagSet1')))
}


function ShowCharacters(data, i, idElemento) {// funcion que carga las imagenes de los JSON en el objeto que se le indique
    if (data.id == i) {
        let mainContainer = document.getElementById(idElemento);
        let img = document.createElement('img');
        let div = document.createElement("div");
        img.src = data.image;
        //img.innerHTML = 
        //  div.innerHTML = data[0].name + ' ' + data[0].gender;
        mainContainer.appendChild(img);
        mainContainer.appendChild(div);
    }
}

//las siguientes funciones desabilitan los inmput 
function DesabilitarImput(Vec, ImputID) { 
    if (Vec.length > 3) {
        swapInputDisabled(ImputID);
        disableInput(ImputID);

    }
}

function $(element_id) {
    return document.getElementById(element_id);
}
function swapInputDisabled(element_id) {
    const state = $(element_id).disabled;
    $(element_id).disabled = !state;
}
function disableInput(element_id) {
    $(element_id).disabled = false;
}


