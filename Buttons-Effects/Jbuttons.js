export function eventButtons(props) {  
    props.element.addEventListener(props.event, ()=>{
        props.element.classList.toggle(props.effect)
    })
}

export const effects = {
    loading: 'Jbtn-loading',
    scale: 'Jbtn-scale',
    shadow: 'Jbtn-shadow'
}