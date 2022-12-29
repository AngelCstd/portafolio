export function Experiencia(props) {
    let lista = props.details.map(li => creaLista(li)).join("")
    return `<div>
    <p>${props.fecha}</p>
    <h4>${props.puesto}</h4>
    <h4>${props.empresa}</h4>
    <ul>${lista}</ul>
</div>`
}
function creaLista(li) {
    return`<li>${li}</li>`
}