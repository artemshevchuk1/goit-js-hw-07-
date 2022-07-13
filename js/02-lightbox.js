import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const image = creategalleryItems(galleryItems);
gallery.insertAdjacentHTML('beforeend', image);

function creategalleryItems(items) {
    return items
        .map(({ preview, original, description, }) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`})
        .join('');
};

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();
}
  
const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250
 });
console.log(lightbox);
