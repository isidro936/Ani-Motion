const miElemento = document.querySelector('#mielemento');

new animation({
    element: miElemento,
    animation: 'slideY', 
    event: 'click',
    timeout: 1000
})