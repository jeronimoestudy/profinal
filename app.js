const iconomenu = document.querySelector("#icono-menu")
menu = document.querySelector("#menu")

iconomenu.addEventListener("click", (e) => {
    // Alternamos estilos para el menu y body
    menu.classList.toggle("active");
    document.body.classList.toggle("opacity");
    

})