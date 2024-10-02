const iconomenu = document.querySelector("#icono-menu")
menu = document.querySelector("#menu")
icono = document.querySelector(".icono-menu")

iconomenu.addEventListener("click", (e) => {
    // Alternamos estilos para el menu y body
    menu.classList.toggle("active");
    icono.classList.toggle("white")

})