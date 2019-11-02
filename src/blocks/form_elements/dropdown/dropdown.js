var plus = document.querySelectorAll('#btn_plus');
for (var i=0; i<plus.length; i++) {
   plus[i].onclick = sum;
}

// var quantity = document.querySelectorAll('#quantity');
// for (var i=0; plus.length; i++) {
//    quantity[i] = num;
// }

function sum () {
   var test = document.querySelector('#quantity');
   test.value = 5;
   console.log(test);
}
// function num () {
   

// }

var dropOpen = document.querySelector('.dropdown_arrow');
dropOpen.onclick = open_close;
 
function open_close() {
   var b = document.querySelector('.dropdown--hidden');
   if (b != undefined) {
      
      b.classList.remove('dropdown--hidden');
      console.log('клик')
   } else {
      var a = document.querySelector('.dropdown_options');
      a.classList.add('dropdown--hidden');
   }
   
   
}


