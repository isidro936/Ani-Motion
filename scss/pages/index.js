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