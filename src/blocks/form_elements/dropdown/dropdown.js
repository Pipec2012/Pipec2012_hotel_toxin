
var dropdownArrow = document.querySelectorAll('.dropdown__arrow');

dropdownArrow.forEach((element) => {
   element.onclick = showDropdown;
});

function showDropdown() {

   
   var dropdown_body = this.parentElement.nextSibling;
   let checkClass = dropdown_body.classList.contains('dropdown--hidden');

      
      var dropdown_head = this.parentElement;
      if (checkClass) {
         dropdown_head.classList.add('dropdown--active');
         dropdown_body.classList.remove('dropdown--hidden');
      } else {
         dropdown_body.classList.add('dropdown--hidden');
         dropdown_head.classList.remove('dropdown--active');
      }
      
}

var test_2 = document.querySelector('.quantity');
var clearButton = document.querySelector('.dropdown__clear');


var plus = document.querySelectorAll('#btn_plus');

plus.forEach((element) => {
   element.onclick = quantityValueUp;
});

function quantityValueUp() {
   let test = this.previousSibling;
   this.previousSibling.previousSibling.classList.remove('disabled');
   clearButton.classList.remove('hidden');
   test.value ++;
  
}


var minus = document.querySelectorAll('#btn_minus');

minus.forEach((element) => {
   element.onclick = quantityValueDown;
});

function quantityValueDown() {
   var test = this.nextSibling;
   
   if (this.nextSibling.value > 0) {
      
      test.value --;
      
   } if(this.nextSibling.value == 0){
      this.classList.add('disabled');
      clearButton.classList.add('hidden');
   } 
  
}


clearButton.onclick = formReset;

function formReset() {
   let form = document.querySelector('.dropdown_form');
   form.reset();
   clearButton.classList.add('hidden');
   
}
