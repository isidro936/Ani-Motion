# Ani-Motion936 v1.1

[![Version](https://img.shields.io/badge/versión-1.1-blue)](https://github.com/isidro936/Ani-Motion)
[![License](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)

## Descripción

Ani-Motion936 es una librería de animaciones y efectos para desarrolladores web que desean agregar interactividad y atractivo visual a sus páginas web. Con Ani-Motion, puedes crear animaciones complejas y efectos de manera sencilla y sin la necesidad de escribir código complicado. La librería está diseñada para ser fácil de usar, ligera y altamente personalizable.

**[Leer documentación](https://isidro936.github.io/Ani-Motion/docs.html)**

# Novedades

* ### **Motions**: 

1. En todas las clases, se han reemplazado las propiedades de tiempo (timeout e interval) por simplemente "time".

2. Se agrego un nuevo efecto a la libreria con codigo sass and JS: efecto de escritura **(type text)**

* ### **Img-Effects**: 

1. Se cambio el nombre del efecto sass "zoom-img" a "ImgScroll" para que concuerde con su contraparte JS.

2. Se agrego nuevo efecto zoomImg: Este mixin aplica transición y escala a imágenes con suavidad al hacer hover.

* ### **Buttons-Effects**:

1. se agrego una clase ".btn-up" aplica animación al hacer hover con sombra y efecto de translación. 

2. El mixin personalizado "btn-up" permite ajustes flexibles de sombra y translación.


# Cómo Instalar Ani-Motion

Puedes integrar Ani-Motion en tu proyecto de dos formas: descargando directamente desde el repositorio en la rama Dist o instalándolo mediante npm

## Instalación desde este Repositorio

* Dirigete a la rama Dist del repositorio

* Haz clic en el botón "Code" y selecciona "Download ZIP" para descargar el archivo ZIP del repositorio.

* Descomprime el archivo ZIP en tu proyecto.

## Instalación mediante npm

* Abre la terminal y navega hasta la raíz de tu proyecto.


* Ejecuta el siguiente comando para instalar Ani-Motion a través de npm:  

```sh
npm install ani-motion936
```

# Ani-Mixins

"Ani-Motion" introduce los "Ani-Mixins": Mixins de sass personalizables.

### Instalación
Para empezar a utilizar Ani-Motion, simplemente incluye el archivo sass en tu proyecto y luego importalo al archivo sass que vayas a usar:

``` scss

@import 'ani-motion936/Ani-Mixins/ani-mixins';

```
### Uso

A continuación, se muestra un ejemplo básico de cómo usar Ani-Motion para animar un elemento:

``` html
<div class="animated-element">¡Hola, Ani-Motion!</div>
```

En tu archivo sass donde tienes los estilos del elemento:

``` scss
.animated-element{
    width: 200px;
    height: 200px;
    background: aqua;
    display:flex;
    justify-content:center;
    align-items: center;
    // incluye el mixin de tu animacion de preferencia
    @include slideY($duration, $delay, $mode, $time-line, $distance);
}

```
### Características Principales

* Amplia colección de animaciones predefinidas y efectos personalizables.

* Fácil integración y uso con solo unas pocas líneas de código.

* Totalmente personalizable: ajusta la duración, retraso y más.

# Motions

Es la librería más grande de este conjunto que fusiona las animaciones de los mixins en clases, nuevas formas de aplicar las animaciones y animaciones para texto e imágenes.

## Instalación

Para empezar a utilizar **Motion**, simplemente incluye los archivos Sass y JavaScript en tu proyecto:

1. Descarga los archivos de la librería.

2. Importa el archivo Sass en tu proyecto principal:

```scss
@use 'ani-motion936/Motions/Motions';
```
o puedes incluirlo directamente en el HTML, aunque para algunos efectos de texto se usan los mixins de sass:

```html
<link rel="stylesheet" href="ani-motion936/Motions/Motions.css">
```

```html
<script src='ani-motion936/Motions/JMotions.js'></script>
```

## Uso

Con Motions, puedes aplicar animaciones personalizadas a tus elementos HTML con solo unas pocas líneas de código. Aquí tienes un ejemplo básico de cómo usar un Motions para animar un elemento:

```html
<div class="animated-element">¡Hola, Ani-Motion!</div>
```

En tu archivo javascript:

```javascript
const tuElemento = document.querySelector('.animated-element')

new animation({
    element: tuElemento,
    animation: animations.slideY,//elige tu animacion de preferencia
    timeout: 1000,//el timeout es opcional, sirve para reiniciar la animación
    event: 'click'//eventos de javascript para enpezar la animacion
    
})
```
Otro caso de uso seria para un efecto de texto cambiante:

```javascript
const h1 = document.querySelector('.title')

new TextChange({
    element: h1,
    texts:['Mixins','Motions','Effects'],//textos sin limite
    animation:animations.scale,
    interval: 3000,//tiempo de cambio
})
```

# Buttons Effects (Beta)

¡Bienvenido a Buttons Effects! Esta emocionante librería se encuentra actualmente en fase beta y te ofrece una vista previa de los futuros efectos de botones que estamos desarrollando para enriquecer tus diseños web. Con Buttons Effects Beta, puedes dar un toque especial a tus botones y crear interacciones atractivas con tus usuarios.

## Características Actuales

- ****Efectos de:**** loading, scale y shadow
- Añade dinamismo a tus botones con el eventButton

Estamos trabajando duro para ampliar la gama de efectos y proporcionarte una amplia gama de opciones para tus botones.Cualquier opinión o idea es bienvenida.

## Cómo Comenzar

1. Importa el archivo scss a tu proyecto

```scss
@import 'Buttons-Effects/buttons';
```
2. Y si lo necesitas, tambien puedes importar el archivo JS

```js
import {effects, eventButtons} from './Buttons-Effects/Jbuttons.js'
```


**Nota:** Buttons-Effects está en pleno desarrollo, lo que significa que puedes esperar más actualizaciones y nuevos efectos a medida que avanzamos.


# Image Effects (Beta)

¡Bienvenido a Efectos de Imágenes Ani-Motion! Esta librería está en fase beta y te ofrece una vista previa emocionante de los próximos avances de los efectos de imágenes para la web. Aunque actualmente en desarrollo, Ani-Motion Beta te permite experimentar con los primeros efectos de imágenes que estamos construyendo.

## Características Actuales

- Aplica efectos sutiles de parallax a fondos
- Aplica imagenes en textos más facilmente

- Usa el imgScroll para crear una transicion suave a las imagenes al entrar en pantalla

Estamos trabajando arduamente para expandir nuestra colección de efectos y brindarte herramientas poderosas para elevar tus diseños web. Mientras tanto, nos encantaría que pruebes lo que tenemos hasta ahora y nos des tu opinión, si tienes alguna idea para algún efecto no dudes en contactarnos.

## Cómo Comenzar

1. Importa el archivo sass al proyecto en cuestion.

```scss
@import 'Img-Effects/imgEff';
```

2. Si lo necesitas para el efecto de imgcroll

```javascript
import {imgScroll} from './Img-Effects/imgEff.js'
```

**Nota:** img-Effects está en desarrollo activo y se esperan más actualizaciones en el futuro cercano. Mantente atento a nuevas versiones y efectos emocionantes.

## Uso
A continuación se proporcionara un ejemplo de cómo usar la librería:

Tu elemento:
```html
<img src="https://yt3.googleusercontent.com/PnauUllezwGri2kY-taQRS96rFPLr4HnxvfV_ulkyfGZW4Ep5NUeWI_mr-MxHrNTLeWgoprM=s900-c-k-c0x00ffffff-no-rj" alt="" class="zoom-image">
```

Estilos:

```scss
.zoom-image{
    @include zoom-image($time, $time-line)
}
```

en tu archivo javascript
``` javascript
imgScroll({
    element:document.querySelector('zoom-image'),
    minScale: 1,
    maxScale: 1.6,
    units: 0.005
})
```

# Contribución

¡Tu contribución es bienvenida! Si tienes alguna idea o mejora para Ani-Motion, siéntete libre de enviar un pull request.

# Licencia
Ani-Motion se distribuye bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.

# Contacto

Para cualquier consulta o comentario, no dudes en contactarnos a través de animotion936@gmail.com.

# Redes sociales

Puedes seguirnos en:

* [You Tube](https://www.youtube.com/channel/UCnTyr-4JK53fifOkm0upwvQ)

* [Tik Tok](https://www.tiktok.com/@ani_motion936)

* [Instagram](https://www.instagram.com/animotion936/)