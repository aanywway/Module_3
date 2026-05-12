const basePath = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? '' 
  : '/Module_3';

const images = [
  {name: 'New York', url: `${basePath}/images/New_York.jpg`},
  {name: 'Los Angeles', url: `${basePath}/images/Los_Angeles.jpg`},
  {name: 'Venesia', url: `${basePath}/images/Venesia.jpg`},
  {name: 'Paris', url: `${basePath}/images/Paris.jpg`},
  {name: 'Rome', url: `${basePath}/images/Rome.jpg`},
  {name: 'Barcelona', url: `${basePath}/images/Barcelona.jpg`},
  {name: 'Sydney', url: `${basePath}/images/Sydney.jpg`},
  {name: 'Moscow', url: `${basePath}/images/Moscow.jpg`},
  {name: 'Koeln', url: `${basePath}/images/Koeln.jpg`},
  {name: 'Salvador', url: `${basePath}/images/Salvador.jpg`},
  {name: 'Rio de Janeiro', url: `${basePath}/images/Rio_de_Janeiro.jpg`},
  {name: 'Budapest', url: `${basePath}/images/Budapest.jpg`},
  {name: 'Guanajuato', url: `${basePath}/images/Guanajuato.jpg`},
  {name: 'Frankfurt', url: `${basePath}/images/Frankfurt.jpg`},
  {name: 'Istanbul', url: `${basePath}/images/Istanbul.jpg`},
  {name: 'Tallinn', url: `${basePath}/images/Tallinn.jpg`},
  {name: 'Amsterdam', url: `${basePath}/images/Amsterdam.jpg`},
  {name: 'Sao Paulo', url: `${basePath}/images/Sao_Paulo.jpg`},
  {name: 'Porto', url: `${basePath}/images/Porto.jpg`},
  {name: 'Valencia', url: `${basePath}/images/Valencia.jpg`},
  {name: 'Alexandria', url: `${basePath}/images/Alexandria.jpg`},
  {name: 'Panama', url: `${basePath}/images/Panama.jpg`},
  {name: 'Shanghai', url: `${basePath}/images/Shanghai.jpg`},
  {name: 'Rotterdam', url: `${basePath}/images/Rotterdam.jpg`},
  {name: 'Vernazza', url: `${basePath}/images/Vernazza.jpg`},
  {name: 'London', url: `${basePath}/images/London.jpg`},
  {name: 'Taipei', url: `${basePath}/images/Taipei.jpg`},
  {name: 'Londrina', url: `${basePath}/images/Londrina.jpg`},
  {name: 'Caracas', url: `${basePath}/images/Caracas.jpg`},
  {name: 'San Francisco', url: `${basePath}/images/San_Francisco.jpg`},
]

function createCard(img) {
  return `
    <article class="card">
      <figure>
        <img class="image" src="${img.url}" alt="${img.name}">
        <figcaption class="image-title">${img.name}</figcaption>
      </figure>
    </article>    
  `
}

const initialImages = images.slice(0, 9).map(createCard).join('');
variables.imageList.insertAdjacentHTML("beforeend", initialImages);

let nextIndex = 9;

function loadMoreCards() {
  const remainingImages = images.slice(nextIndex, nextIndex + 6);

  if (remainingImages.length === 0) {
    return;
  }
 
  const newCard = remainingImages.map(createCard).join('');
  variables.imageList.insertAdjacentHTML("beforeend", newCard);
  nextIndex += 6;

  setupObserver();
}

let observer;

function setupObserver() {
  if (observer) {
    observer.disconnect();
  }
  
  const cards = document.querySelectorAll('.card');
  const lastCard = cards[cards.length - 1];

  if (!lastCard) {
    return;
  }

  observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        loadMoreCards();
      } 
    },
    {
      rootMargin: '200px',
      threshold: 0.5,
    }
  );

  observer.observe(lastCard);
}

setupObserver();