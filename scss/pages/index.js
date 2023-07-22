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