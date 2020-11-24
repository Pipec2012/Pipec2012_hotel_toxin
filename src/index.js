import "./style.styl";
import "./ui_kit.styl";

import "./blocks/form_elements/form_elements";
import "./blocks/cards/cards";
import "./blocks/headers_footers/headers/header";
import { event } from "jquery";

    $('.mask-date').mask('99.99.9999');
   

var roomSearchFilterBnt = document.querySelector('.rooms_mobile__btn'),
    roomSearchFilterClose = document.querySelector('.mobile_filter_close'),
    filterBlock = document.querySelector('.filter_column');

if (roomSearchFilterBnt !== null) {
    roomSearchFilterBnt.addEventListener('click', () => {
        filterBlock.classList.remove('mobile_filter_slide');
    })
    
    roomSearchFilterClose.addEventListener('click', () => {
        filterBlock.classList.add('mobile_filter_slide');
    })
}
