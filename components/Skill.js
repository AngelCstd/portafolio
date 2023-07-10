export function Skill({href, src, nombre}){
    return`
    <div class="skills__box">
        <a href="${href}" target="_blank" rel="noreferrer">
            <img src="${src}" alt="${nombre}"/>
        </a>
        <p>${nombre}</p>
    </div>`
}