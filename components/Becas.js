export function Becas(props) {
    return `<div>
    <h4>${props.title}</h4>
    <small>${props.fecha}</small>
    <p>${props.details}</p>
    <img src="${props.img}" alt="${props.title}">
</div>`
}