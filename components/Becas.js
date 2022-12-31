export function Becas(props) {
    return `<div>
    <div>
    <p>${props.fecha}</p>
    <h4>${props.title}</h4>
    <p>${props.details}</p>
    </div>
    <img src="${props.img}" alt="${props.title}">
</div>`
}