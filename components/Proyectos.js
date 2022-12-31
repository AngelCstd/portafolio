export function Proyectos(props) {
    return `<figure>
    <img src="${props.img}" alt="${props.title}">
    <div>
        <h4>${props.title}</h4>
        <small>${props.tecnologias}</small>
        <div class="containerGrid">
        <a class="button" href="${props.proyect}" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i> Website</a>
        <a class="button" href="${props.repository}" target="_blank" rel="noopener noreferrer"><i class="bi bi-globe"></i> Repository</a>
    </div>
    </div>
</figure>`
}