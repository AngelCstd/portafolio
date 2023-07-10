export const Experiencia = ({ imagen, informacion, titulo, github, proyecto }) => {
    return `<div class="experiencia-box">
    <img class="experiencia-img" src="${imagen}">
    <div class="experiencia-info" >
    <h2 class="experiencia-titulo" >${titulo}</h2>
        <h3 class="experiencia-texto">${informacion}</h3>
        <div class="experience-descripcion">
            <span class="experience-repo">
                <a href="${github}">
                    <button class="experiencia--boton__repo" >Repositorio</button>
                </a>
            </span>
            <span class="experience--demo">
                <a href="${proyecto}">
                    <button class="experience--boton__demo">Ver
                        demo</button>
                </a>
            </span>
        </div>
    </div>
</div>`;
};
