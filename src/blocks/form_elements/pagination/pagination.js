


if (document.querySelector('#pagination-container')) {
   let _ = require('paginationjs');
   
   $('#pagination-container').pagination({
      dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16],
      autoHidePrevious: true,
      autoHideNext: true,
      pageRange: 1,
      // pageNumber: 1,
      showLastOnEllipsisShow: true,
      pageSize: 1,
      callback: function(data, pagination) {
         // template method of yourself
         //  var html = template(data);
         //  dataContainer.html(html);
         $('.paginationjs-next').html('<i class="material-icons"> arrow_forward </i>');
         $('.paginationjs-prev').html('<i class="material-icons"> arrow_back </i>');
      }
   })
}