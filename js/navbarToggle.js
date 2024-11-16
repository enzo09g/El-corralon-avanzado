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
    const liArray = document.querySelectorAll('.visibleUl li');
    const menu = document.getElementById('menuBackdrop')

    liArray.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const { width, top, left, height } = item.getBoundingClientRect();
            menu.style.setProperty('--width', `${width}px`)
            menu.style.setProperty('--top', `${top}px`)
            menu.style.setProperty('--left', `${left}px`)
            menu.style.setProperty('--height', `${height}px`)
            menu.style.opacity = 1;
        })
        item.addEventListener('mouseleave', () => {
            menu.style.opacity = 0;
        })
    });

    console.log(liArray)
}