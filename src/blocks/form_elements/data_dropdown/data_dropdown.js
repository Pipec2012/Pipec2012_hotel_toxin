// let _ = require('../../../../node_modules/datepicker/jquery.datepicker.extension.range.min');
let _ = require('air-datepicker');

/** Для фильтра дат */

$('#filter_dropdown').datepicker({ 
  clearButton:true,
  dateFormat: "d M",
 //  inline: true, /* Делает календарь видимым всегда*/
  navTitles: {
   days: 'MM yyyy',
   months: 'yyyy',
   years: 'yyyy1 - yyyy2'
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
     
   },
   nextHtml: '<span class="material-icons datapicker_arrow">arrow_forward</span>',
   prevHtml: '<span class="material-icons datapicker_arrow">arrow_back</span>',
   
});

/** Для диапазона дат с двумя input */

$('#range_start').datepicker({ 
   clearButton:true,
  //  inline: true, /* Делает календарь видимым всегда*/
   navTitles: {
    days: 'MM yyyy',
    months: 'yyyy',
    years: 'yyyy1 - yyyy2'
    },
   onSelect: function (fd, d, picker) { 
     $("#range_start").val(fd.split("-")[0]);
     $("#range_end").val(fd.split("-")[1]);
    
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
      
    },
    nextHtml: '<span class="material-icons datapicker_arrow">arrow_forward</span>',
    prevHtml: '<span class="material-icons datapicker_arrow">arrow_back</span>',
    showDatapicker: $('#range_end').on('click', function (ev) {
      var myDatepicker = $('#range_start').data('datepicker');

      myDatepicker.show();
    })
    
 });