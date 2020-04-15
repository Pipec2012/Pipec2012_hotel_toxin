
/** Для диапазона дат с двумя input */

$('#range_start-booking_card').datepicker({ 
   clearButton:true,
  //  inline: true, /* Делает календарь видимым всегда*/
   navTitles: {
    days: 'MM yyyy',
    months: 'yyyy',
    years: 'yyyy1 - yyyy2'
    },
   onSelect: function (fd, d, picker) { 
     $("#range_start-booking_card").val(fd.split("-")[0]);
     $("#range_end-booking_card").val(fd.split("-")[1]);
    
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
    showDatapicker: $('#range_end-booking_card').on('click', function (ev) {
      var myDatepicker = $('#range_start-booking_card').data('datepicker');

      myDatepicker.show();
    })
    
 });