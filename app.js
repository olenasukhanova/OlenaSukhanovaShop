// add to cart
const productsCountEl = document.getElementById("products-count")
console.log (productsCountEl);

const addToCartButtons = document.querySelectorAll(".add-to-cart");
console.log (addToCartButtons);

for(let i = 0;i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function() {
     productsCountEl.textContent = +productsCountEl.textContent +1;
  })
}



// changed like buttons
 const likedButtons = document.querySelectorAll(".heart_icon");
 console.log(likedButtons);

 for(let i = 0;i < likedButtons.length; i++) {
  likedButtons[i].addEventListener("click", function(){
   //  likedButtons[i].classList.toggle('liked');
   // console.log("clicked")
   if(this.classList.contains("liked")){
      this.classList.remove("liked")
   } else {
      this.classList.add("liked")
   }
  })
};

// modal window
let moreDetailsButtons = document.querySelectorAll(".button1");
console.log(moreDetailsButtons);
let modal = document.querySelector(".modal");
console.log(modal);
let closeBtn = document.querySelector(".btn-close");
console.log(closeBtn);

moreDetailsButtons.forEach(function(btn) {
 btn.addEventListener("click",function() {  
  modal.classList.add("show")
  modal.classList.remove("hide")
 })
})

function closeModal() {
   modal.classList.add("hide");
   modal.classList.remove("show")
}

closeBtn.addEventListener("click",closeModal)

modal.addEventListener("click",function(e){
   if(e.target === modal) {
      closeModal()
   }
})