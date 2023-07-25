const btnToggle = document.querySelector('.nav__icon')
const nav = document.querySelector('.nav__ul')
const btnClose = document.querySelector('.bi-x')

btnToggle.addEventListener('click', ()=>{
    nav.classList.add('nav__ul--active')
})

btnClose.addEventListener('click', ()=>{
    nav.classList.remove('nav__ul--active')
})
