let mensajesError = {
    nombre: {
        valueMissing: "Ingrese su nombre por favor",
        patternMismatch: "Solo permite letras y un maximo de 50 caracteres"
    },
    email: {
        valueMissing: "Ingrese su email por favor",
        typeMismatch: "Ingrese un correo electronico valido"
    },
    asunto: {
        valueMissing: "Ingrese su asunto por favor",
        patternMismatch: "Solo permite un maximo de 50 caracteres"
    },
    mensaje: {
        valueMissing: "Ingrese su mensaje por favor",
        patternMismatch: "Solo permite un maximo de 300 caracteres"
    }
}

function chequeo(target) {
    if (target.validationMessage) target.classList.add("error")
    else target.classList.remove("error")
}

export function valida({target}, aviso = target.nextElementSibling) {
    let {name, validity} = target,
    erroresCustomizados = mensajesError[name],
    mensaje = "";

    for (const propiedad in erroresCustomizados) {
        if(validity[propiedad] && erroresCustomizados[propiedad]){
            mensaje = erroresCustomizados[propiedad]
        }
    }

    target.setCustomValidity(mensaje)
    target.checkValidity()
    chequeo(target)
    aviso.innerHTML = target.validationMessage
}
