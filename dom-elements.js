const variables = (function() {
  const imageList = document.querySelector('.image-list');
  const cards = imageList.querySelectorAll('.card');
  const newImg = document.querySelector('.preview-image');
  const button = document.querySelector('.scroll-to-top');
  const closeIcon = document.querySelector('.close-icon');
  const previewArea = document.querySelector('.preview-area');
  const previousBtn = document.querySelector('.previous-btn');
  const nextBtn = document.querySelector('.next-btn');
  const coordX = document.querySelector('.coord-x');
  const coordY = document.querySelector('.coord-y');
  const coordinatesDisplay = document.querySelector('.coordinates-display');
  const resizeBar = document.querySelector('.resize-bar');
  const listContainer = document.querySelector('.list-container');
  const galleryContainer = document.querySelector('.gallery-container');
  const form = document.querySelector('.form');

  return {
    imageList,
    cards,
    newImg,
    button,
    closeIcon,
    previewArea,
    previousBtn,
    nextBtn,
    coordX,
    coordY,
    coordinatesDisplay,
    resizeBar,
    listContainer,
    galleryContainer,
    form,
  }
})();