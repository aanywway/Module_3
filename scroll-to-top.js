window.addEventListener('scroll', () => {
  const bottomOfViewport = window.scrollY + window.innerHeight;
  const bottomOfPage = document.documentElement.scrollHeight;

  if (bottomOfViewport === bottomOfPage) {
    variables.button.classList.remove('hidden');
  } else {
    variables.button.classList.add('hidden');
  }
});

variables.button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
