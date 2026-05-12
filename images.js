const images = [
  {name: 'New York', url: '/images/New_York.jpg'},
  {name: 'Los Angeles', url: '/images/Los_Angeles.jpg'},
  {name: 'Venesia', url: '/images/Venesia.jpg'},
  {name: 'Paris', url: '/images/Paris.jpg'},
  {name: 'Rome', url: '/images/Rome.jpg'},
  {name: 'Barcelona', url: '/images/Barcelona.jpg'},
  {name: 'Sydney', url: '/images/Sydney.jpg'},
  {name: 'Moscow', url: '/images/Moscow.jpg'},
  {name: 'Koeln', url: '/images/Koeln.jpg'},
  {name: 'Salvador', url: '/images/Salvador.jpg'},
  {name: 'Rio de Janeiro', url: '/images/Rio_de_Janeiro.jpg'},
  {name: 'Budapest', url: '/images/Budapest.jpg'},
  {name: 'Guanajuato', url: '/images/Guanajuato.jpg'},
  {name: 'Frankfurt', url: '/images/Frankfurt.jpg'},
  {name: 'Istanbul', url: '/images/Istanbul.jpg'},
  {name: 'Tallinn', url: '/images/Tallinn.jpg'},
  {name: 'Amsterdam', url: '/images/Amsterdam.jpg'},
  {name: 'Sao Paulo', url: '/images/Sao_Paulo.jpg'},
  {name: 'Porto', url: '/images/Porto.jpg'},
  {name: 'Valencia', url: '/images/Valencia.jpg'},
  {name: 'Alexandria', url: '/images/Alexandria.jpg'},
  {name: 'Panama', url: '/images/Panama.jpg'},
  {name: 'Shanghai', url: '/images/Shanghai.jpg'},
  {name: 'Rotterdam', url: '/images/Rotterdam.jpg'},
  {name: 'Vernazza', url: '/images/Vernazza.jpg'},
  {name: 'London', url: '/images/London.jpg'},
  {name: 'Taipei', url: '/images/Taipei.jpg'},
  {name: 'Londrina', url: '/images/Londrina.jpg'},
  {name: 'Caracas', url: '/images/Caracas.jpg'},
  {name: 'San Francisco', url: '/images/San_Francisco.jpg'},
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