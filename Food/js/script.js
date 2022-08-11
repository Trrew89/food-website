import   tabs from './modules/tabs';
import   modal from './modules/modal';
import   timer from './modules/timer';
import   slider from './modules/slider';
import   calc from './modules/calc';
import   forms from './modules/forms';
import   cards from './modules/cards';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {
    const modalTimerId = setTimeout(()=>openModal('.modal', modalTimerId), 50000);
    tabs();
    modal('[data-modal]', '.modal', modalTimerId);
    timer();
    slider();
    calc();
    forms(modalTimerId);
    cards();
});