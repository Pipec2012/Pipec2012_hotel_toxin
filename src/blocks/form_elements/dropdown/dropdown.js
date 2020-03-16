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

const btn_plus = document.querySelectorAll('.btn_plus'),
   btn_minus = document.querySelectorAll('.btn_minus');

   btn_plus.forEach((element) => {
   element.onclick = quantityValueUp;
});

function quantityValueUp(event) {
   let quantityVulue = this.previousSibling,
      btnClear = this.closest('.dropdown__options').querySelector('.dropdown__clear');
   
   this.previousSibling.previousSibling.classList.remove('disabled');
   
   btnClear.classList.remove('hidden');
   quantityVulue.value ++;
  
}

btn_minus.forEach((element) => {
   element.onclick = quantityValueDown;
});

function quantityValueDown() {
   let quantityVulue = this.nextSibling;
   
   if (this.nextSibling.value > 0) {
      
      quantityVulue.value --;
      
   }
   
   if(this.nextSibling.value == 0){

      this.classList.add('disabled');
   } 
   
   if (this.closest('.dropdown__options').querySelector('.btn_minus:not(.disabled)') === null ) {
      let btnClear = this.closest('.dropdown__options').querySelector('.dropdown__clear');
      btnClear.classList.add('hidden');
   } 
  
}
   

   event.target.addEventListener('click', (e) => { 
      
      if (e.target.classList.contains("dropdown__clear")) {
         let inputQuantity = e.target.closest(".dropdown__options").querySelectorAll(".quantity"),
            clearButton = e.target,
            btnMinus = e.target.closest(".dropdown__options").querySelectorAll(".btn_minus");

         inputQuantity.forEach((item,i) => {
            btnMinus[i].classList.add('disabled');
            item.value = 0;
            clearButton.classList.add('hidden');
         });
      }
   
      });


   


});