let startX = 0;
let startListContainerWidth = 0;
let startGalleryContainerWidth = 0;

function handleMouseMove(event) {
  const currentX = event.clientX;
  const deltaX = currentX - startX;
  const newListContainerWidth = startListContainerWidth + deltaX;
  const listContainerWidthPercent = (newListContainerWidth / startGalleryContainerWidth) * 100;
  const previewAreaWidthPercent = 100 - listContainerWidthPercent;

  if (listContainerWidthPercent < 30) return;
  if (previewAreaWidthPercent < 20) return;

  variables.listContainer.style.flexBasis = `${listContainerWidthPercent}%`;
  variables.previewArea.style.flexBasis = `${previewAreaWidthPercent}%`;
}

function handleMouseUp() {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
}

variables.resizeBar.addEventListener('mousedown', (event) => {
  startX = event.clientX;
  startListContainerWidth = variables.listContainer.offsetWidth;
  startGalleryContainerWidth = variables.galleryContainer.offsetWidth;

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
});
