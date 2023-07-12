export const Experiencia = ({
  imagen,
  imagenPhone,
  informacion,
  titulo,
  github,
  proyecto,
}) => {
  return `
  <div class="experiencia__box">
    <div class="experiencia__imagenes">
        <img class="experiencia__imgphone" src="${imagenPhone}">
        <img class="experiencia__img" src="${imagen}">
    </div>
    <div class="experiencia__info" >
        <h2 class="experiencia__titulo" >${titulo}</h2>
        <h3 class="experiencia__texto">${informacion}</h3>
        <div class="experiencia__descripcion">
                <a href="${github}">
                    <button class="experiencia__boton--repo" >Repositorio</button>
                </a>
                <a href="${proyecto}">
                    <button class="experiencia__boton--demo">Ver
                        demo</button>
                </a>
        </div>
    </div>
</div>`;
};
