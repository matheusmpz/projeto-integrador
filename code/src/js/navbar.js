const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const menuOverlay = document.getElementById('menu-overlay');

menuToggle.addEventListener('click', () => {
  menuOverlay.classList.remove('hidden'); 
  menuToggle.classList.add('hidden');    
  menuClose.classList.remove('hidden');  
});

menuClose.addEventListener('click', () => {
  menuOverlay.classList.add('hidden');  
  menuClose.classList.add('hidden'); 
  menuToggle.classList.remove('hidden');
});