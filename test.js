// Motion predeterminado
import { animation, animations } from './node_modules/ani-motion936/Motions/motions.js'

const miElemento = document.querySelector('#mielemento');

// animacion al hacer click
const configMotion = {
    element: miElemento, // nombre del elemento
    animation: animations.repose, // la animacion, que se encuentran en el archivo _Motions.scss
    event: 'mouseover', // solo se aceptan 2 eventos: click y mouseover = hover
    timeout: 10000 // tiempo para volver a hacer click
}

new animation(configMotion)