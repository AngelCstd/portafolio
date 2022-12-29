export function Proyectos(props) {
    return `<figure>
    <img src="${props.img}" alt="${props.title}">
    <div>
        <h4>${props.title}</h4>
        <p>${props.details}</p>
        <small>${props.tecnologias}</small>
        <a href="${props.proyect}">ver proyecto</a>
        <a href="${props.repository}" target="_blank" rel="noopener noreferrer">repository</a>
    </div>
</figure>`
}