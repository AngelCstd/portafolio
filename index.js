import { Becas } from "./components/Becas.js";
import { Experiencia } from "./components/Experience.js";
import { Proyectos } from "./components/Proyectos.js";  

document.querySelector("header").addEventListener("click", ()=>{
    let $nav = document.querySelector("header nav");
    $nav.classList.toggle("visible");
})

document.addEventListener("DOMContentLoaded", ()=>{
    let becas ="",
    proyectos = "",
    experiencia = "",
    $becas = document.getElementById("becas"),
    $experiencia = document.getElementById("experiencia"),
    $proyectos = document.getElementById("proyectos");

    fetch("assets/portafolio.json")
    .then(res => res.json())
    .then(json => {
        json.proyectos.forEach(element => proyectos += Proyectos(element));
        json.becas.forEach(element => becas += Becas(element));
        json.experiencia.forEach(element => experiencia += Experiencia(element));
        $becas.innerHTML += becas;
        $experiencia.innerHTML += experiencia;
        $proyectos.innerHTML += proyectos;
    })
})
