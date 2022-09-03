let count = 0;
console.log(count++);

import { createHeader } from "./header";
import { addGrillFeatures,  grillParts } from "./homepage";
import './style.css';
import { createMenu } from "./menu";
import IconBrisket from './images/brisket.jpg';
import { createAbout } from "./about";


(function init() {
    grillParts();
    addGrillFeatures();
    createTabs();
})();

function createTabs() {
    

    const headerH1 = document.querySelector('header h1');
    
    headerH1.addEventListener('click', grillParts);
    headerH1.addEventListener('click', addGrillFeatures);

    const home = document.querySelector('header li:first-child');

    home.addEventListener('click', grillParts);
    home.addEventListener('click', addGrillFeatures);

    const menu = home.nextElementSibling;

    menu.addEventListener('click', createMenu);

    const about = menu.nextElementSibling;

    about.addEventListener('click', createAbout);

};





