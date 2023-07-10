// GitHub
const colores = {
    JavaScript: "#F7DF1E",
    HTML: "#E34C26",
    CSS: "#1572B6",
    Java: "#b07219"
};

async function fetchGitHub() {
    let jsonRepos = await fetch("https://api.github.com/users/AngelCstd/repos")
        .then((response) => response.json())
        .catch((error) => console.error(`Error al obtener los datos de ${item.languages_url}: ${error}`));
    let lenguajes = [];

    for (const item of jsonRepos) {
        try {
            const response = await fetch(item.languages_url);
            const data = await response.json();
            lenguajes.push(data);
        } catch (error) {
            console.error(
                `Error al obtener los datos de ${item.languages_url}: ${error}`
            );
        }
    }
    return lenguajes;
}

async function ordenarLenguajes() {
    let lenguajesArray = await fetchGitHub(),
        result = lenguajesArray.reduce((previusValue, currentValue) => {
            for (let key in currentValue) {
                if (previusValue.hasOwnProperty(key)) {
                    previusValue[key] += currentValue[key];
                } else {
                    previusValue[key] = currentValue[key];
                }
            }
            return previusValue;
        }, {});
    return Object.entries(result);
}

export async function creacionDiv(target) {
    let lenguajes = await ordenarLenguajes(),
        divs = "",
        [, total] = lenguajes.reduce(([, previusValue], [, currentValue]) => {
            previusValue += currentValue;
            return [, previusValue];
        }),
        porcentajes = [];

    lenguajes.forEach(([key, value]) => {
        let porcent = (value * 100) / total,
            progress = `<div class="progress" style="background: ${colores[key]};"></div>`;
        divs += progress;
        porcentajes.push(porcent);
    });

    target.innerHTML = divs;

    return {porcentajes, lenguajes, colores};
}