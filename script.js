const ratings=document.querySelectorAll('.rating')
const panel=document.getElementById('panel')
const Submitbtn=document.querySelector('.btn')
const ratingContainer=document.querySelector('.emojis')

let selectedRating='Satisfied'

ratingContainer.addEventListener('click',(e)=>{
   if(e.target.parentNode.classList.contains('rating')){
     removeActive()
    e.target.parentNode.classList.add('active')
  selectedRating= e.target.nextElementSibling.innerText;
   }
})
Submitbtn.addEventListener('click',()=>{
    panel.innerHTML=`
    <i class="fas fa-heart"></i>
    <strong>THANK YOU!</strong>
    <br>
     <strong>Feedback :${selectedRating}</strong>
     <p>We'll use your feedback to improve our customer support</p>
    `
})
function removeActive(){
    for(let i=0;i<ratings.length;i++){
        ratings[i].classList.remove('active')
    }
}