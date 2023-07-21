# Ani-Motion 0.5

[![Version](https://img.shields.io/badge/version-0.5-blue)](https://github.com/isidro936/Ani-Motion)
[![License](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)

## Descripción

Ani-Motion es una librería de animaciones y efectos para desarrolladores web que desean agregar interactividad y atractivo visual a sus páginas web. Con Ani-Motion, puedes crear animaciones complejas y efectos de transición de manera sencilla y sin la necesidad de escribir código complicado. La librería está diseñada para ser fácil de usar, ligera y altamente personalizable.


# Ani-Mixins

Además de las animaciones y efectos predefinidos, "Ani-Motion" introduce los "Ani-Mixins": Mixins de sass personalizables.

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

Versión beta 0.5
# Contribución

¡Tu contribución es bienvenida! Si tienes alguna idea o mejora para Ani-Motion, siéntete libre de enviar un pull request o abrir un issue en el repositorio.

# Licencia
Ani-Motion se distribuye bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.

# Contacto

Para cualquier consulta o comentario, no dudes en contactarnos a través de animotion936@gmail.com.




