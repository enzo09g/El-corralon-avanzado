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

    backdropMenu()
})

function ToggleFunction() {
    console.log("Hola")
    const menu = document.getElementById('toggleMenu');
    menu.classList.toggle('active')
}

function backdropMenu() {
    const li = document.querySelectorAll('.visibleUl li');
    const menuBackdrop = document.querySelector('#menuBackdrop');
    console.log(li)

    li.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const { left, top, width, height } = item.getBoundingClientRect();
            menuBackdrop.style.setProperty("--left", `${left}px`)
            menuBackdrop.style.setProperty("--top", `${top}px`)
            menuBackdrop.style.setProperty("--width", `${width}px`)
            menuBackdrop.style.setProperty("--height", `${height}px`)
            menuBackdrop.style.setProperty("opacity", 1);
        })

        item.addEventListener('mouseleave', () => {
            menuBackdrop.style.setProperty("opacity", 0);
        })
    });

}