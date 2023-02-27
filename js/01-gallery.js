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

// console.log(createGalleryCardsMarkup(galleryItems));

const galleryContainer = document.querySelector('.gallery')
const cardsMarkup = createGalleryCardsMarkup(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onGalleryItemClick)


// !galleryContainer.removeEventListener('click', onGalleryItemClick); Ярослав, нужна ваша помошь.  Если я удаляю слушателя так - то скрипт не работает. и зачем в данном случае это делать, ведь сняв слушателя мы не сможем опять получить изображение в большем разрешении. Или я чего-то не допонял? 


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

function onGalleryItemClick(event) {
  event.preventDefault()

  if (event.target.nodeName !== 'IMG') {
    return
  }

  modalOpen(event)
}



function modalOpen(event) {
  const galleryItemOriginal = event.target.dataset.source

  const modal = basicLightbox.create(`<img src="${galleryItemOriginal}" width="1024" height="600">`)
  modal.show()

  function closeModalOnEsc(event) {
    if (event.code !== 'Escape') {
      return
    }
    console.log('key');
    modal.close()
    window.removeEventListener('keydown', closeModalOnEsc);
  }
  window.addEventListener('keydown', closeModalOnEsc)
}


// или можно добавить еще один параметр

// window.addEventListener('keydown', closeModalOnEsc, { once: true })