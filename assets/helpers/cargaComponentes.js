import { Experiencia } from "../../components/Experiencia.js";
import { Formacion } from "../../components/Formacion.js";
import { Skill } from "../../components/Skill.js";

const experiencia = [
    {
        imagen: "./assets/img/LaunchX.png",
        informacion: "Creado con JavaScript y React",
        titulo: "TinderFlix",
        github: "https:/",
        proyecto: "https:/",
    },
];
const formacion = [
    {
        imagen: "./assets/img/LaunchX.png",
        informacion: "alura - 2023",
        titulo: "React Router",
    },
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

