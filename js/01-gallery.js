import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
let instance = null;

// Markup

const images = galleryItems.map((item) => {
    const imageItem = document.createElement("div");
    imageItem.classList.add("gallery__item");

    const imageLink = document.createElement("a");
    imageLink.classList.add("gallery__link");
    imageLink.href = item.original;

    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.src = item.preview;
    image.alt = item.description;
    image.dataset.source = item.original;

    imageLink.append(image);
    imageItem.append(imageLink);

    return imageItem;
});


gallery.append(...images);
gallery.addEventListener('click', onImageClick);

function onImageClick(e) {
    e.preventDefault();

    if (e.target.tagName !== "IMG") return;
    instance = basicLightbox.create(
        `<img width="1400" heigth="900" src="${e.target.dataset.source}">`,
        {
            onShow: () => gallery.addEventListener("keydown", onKeydown),
            onClose: () => gallery.removeEventListener("keydown", onKeydown),
        }
    );
    instance.show();
}

function onKeydown(e) {
    if (e.code == "Escape") instance.close();
}