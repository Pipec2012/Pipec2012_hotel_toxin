// let _ = require('../../../../node_modules/datepicker/jquery.datepicker.extension.range.min');
let _ = require('air-datepicker');




/** Для диапазона дат с двумя input */

$('#start_one').datepicker({ 
   clearButton:true,
  //  inline: true,
   navTitles: {
    days: 'MM yyyy',
    months: 'yyyy',
    years: 'yyyy1 - yyyy2'
    },
   onSelect: function (fd, d, picker) { 
     $("#start_one").val(fd.split("-")[0]);
     $("#end_one").val(fd.split("-")[1]);
   },
   onShow(inst, animationCompleted) {
      if (!animationCompleted) {
        if (!inst.$datepicker.find('.datepicker--buttons .datepicker--button-apply').length) {
          $('<span class="datepicker--button datepicker--button-apply">Применить</span>').on('click', function (e) {
            e.stopPropagation();
            inst.hide();
          }).appendTo(inst.$datepicker.find('.datepicker--buttons'));
        }
      }
      let arrowPrev = document.querySelector('[data-action="prev"]'),
        arrowNext = document.querySelector('[data-action="next"]');
        arrowNext.innerHTML = '<span class="material-icons datapicker_arrow">arrow_forward</span>';
        arrowPrev.innerHTML = '<span class="material-icons datapicker_arrow">arrow_back</span>'
    }
  
 });

