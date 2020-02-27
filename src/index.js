import "./style.styl";
import "./ui_kit.styl";
import "./blocks/form_elements/jquery.maskedinput.min.js";
import "./blocks/form_elements/dropdown/dropdown";
import "./blocks/form_elements/checkbox/checkbox";
import "./blocks/form_elements/like_button/like_button";
import "./blocks/form_elements/rate_button/rate_button";
import "./blocks/form_elements/range_slider/range_slider";
    // $('.mask-date').mask('99.99.9999');
let _ = require('ion-rangeslider');


        $(".js-range-slider").ionRangeSlider({
           type: "double",
           min: 0,
           max: 1000,
        //    from: 200,
        //    to: 500,
           
        });
     