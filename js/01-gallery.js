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
const readyCards = containerRef.innerHTML = cards;

