function newCreateCard(title, imageUrl) {
  return `
    <article class="card">
      <figure>
        <img class="image" src="${imageUrl}" alt="${title}">
        <figcaption class="image-title">${title}</figcaption>
      </figure>
    </article>    
  `
}

variables.form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = variables.form.elements["name"].value;
  const file = variables.form.elements["image"].files[0];

  const reader = new FileReader();
  reader.onload = function(event) {
    const imageUrl = event.target.result;
    newCreateCard(title, imageUrl);
    const cardHTML = newCreateCard(title, imageUrl);
    variables.imageList.insertAdjacentHTML('afterbegin', cardHTML);
    variables.form.elements["name"].value = "";
    variables.form.elements["image"].value = "";
    }

    reader.readAsDataURL(file);
})
