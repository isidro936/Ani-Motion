export class AniIntersection {
    constructor(objectProp) {
        this._objectProp = objectProp

        const options = {
            root: null,
            threshold: this._objectProp.limitView
        };

        const observer = new IntersectionObserver(this.handleIntersection.bind(this), options);

        observer.observe(this._objectProp.element);

    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this._objectProp.element.classList.add(this._objectProp.animation);
            } else {
                this._objectProp.element.classList.remove(this._objectProp.animation);
            }

        });


    }
}


export class TextChange {
    constructor(objectProp) {
        this._objectProp = objectProp;
        this._currentIndex = 0;
        this._objectProp.element.textContent = this._objectProp.texts[this._currentIndex];

        this._objectProp.element.classList.add(this._objectProp.animation);

        this._startTextChange();
    }

    _startTextChange() {
        setInterval(() => {
            this._currentIndex = (this._currentIndex + 1) % this._objectProp.texts.length;
            this._objectProp.element.textContent = this._objectProp.texts[this._currentIndex];
            this._objectProp.element.classList.remove(this._objectProp.animation);
            void this._objectProp.element.offsetWidth;
            this._objectProp.element.classList.add(this._objectProp.animation);
        }, this._objectProp.time);
    }
}

export class animation {
    constructor(objectProp) {
        this._objectProp = objectProp;

        if (this._objectProp.event === undefined) {
            this._eventNull()
        } else (
            this._event()
        )
    }
    _addAnimation() {
        this._objectProp.element.classList.add(this._objectProp.animation)
    }

    _timeout() {
        setTimeout(() => {
            this._objectProp.element.classList.remove(this._objectProp.animation)
        }, this._objectProp.timeout)
    }

    _event() {
        this._objectProp.element.addEventListener(this._objectProp.event, () => {
            this._addAnimation()

            if (this._objectProp.time != undefined) {
                this._timeout()
            }
        })
    }
    _eventNull() {
        this._addAnimation()
    }
}

//todas las animaciones disponibles
export const aniObjects = {
    slideY: 'slideY',
    slideX: "SlideX",
    fadeOff: "fadeOff",
    rotate360: "rotate360",
    spiral: "spiral",
    float: "float",
    scaleReverse: "scaleReverse",
    scale: "scale",
    reboundTop: "reboundTop",
    vibrate: "vibrate",
    repose: "repose",
    roll: "roll",
    rollLeft: "rollLeft",
    rollRight: "rollRight",
    btnScale: "btn-scale",  //para botones
    entrance: 'entrance',
    exit: 'exit',
}

export class TypeText {
    constructor(props) {
        this._props = props;
        this._index = 0;
        this._props.element = this._props.element === undefined ? document.querySelector('.typewriter-text') : this._props.element;
        this._type();
    }

    _type() {
        if (this._index < this._props.text.length) {
            this._props.element.textContent += this._props.text.charAt(this._index);
            this._index++;
            setTimeout(() => {
                this._type();
            }, this._props.time === undefined ? 100 : this._props.time);
        }
    }
}

