const butOnClick = function () {
    const inputNombre = document.getElementById("nombre")
    const inputCorreo = document.getElementById("correo")
    const inputMensaje = document.getElementById("mensaje")

    // Validacion de vacios
    if (inputNombre.value == "" || 
        inputCorreo.value == "" ||
        inputMensaje.value == ""
    ) {
        //Error
        console.error("No ha llenado todos los datos")
        const divMensaje = document.getElementById("texto_mensaje")
        divMensaje.setAttribute("class", "alert alert-danger centrado")
        divMensaje.innerText = "No ha llenado todos los datos"
        return
    }

    // Validacion de correo
    if (!inputCorreo.value.includes("@") ||
        !inputCorreo.value.includes(".") 
    ) {
        //Error
        console.error("No utiliza un formato de email valido")
        const divMensaje = document.getElementById("texto_mensaje")
        divMensaje.setAttribute("class", "alert alert-danger centrado")
        divMensaje.innerText = "No utiliza un formato de email valido"
        return
    }

    // No hay error
    console.log("Formulario enviado correctamente")
    const divMensaje = document.getElementById("texto_mensaje")
    divMensaje.setAttribute("class", "alert alert-success centrado")
    divMensaje.innerText = "Formulario enviado correctamente"
}

const main = function() {
    const but = document.getElementById("but_enviar")
    but.addEventListener("click", butOnClick)
}

main()