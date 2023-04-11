const menuIcon = document.querySelector('.menu')
const hamburgerMenu = document.querySelector('.ham-nav')
const close = document.querySelector('.close-icon')

menuIcon.addEventListener('click' , ()=> {
    hamburgerMenu.style.display = "block"
    close.style.display = "block"
    menuIcon.style.display = "none"
})

close.addEventListener('click' , ()=> {
    hamburgerMenu.style.display = "none"
    close.style.display = "none"
    menuIcon.style.display = "block"
})
