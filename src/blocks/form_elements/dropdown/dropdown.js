document.addEventListener('DOMContentLoaded', () => { 

   var dropdownArrow = document.querySelectorAll('.dropdown__arrow'),
      dropdownBtnApply = document.querySelectorAll('.dropdown__wrap .text__btn');

   dropdownBtnApply.forEach((element) => {
      element.addEventListener('click', (e) => {
         e.target.closest(".dropdown__options").classList.remove('dropdown--active');
         e.target.closest(".dropdown__wrap").querySelector('.dropdown__head').classList.remove('dropdown__head--active');
      });
   });

   dropdownArrow.forEach((element) => {
      element.addEventListener('click', (e) => {
         let dropdownWrap =  e.target.closest(".dropdown__wrap").querySelector('.dropdown__options'),
            dropdownHead = e.target.closest(".dropdown__wrap").querySelector('.dropdown__head');

         dropdownWrap.classList.toggle('dropdown--active');

         if (dropdownWrap.classList.contains('dropdown--active')) {
            dropdownHead.classList.add('dropdown__head--active');
         } else {
            dropdownHead.classList.remove('dropdown__head--active');
         }
      });
   });

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