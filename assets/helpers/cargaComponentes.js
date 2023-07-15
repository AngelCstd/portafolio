import { Experiencia } from "../../components/Experiencia.js";
import { Formacion } from "../../components/Formacion.js";
import { Skill } from "../../components/Skill.js";

const experiencia = [
    {
        imagenPhone: "./assets/img/CodificadorIphone.png",
        imagen: "./assets/img/Codificador.png",
        informacion: "Creado con JavaScript, HTML y CSS",
        titulo: "Codificador Alura",
        github: "https://github.com/AngelCstd/codificador",
        proyecto: "https://angelcstd.github.io/codificador/",
    },
];
const formacion = [
    {
        imagen: "./assets/img/programadorJuniorOne.png",
        informacion: "Oracle Next Education 2023",
        titulo: "Graduado Programador Front-end junior ",
    },
    {
        imagen: "./assets/img/LaunchX1.png",
        informacion: "Innovaccion virtual con Microsoft 2022",
        titulo: "Beca para Launch X",
    }
];
const skill = [
    {
        href: "https://www.w3schools.com/css/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
        nombre :"CSS"
    },
    {
        href: "https://www.w3.org/html/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        nombre :"HTML"
    },
    {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        nombre : "JavaScript"
    },
    {
        href: "https://reactjs.org/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        nombre: "React"
    },
    {
        href: "https://git-scm.com/",
        src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
        nombre :"GIT"
    },
    {
        href: "https://www.figma.com/",
        src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
        nombre :"Figma"
    },
    {
        href: "https://sass-lang.com",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
        nombre : "Sass"
    },
    {
        href: "https://nodejs.org",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
        nombre : "NodeJS"
    },
    {
        href: "https://www.mysql.com/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        nombre : "MySQL"
    },
    {
        href: "https://www.java.com",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
        nombre : "Java"
    },
    
]

export let experienciaHTML = "",
    formacionHTML = "",
    skillHTML = ""

experiencia.forEach((element) => {
    experienciaHTML = experienciaHTML + Experiencia(element);
});
formacion.forEach((element) => {
    formacionHTML = formacionHTML + Formacion(element);
});
skill.forEach((element) => {
    skillHTML = skillHTML + Skill(element);
});

