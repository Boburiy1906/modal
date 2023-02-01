const modalBox = document.querySelector('.modal-box');
const closeBtn = document.querySelector('.close');
const modalBtn = document.querySelector('.button');
const overlay = document.querySelector('.overlay');

modalBtn.addEventListener('click', (even) => {
  modalBox.style.display = "flex";
  overlay.style.display = "block";
})

closeBtn.addEventListener('click', () => {
  modalBox.style.display = 'none';
  overlay.style.display = 'none';
})

document.addEventListener('keydown', (key) => {
if(key.key == 'Escape'){
  modalBox.style.display = 'none';
  overlay.style.display = 'none';
}
})

overlay.addEventListener('click' , ()=> {
  modalBox.style.display = 'none';
  overlay.style.display = 'none';
})