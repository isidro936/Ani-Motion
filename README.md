# Ani-Motion 0.5

[![Version](https://img.shields.io/badge/version-0.5-blue)](https://github.com/isidro936/Ani-Motion)
[![License](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)

## Descripción

Ani-Motion es una librería de animaciones y efectos para desarrolladores web que desean agregar interactividad y atractivo visual a sus páginas web. Con Ani-Motion, puedes crear animaciones complejas y efectos de transición de manera sencilla y sin la necesidad de escribir código complicado. La librería está diseñada para ser fácil de usar, ligera y altamente personalizable.


# Ani-Mixins

Además de las animaciones y efectos predefinidos, "Ani-Motion" introduce los "Ani-Mixins": Mixins de sass personalizables.

## Instalación
Para empezar a utilizar Ani-Motion, simplemente incluye el archivo sass en tu proyecto y luego importalo al archivo sass que vayas a usar:

``` scss

@import 'dist/Ani-Mixins/ani-mixins';

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


## Instalación

Para empezar a utilizar **Ani-Motion**, simplemente incluye los archivos Sass y JavaScript en tu proyecto:

1. Descarga los archivos de la librería.
2. Importa el archivo Sass en tu proyecto principal:

```scss
@use 'dist/Motions/Motions';
```
o puedes incluirlo directamente en el HTML, aunque para algunos efectos de texto se usan los mixins de sass:

```html
<link rel="stylesheet" href="dist/Motions/Motions.css">
```

```html
<script src='dist/Motions/Motions.js'></script>
```

## Uso

Con Ani-Motions de Sass, puedes aplicar animaciones personalizadas a tus elementos HTML con solo unas pocas líneas de código. Aquí tienes un ejemplo básico de cómo usar un Motions para animar un elemento:

```html
<div class="animated-element">¡Hola, Ani-Motion!</div>

```

En tu archivo javascript:

```javascript
new animation({
    element: document.querySelector('tuElemento'),
    animation: 'vibrate',//elige tu animacion de preferencia
    timeout: 1000,//el timeout es opcional, sirve para reiniciar la animación
    event: 'click'//eventos disponibles:hover y click
    
})
```
Otro caso de uso seria para un efecto de texto cambiante:

```javascript
new TextChange({
    element: document.querySelector('.header__span'),
    texts:['Mixins','Motions','Effects'],//textos sin limite
    animation:'slideY',
    interval: 3000,//tiempo de cambio
    
})
```
# Contribución

¡Tu contribución es bienvenida! Si tienes alguna idea o mejora para Ani-Motion, siéntete libre de enviar un pull request o abrir un issue en el repositorio.

# Licencia
Ani-Motion se distribuye bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.

# Contacto

Para cualquier consulta o comentario, no dudes en contactarnos a través de animotion936@gmail.com.




