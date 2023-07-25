
const btnCopy = document.querySelectorAll('.bi-clipboard');

btnCopy.forEach((btncopiar) => {
    btncopiar.addEventListener('click', () => {
        var contenido = btncopiar.previousElementSibling.textContent;
        var inputTemporal = document.createElement('input');
        inputTemporal.value = contenido;
        document.body.appendChild(inputTemporal);
        inputTemporal.select();
        document.execCommand('copy');
        document.body.removeChild(inputTemporal);

        btncopiar.classList.remove('bi-clipboard');
        btncopiar.classList.add('bi-clipboard-check');

        setTimeout(() => {
            btncopiar.classList.remove('bi-clipboard-check');
            btncopiar.classList.add('bi-clipboard');
        }, 2000);
    });
});



new TextChange({
    element: document.querySelector('.header__span'),
    texts:['Mixins','Motions','Effects'],
    animation:'slideY',
    interval: 3000,
    
})

new animation({
    element: document.querySelector('.version'),
    animation: 'vibrate',
    timeout: 1000,
    event: 'click'
    
})

new animation({
    element: document.querySelector('.cube1'),
    animation: 'scaleReverse',
    event: 'click'
})

new animation({
    element: document.querySelector('.cube2'),
    animation: 'vibrate',
    event: 'click'
})

new animation({
    element: document.querySelector('.cube3'),
    animation: 'float',
    event: 'click'
})

new animation({
    element: document.querySelector('.cube4'),
    animation: 'repose',
    event: 'click'
})