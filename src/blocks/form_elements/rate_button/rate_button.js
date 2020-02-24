document.addEventListener('DOMContentLoaded', () => { 

   const rateStars = document.querySelectorAll('.rate_star');
   
   rateStars.forEach((el) => {

         
   
         el.addEventListener('click', (event) => {
      
            const rateStar = event.target,
               targetStars = rateStar.parentNode.querySelectorAll('.rate_star');

            removeClass(targetStars, 'active');
            rateStar.classList.add('active');
            
            
         }) 

         
         
      });
      const removeClass = (elements, className) => {
         for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove(className);
         }
      }
   });
   

   