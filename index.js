import { valida } from "./assets/helpers/validaciones.js";
import { creacionDiv } from "./assets/helpers/peticiones.js";
import {
    experienciaHTML,
    formacionHTML,
    skillHTML,
} from "./assets/helpers/cargaComponentes.js";

// Validaciones
const formulario = document.querySelector("#form"),
    inputs = document.querySelectorAll("#form input"),
    textArea = document.querySelector("#form textarea");

textArea.addEventListener("blur", ({ target }) => {
    let inputTemporal = document.createElement("input");
    inputTemporal.required = true;
    inputTemporal.name = target.name;
    inputTemporal.value = target.value;
    inputTemporal.pattern = "^.{1,300}$";
    valida({ target: inputTemporal }, target.nextElementSibling);
});
inputs.forEach((input) => {
    input.addEventListener("blur", valida);
});

// Componentes
let experiencia = document.querySelector("div.experiencia-container"),
    formacion = document.querySelector("div.academico__cursos"),
    skill = document.querySelector(".skills__container")

skill.innerHTML = skillHTML;
experiencia.innerHTML = experienciaHTML;
formacion.innerHTML = formacionHTML;

// Fetch
let progressContainer = document.querySelector(".progress_container"),
    porcents = [];

const handlerProgress = () => {
    let child = document.querySelector(".progress_container h4"),
        divs = document.querySelectorAll(".progress");
    progressContainer.removeChild(child);
    progressContainer.style.height = "10rem";
    divs.forEach((div, index) => {
        div.style.width = porcents[index] + "%";
    });
    document.querySelector(".progress_container").removeEventListener("click", handlerProgress);
};

const addPorcent = ({porcentajes, lenguajes, colores}) => {
    let porcentHTML = "";
    lenguajes.forEach(([key], index)=>{
        let porcent = (porcentajes[index]+"").slice(0,4)
        porcentHTML += `<div class="porcent__box">
        <div class="color__box" style="background-color: ${colores[key]};"></div>
        <p class="lenguaje">${key}  ${porcent}%</p>
        </div>`
    })
    return porcentHTML
}

document.addEventListener("DOMContentLoaded", async (e) => {
    let barra = document.querySelector(".progress_bar"),
        divPorcents = document.querySelector(".progress_porcent"),
        {porcentajes, lenguajes, colores} = await creacionDiv(barra);

    porcents = porcentajes
    divPorcents.innerHTML = addPorcent({porcentajes, lenguajes, colores})
    progressContainer.addEventListener("click", handlerProgress);
});
