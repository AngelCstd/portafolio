export const Formacion= ({imagen, informacion, titulo}) =>{
    return`<div class="academico-cursos__box">
    <ul class="academic--cursos__list">
        <li class="academic__courses__item__img"><img src="${imagen}"></li>
        <li class="academic__courses__item__title"><h4>${titulo}</h4></li>
        <li class="academic__courses__item__subtitle"><p>${informacion}</p></li>
    </ul>
</div>`
}