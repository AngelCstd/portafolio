export const Formacion= ({imagen, informacion, titulo}) =>{
    return`<div class="academico__box">
        <img src="${imagen}">
        <h4>${titulo}</h4>
        <p>${informacion}</p>
</div>`
}