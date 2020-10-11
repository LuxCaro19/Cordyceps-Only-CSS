import infectados from "./modules/infecteds.js"

var containerInfect = document.getElementById("listInfect");

window.lista = infectados.lista;

document.getElementById("infects").addEventListener("click", ()=>{

    containerInfect.innerHTML = infectados.data;
    infectados.lista();

});