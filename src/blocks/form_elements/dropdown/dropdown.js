

// var dropOpen = document.querySelector('.dropdown_arrow');
// dropOpen.onclick = open_close;


// function open_close() {
//    var open = document.querySelector('.dropdown--hidden');
//    var b = document.querySelector('.dropdown_head');
//    if (open != undefined) {
//       b.classList.add('dropdown--active');
//       open.classList.remove('dropdown--hidden');
//       console.log('клик')
//    } else {
//       var close = document.querySelector('.dropdown_options');
//       close.classList.add('dropdown--hidden');
//       b.classList.remove('dropdown--active');
//    }
   
   
// }


var dropdown_items = document.querySelectorAll('.dropdown_arrow');

dropdown_items.forEach ((elem) => {
   elem.onclick = open_close;


});
   
function open_close() {
   console.log('Клик');
   
}
