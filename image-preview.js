variables.imageList.addEventListener('click', (event) => {
  const selectedCard = event.target.closest('.card');
  variables.newImg.src = selectedCard.querySelector('img').src;
  variables.newImg.classList.remove('hidden');
  variables.previousBtn.classList.remove('hidden');
  variables.nextBtn.classList.remove('hidden');

  document.querySelectorAll('.card').forEach(card => {
    card.classList.remove('active');
  });

  selectedCard.classList.add('active');
});

function updateButtonsState() {
  const activeCard = document.querySelector('.active');
  const prevCard = activeCard?.previousElementSibling;
  const nextCard = activeCard?.nextElementSibling;
    
  if (!prevCard) {
    variables.previousBtn.disabled = true;
    variables.previousBtn.classList.add('disabled');
  } else {
    variables.previousBtn.disabled = false;
    variables.previousBtn.classList.add('non-disabled');
  }
    
  if (!nextCard) {
    variables.nextBtn.disabled = true;
    variables.nextBtn.classList.add('disabled');
  } else {
    variables.nextBtn.disabled = false;
    variables.nextBtn.classList.add('non-disabled');
  }
}

variables.previousBtn.addEventListener('click', () => {
  const activeCard = document.querySelector('.active');
  const prevCard = activeCard.previousElementSibling;
    
  if (!prevCard) return;
    
  const prevImg = prevCard.querySelector('img');
    if (prevImg) {
      variables.newImg.src = prevImg.src;
      activeCard.classList.remove('active');
      prevCard.classList.add('active');
      updateButtonsState();
    }
});

variables.nextBtn.addEventListener('click', () => {
  const activeCard = document.querySelector('.active');
  const nextCard = activeCard?.nextElementSibling;
    
  if (!nextCard) return;
    
  const nextImg = nextCard.querySelector('img');
    if (nextImg) {
      variables.newImg.src = nextImg.src;
      activeCard.classList.remove('active');
      nextCard.classList.add('active');
      updateButtonsState();
    }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    const activeCard = document.querySelector('.active');
    const prevCard = activeCard?.previousElementSibling;
    
    if (!prevCard) return;
    
    const prevImg = prevCard.querySelector('img');
    if (prevImg) {
      variables.newImg.src = prevImg.src;
      activeCard.classList.remove('active');
      prevCard.classList.add('active');
      updateButtonsState();
    }
    } else if (event.key === 'ArrowRight') {
      const activeCard = document.querySelector('.active');
      const nextCard = activeCard.nextElementSibling;
    
      if (!nextCard) return;
    
      const nextImg = nextCard.querySelector('img');
      if (nextImg) {
        variables.newImg.src = nextImg.src;
        activeCard.classList.remove('active');
        nextCard.classList.add('active');
        updateButtonsState();
    }
    }
})