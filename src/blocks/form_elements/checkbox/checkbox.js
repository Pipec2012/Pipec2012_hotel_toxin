document.addEventListener('DOMContentLoaded', () => { 

const checkbox = document.querySelectorAll('.checkbox__head');

checkbox.forEach((el) => {

   el.addEventListener('click', (event) => {

      const checkboxList = event.currentTarget.parentElement.querySelector('.checkbox__options'),
         checkboxArrow = event.currentTarget.parentElement.querySelector('.checkbox__arrow');

      checkboxList.classList.toggle("checkbox--hidden");
      checkboxArrow.classList.toggle("checkbox__arrow--rotate");
      
   })

});


});