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
