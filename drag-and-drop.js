for (const card of variables.cards) {
  card.draggable = true;
}

let draggedCard = undefined;

document.addEventListener('dragover', (event) => {
  if (draggedCard) {
    variables.coordinatesDisplay.classList.remove('hidden');
    variables.coordX.textContent = event.clientX;
    variables.coordY.textContent = event.clientY;
  }
});

variables.imageList.addEventListener('dragstart', (event) => {
  const target = event.target.closest('.card');
  target.classList.add('selected');
  draggedCard = target;
  event.dataTransfer.effectAllowed = 'copy';
})

variables.imageList.addEventListener('dragend', () => {
  if (draggedCard) {
    draggedCard.classList.remove('selected');
  }
  variables.coordinatesDisplay.classList.add('hidden');
  draggedCard = undefined;
})

variables.previewArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'copy';
})

variables.previewArea.addEventListener('drop', (e) => {
  e.preventDefault();
  
  if (!draggedCard) return;

  const activeCard = document.querySelector('.active');
  if (activeCard) activeCard.classList.remove('active');
  draggedCard.classList.add('active');
  draggedCard.classList.remove('selected');

  const imageSrc = draggedCard.querySelector('img').src;

  if (imageSrc) {
    variables.newImg.classList.remove('hidden');
    variables.previousBtn.classList.remove('hidden');
    variables.nextBtn.classList.remove('hidden');
    variables.newImg.src = imageSrc;
  }

  draggedCard = undefined;
})