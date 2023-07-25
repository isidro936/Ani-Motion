class AniIntersection {
    constructor(objectProp) {
        this._objectProp = objectProp

        const options = {
        root: null, 
        threshold: 0.1 
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


class TextChange {
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
        }, this._objectProp.interval);
    }
}

class animation{
    constructor(objectProp){
        this._objectProp = objectProp;

        if(this._objectProp.event === undefined){
            this._eventNull()
        }else(
            this._event()
        )
    }
    _addAnimation(){
        this._objectProp.element.classList.add(this._objectProp.animation)
    }

    _timeout(){
        setTimeout(()=>{
            this._objectProp.element.classList.remove(this._objectProp.animation)
        }, this._objectProp.timeout)
    }

    _event(){
        this._objectProp.element.addEventListener(this._objectProp.event,()=>{
            this._addAnimation()

            if(this._objectProp.timeout != undefined){
                this._timeout()
            }
        })
    }
    _eventNull(){
        this._addAnimation()
    } 
}