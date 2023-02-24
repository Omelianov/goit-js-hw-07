import { galleryItems } from './gallery-items.js';
// Change code below this line

// Создание и рендер разметки по массиву данных 
// galleryItems и предоставленному шаблону элемента
// галереи.
// Реализация делегирования на div.gallery и получение
//  url большого изображения.
// Подключение скрипта и стилей библиотеки модального
//  окна basicLightbox.Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// Открытие модального окна по клику на элементе
// галереи.Для этого ознакомься с документацией и
// примерами.
// Замена значения атрибута src элемента < img > в 
// модальном окне перед открытием.Используй готовую 
// разметку модального окна с изображением из 
// примеров библиотеки basicLightbox.

console.log(createGalleryCardsMarkup(galleryItems));

const galleryContainer = document.querySelector('.gallery')
const cardsMarkup = createGalleryCardsMarkup(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onGalleryItemClick)

function createGalleryCardsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
      <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
    `
        })
        .join('')
}

function onGalleryItemClick(evt) {
    console.log(evt.target);
}

