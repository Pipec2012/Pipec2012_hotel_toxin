document.addEventListener('DOMContentLoaded', () => { 


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

const dropdownForm = document.querySelectorAll('.quantity'),
   clearButton = document.querySelector('.dropdown__clear'),
   btn_plus = document.querySelectorAll('.btn_plus'),
   btn_minus = document.querySelectorAll('.btn_minus');

   btn_plus.forEach((element) => {
   element.onclick = quantityValueUp;
});

function quantityValueUp() {
   let test = this.previousSibling;
   this.previousSibling.previousSibling.classList.remove('disabled');
   clearButton.classList.remove('hidden');
   test.value ++;
  
}

btn_minus.forEach((element) => {
   element.onclick = quantityValueDown;
});

function quantityValueDown() {
   var test = this.nextSibling;
   
   if (this.nextSibling.value > 0) {
      
      test.value --;
      
   }
   
   if(this.nextSibling.value == 0){

      this.classList.add('disabled');
   } 
   
   if (document.querySelector('.btn_minus:not(.disabled)') === null ) {
      
      clearButton.classList.add('hidden');
   } 
  
}
   
clearButton.addEventListener('click', () => { 
        
      dropdownForm.forEach((item,i) => {
         btn_minus[i].classList.add('disabled');
         item.value = 0;
         clearButton.classList.add('hidden');
      });
   
      });

});