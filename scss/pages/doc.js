const mainDocClose = document.querySelector('.main-doc__aside-close')

mainDocClose.addEventListener('click', ()=>{
    document.querySelector('.main-doc__aside').classList.toggle('main-doc__aside--active')
})