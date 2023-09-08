import {TextChange, AniIntersection, animation} from '../utils/Motions.js'


const textChangeHeader = new TextChange({
    element: document.querySelector('.header__span'),
    texts:['Mixins','Motions','Button-Effects', 'Img-Effects'],
    animation:'slideY',
    interval: 3000,
    
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

new AniIntersection({
    element: document.querySelector('.about-mixin__h3'),
    animation: 'slideY'
})

const texts = new TextChange({
    element: document.querySelector('.about-mixin_elementP'),
    texts:[' potencia!',' versatilidad!'],
    animation:'fadeOff',
    interval: 2000
})
