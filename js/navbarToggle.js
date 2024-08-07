document.addEventListener('DOMContentLoaded', () => {
    const btnToggle = document.getElementById('btnToggle');
    console.log(btnToggle)

    btnToggle.addEventListener('click', ToggleFunction)

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 991) {
            const menu = document.getElementById('toggleMenu');
            menu.classList.remove('active')
        }

    })

})

function ToggleFunction() {
    console.log("Hola")
    const menu = document.getElementById('toggleMenu');
    menu.classList.toggle('active')
}