// Motion predeterminado
import { AniInteraction, animation, TextChange, animations } from './node_modules/ani-motion936/Motions/motions.js'

const miElemento = document.querySelector('#mielemento');

// animacion al hacer click

new animation({
    element: miElemento, // nombre del elemento
    animation: animations.repose, // la animacion, las animaciones dispobles se almacenan en este objeto
    event: 'mouseover', // solo se aceptan 2 eventos: click y mouseover = hover
    timeout: 10000 // tiempo para volver a hacer click
})

/* Ejemplo de animacion con interaction Observer*/

// new AniInteraction({
//     element: miElemento,
//     animation: animations.exit,
//     // limitView: 0.7 //cuando el elemento se vea un 70% iniciara la animación
// })


/*  elemplo de texto cambiate  */

const miTexto = document.querySelector('#miTexto')

new TextChange({
    element: miTexto,
    texts: ['Mixins', 'Motions', 'Effects'],//textos, sin limite
    animation: animations.scaleReverse,
    interval: 3000,//tiempo de cambio
})