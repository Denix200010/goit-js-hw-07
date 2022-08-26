import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerRef = document.querySelector('.gallery')
function galleryMakeCards(items) {
    return items.map(item =>
        `<a class="gallery__item" href=${item.original}>
    <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a>`
    ).join('');
} 
const elements = galleryMakeCards(galleryItems);
containerRef.innerHTML = elements;

containerRef.addEventListener('click', onImgClick, {once: true});

function onImgClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
    return;
    }
    var lightbox = new SimpleLightbox('.gallery a', {
        captionType: "alt",
        captionsData: "alt",
        captionDelay: 250,
    });
}