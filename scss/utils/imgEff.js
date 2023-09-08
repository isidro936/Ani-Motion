export const imgScroll = function(props){
    window.addEventListener("scroll",() => {
        const scrollTop = window.scrollY;
        const scale = 1 + scrollTop * props.units;
        const limitedScale = Math.min(props.maxScale, Math.max(props.minScale, scale));
        props.element.style.transform = `scale(${limitedScale})`;
    });
}