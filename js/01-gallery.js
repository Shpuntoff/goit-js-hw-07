// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

galleryRef.innerHTML = galleryItems
  .map(({preview, original, description}) => {
    return `
    <div class = "gallery__item">
    <a class = "gallery__link" href= "${original}">
    <img  
    class = "gallery__image" 
    data-source = "${original}" 
    src = ${preview} 
    alt = "${description}">
    </a>
    </div>
    `;
  })
  .join('');

galleryRef.addEventListener("click", openModalGallery);

function openModalGallery(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;
    
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="1280" height="auto">`, {
        onShow: () => window.addEventListener("keydown", onEsc),
        onClose: () => window.removeEventListener("keydown", onEsc)
    });
        
        function onEsc(event) {
            if (event.code === "Escape") {
                instance.close();
              }
          }
    instance.show();
  }