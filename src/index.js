let count = 0;
console.log(count++);

setTimeout(function() {
    const svgObject = document.getElementById('svg-object');

    const grillTop = document.querySelector('.grill-top2');
    svgObject.contentDocument.querySelectorAll(".vents").forEach(vent => vent.setAttribute("fill", "#e25822"));
    function changeVentColors(event) {
        if (event.type === 'mouseleave') {
            svgObject.contentDocument.querySelectorAll(".vents").forEach(vent => vent.setAttribute("fill", "#e25822"));
        } else if (event.type === 'mouseenter') {
            svgObject.contentDocument.querySelectorAll(".vents").forEach(vent => vent.setAttribute("fill", "black"));
        }
    }

    grillTop.addEventListener('mouseenter', changeVentColors);
    grillTop.addEventListener('mouseleave', changeVentColors);

}, 1000);



