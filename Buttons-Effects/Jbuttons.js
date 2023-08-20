export function eventButtons(props) {  
    props.element.addEventListener(props.event, ()=>{
        props.element.classList.add(props.effect)
    })
}

export const effects = {
    loading: 'Jbtn-loading',
}