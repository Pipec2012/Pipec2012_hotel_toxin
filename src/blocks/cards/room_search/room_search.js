let _ = require('air-datepicker');


/** Для диапазона дат с двумя input */

$('#range_start-room_search').datepicker({ 
   clearButton:true,
  //  inline: true, /* Делает календарь видимым всегда*/
   navTitles: {
    days: 'MM yyyy',
    months: 'yyyy',
    years: 'yyyy1 - yyyy2'
    },
   onSelect: function (fd, d, picker) { 
     $("#range_start-room_search").val(fd.split("-")[0]);
     $("#range_end-room_search").val(fd.split("-")[1]);
    
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
    showDatapicker: $('#range_end-room_search').on('click', function (ev) {
      var myDatepicker = $('#range_start-room_search').data('datepicker');

      myDatepicker.show();
    })
    
 });