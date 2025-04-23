let contador = 0

const butOnClick = function() {
    contador++

    const p = document.getElementById("contador")
    p.innerText = "Contador de clicks: " + contador

    if (contador == 10) {
        p.setAttribute("class", "fondo_rojo")
    }
}

const main = function() {
    const but = document.getElementById("but")
    but.addEventListener("click", butOnClick)
}

main()