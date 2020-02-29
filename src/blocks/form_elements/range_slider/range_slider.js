let _ = require('ion-rangeslider');


var min__price = $(".min__price"),
  max__price = $(".max__price"),
    from = 0,
    to = 0;

$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 15000,
    from: 5000,
    to: 10000,
    step: 100,
    onStart: updateInputs,
    onChange: updateInputs
});

  
function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    min__price.text(from + '₽');
    max__price.text(to + '₽');
    
}


