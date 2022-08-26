import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerRef = document.querySelector('.gallery');

function makeCards() {
    return galleryItems.map(item => {
        return `<div class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</div>`
    }).join('')
}
const cards = makeCards();
containerRef.innerHTML = cards;

containerRef.addEventListener('click', onImgClick);

function onImgClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }
  
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">`)
  instance.show();
  
  containerRef.addEventListener('keydown',(e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  })
}

