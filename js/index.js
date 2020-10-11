import infectados from "./modules/infecteds.js"
import afectados from "./modules/afecteds.js"

var containerInfect = document.getElementById("listInfect");

window.lista = infectados.lista;

window.list = afectados.list;

document.getElementById("infects").addEventListener("click", ()=>{

    containerInfect.innerHTML = infectados.data;
    infectados.lista();

});

document.getElementById("afecteds").addEventListener("click", ()=>{

    containerInfect.innerHTML = afectados.data;
    afectados.list();

});