let count = 0;
console.log(count++);

import { addGrillFeatures,  grillParts } from "./createGrill";
import './style.css';
import IconBrisket from './images/brisket.jpg';


(function init() {
    (function createHeader() {
        const content = document.querySelector('.content');
        const header = document.createElement('header');
        const title = document.createElement('h1');
        title.classList.add('title');
        const titleContent = document.createTextNode('Smokey Mountain Meats');
        const hamburgerGrill = document.createElement('div');
        hamburgerGrill.classList.add('hamburgerGrill');
        hamburgerGrill.setAttribute('tabindex', '0');
        const openHamburger = document.createElement('div');
        openHamburger.classList.add('open-hamburger');
        const openUl = document.createElement('ul');
        const liHome = document.createElement('li');
        const liHomeContent = document.createTextNode('Home');
        const liMenu = document.createElement('li');
        const liMenuContent = document.createTextNode('Menu');
        const liAbout = document.createElement('li');
        const liAboutContent = document.createTextNode('About');

        liHome.appendChild(liHomeContent);
        liMenu.appendChild(liMenuContent);
        liAbout.appendChild(liAboutContent);

        openUl.appendChild(liHome);
        openUl.appendChild(liMenu);
        openUl.appendChild(liAbout);

        openHamburger.appendChild(openUl);

        title.appendChild(titleContent);

        header.appendChild(title);
        header.appendChild(hamburgerGrill);
        header.appendChild(openHamburger);

        content.appendChild(header);
    })();

    // grillParts();
    // addGrillFeatures();

})();



