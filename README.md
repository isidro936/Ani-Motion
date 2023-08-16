# Ani-Motion v0.9 Beta

[![Version](https://img.shields.io/badge/versión-0.9-blue)](https://github.com/isidro936/Ani-Motion)
[![License](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)

## Descripción

Ani-Motion es una librería de animaciones y efectos para desarrolladores web que desean agregar interactividad y atractivo visual a sus páginas web. Con Ani-Motion, puedes crear animaciones complejas y efectos de transición de manera sencilla y sin la necesidad de escribir código complicado. La librería está diseñada para ser fácil de usar, ligera y altamente personalizable.

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

@import 'Ani-Motion/Ani-Mixins/ani-mixins';

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
<script src='ani-motion936/Motions/Motions.js'></script>
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
# Contribución

¡Tu contribución es bienvenida! Si tienes alguna idea o mejora para Ani-Motion, siéntete libre de enviar un pull request

# Licencia
Ani-Motion se distribuye bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.

# Contacto

Para cualquier consulta o comentario, no dudes en contactarnos a través de animotion936@gmail.com.




