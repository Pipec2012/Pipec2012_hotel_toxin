
var dropdownArrow = document.querySelectorAll('.dropdown_arrow');

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