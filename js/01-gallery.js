import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const image = creategalleryItems(galleryItems);
gallery.insertAdjacentHTML('beforeend', image);

function creategalleryItems(items) {
    return items
        .map(({ preview, original, description, }) => {
        return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
</div>`})
        .join('');
};

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();
    if (!event.target.dataset.source) {
      return;
    }
    const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}">
  `);
  instance.show();
  };
  
  console.log(galleryItems);