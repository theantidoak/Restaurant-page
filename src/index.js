let count = 0;
console.log(count++);

import { createHeader } from "./header";
import { addGrillFeatures,  grillParts, createTabs } from "./homepage";
import './style.css';
import { createMenu } from "./menu";
import IconBrisket from './images/brisket.jpg';
import { createAbout } from "./about";


(function init() {
    grillParts();
    addGrillFeatures();
    createTabs();
})();







