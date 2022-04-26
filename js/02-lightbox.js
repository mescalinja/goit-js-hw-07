import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const images = galleryItems.map((item) => {
    const imageLink = document.createElement("a");
    imageLink.classList.add("gallery__item");
    imageLink.href = item.original;

    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.src = item.preview;
    image.alt = item.description;
    image.dataset.source = item.original;

    imageLink.append(image);

    return imageLink;
});

gallery.append(...images);

let lightbox = new SimpleLightbox(".gallery a", {
    caption: true,
    captionSelector: "img",
    captionData: "alt",
    caprionDelay: 250,
});