let btnList = document.getElementById('btnList');

btnList.addEventListener('click',()=>{
  navList.classList.toggle('active')
})

let donate = document.querySelectorAll('.click-donate');
let pay = document.querySelector('.pay')



donate.forEach(function(ele) {
  ele.onclick = () => {
    pay.classList.add('active2');
  }
})

closeDiv.addEventListener('click',()=>{
  pay.classList.remove('active2')
})







const slider = document.querySelector('.slider');
const sliderContainer = slider.querySelector('.slider-container');
const prevBtn = slider.querySelector('.prev-btn');
const nextBtn = slider.querySelector('.next-btn');
const cards = slider.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth;
let currentIndex = 0;

function slideLeft() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = cards.length - 1;
  }
  sliderContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function slideRight() {
  currentIndex++;
  if (currentIndex > cards.length - 1) {
    currentIndex = 0;
  }
  sliderContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

prevBtn.addEventListener('click', slideLeft);
nextBtn.addEventListener('click', slideRight);

setInterval(slideRight, 2000);
