document.addEventListener('DOMContentLoaded', () => { 

   const likeButtons = document.querySelectorAll('.like_button_body');
   
   likeButtons.forEach((el) => {
   
      el.addEventListener('click', (event) => {
   
         const likeBtn = event.currentTarget,
            likeHeart = event.currentTarget.querySelector(".fa-heart"),
            likeQuanity = event.currentTarget.querySelector(".like__quantity");
         let likeCheck = likeBtn.classList.contains("like_button--checked");
         
         likeBtn.classList.toggle("like_button--checked");
         likeHeart.classList.toggle("fas");
         likeHeart.classList.toggle("far");
         
         (likeCheck === false) ? likeQuanity.textContent ++ : likeQuanity.textContent --;
         
      })
   
   });
   
   
   });