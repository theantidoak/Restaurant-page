/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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




/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGNvdW50ID0gMDtcbmNvbnNvbGUubG9nKGNvdW50KyspO1xuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHN2Z09iamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdmctb2JqZWN0Jyk7XG5cbiAgICBjb25zdCBncmlsbFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlsbC10b3AyJyk7XG4gICAgc3ZnT2JqZWN0LmNvbnRlbnREb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnZlbnRzXCIpLmZvckVhY2godmVudCA9PiB2ZW50LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjZTI1ODIyXCIpKTtcbiAgICBmdW5jdGlvbiBjaGFuZ2VWZW50Q29sb3JzKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAnbW91c2VsZWF2ZScpIHtcbiAgICAgICAgICAgIHN2Z09iamVjdC5jb250ZW50RG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi52ZW50c1wiKS5mb3JFYWNoKHZlbnQgPT4gdmVudC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiI2UyNTgyMlwiKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlZW50ZXInKSB7XG4gICAgICAgICAgICBzdmdPYmplY3QuY29udGVudERvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudmVudHNcIikuZm9yRWFjaCh2ZW50ID0+IHZlbnQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcImJsYWNrXCIpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdyaWxsVG9wLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBjaGFuZ2VWZW50Q29sb3JzKTtcbiAgICBncmlsbFRvcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgY2hhbmdlVmVudENvbG9ycyk7XG5cbn0sIDEwMDApO1xuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9