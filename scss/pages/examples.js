import { TextChange } from '../utils/Motions.js';
const headerContent = document.querySelector('.header-docs__container');
const element = document.querySelector('.header-docs__element');
const elementh1 = document.querySelector('.header-docs__h1');
const animations = document.querySelectorAll('.aside-docs__animations');
const animationsSpecials = document.querySelector('.aside-docs__animations-special')
//botones
const btnInit = document.querySelector('#btnInit');
const btnText = document.querySelector('#btnText');
const btnElement = document.querySelector('#btnElem');
//inputs
const inputAni = document.querySelector('#animation');
const inputInterval = document.querySelector('#interval');

function toggleButtons(textActive, elementActive) {
    btnText.classList.toggle('button-secondary--active', textActive);
    btnElement.classList.toggle('button-secondary--active', elementActive);
    document.querySelector('.header-docs__form').classList.toggle('header-docs__form--active', textActive);
}

elementh1.remove()

btnText.addEventListener('click', () => {
    toggleButtons(true, false);
    element.remove();
    headerContent.appendChild(elementh1);
});

btnElement.addEventListener('click', () => {
    toggleButtons(false, true);
    elementh1.remove();
    headerContent.appendChild(element);
});

btnInit.addEventListener('click', (e) => {
    e.preventDefault();
    textEvent();
    
});


function textEvent() {
    let animationValue = inputAni.value.trim();
    let intervalValue = inputInterval.value.trim();
    if (animationValue !== '') {
        let textChange = new TextChange({
            element: elementh1,
            texts: ['texto 1', 'texto 2'],
            animation: animationValue,
            interval: intervalValue
        });

        setTimeout(()=>{
            textChange.stopTextChange()
            elementh1.classList.remove(animationValue)
        },intervalValue * 4)
    } else {
        elementh1.textContent = 'Introduce algo';
    }
}

function removeAnimationClass(animationClass) {
    element.classList.remove(animationClass);
}

animations.forEach((animation) => {
    animation.addEventListener('click', (e) => {
        e.preventDefault();
        if (headerContent.contains(element)) {
            const animationClass = e.target.textContent;
            element.classList.add(animationClass);
            element.remove();
            headerContent.appendChild(element);
            setTimeout(() => {
                removeAnimationClass(animationClass);
            }, 4000);
        }else{
            inputAni.value = e.target.textContent
        }
    });
});

animationsSpecials.addEventListener('click',(e)=>{
    e.preventDefault()
    element.remove();
    headerContent.appendChild(elementh1);
    toggleButtons(true,false)
    textEvent()
})
