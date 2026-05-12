variables.closeIcon.addEventListener('click', () => {
  newImg.classList.add('hidden');
  variables.previousBtn.classList.add('hidden');
  variables.nextBtn.classList.add('hidden');
  const activeCard = document.querySelector('.active');
  activeCard.classList.remove('active');
})