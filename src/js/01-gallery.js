// Add imports above this line

import { galleryItems } from './gallery-items';
// import "simplelightbox/dist/simple-lightbox.min.css";
// // Change code below this line

// console.log(galleryItems);

// const galleryRef = document.querySelector('.gallery');



// const addImg = galleryItems.map(item =>

//     `<li class="gallery__item">
//   <a class="gallery__link" href="${item.original}">
//     <img
//       class="gallery__image"
//       src="${item.preview}"
//       data-source="${item.original}"
//       alt="${item.description}"
//     />
//   </a>
// </li>`
// ).join("")

// galleryRef.insertAdjacentHTML("afterbegin", addImg)

// galleryRef.addEventListener('click', (evn) => {
//     evn.preventDefault();
//     const imgSrc = evn.target.parentNode.href;
//     const imgAlt = evn.target.alt
//   const instance = basicLightbox.create(
//     `
//     <img src="${imgSrc}" alt="${imgAlt}">
// `,
//     {
//       onShow: (instance) => { document.addEventListener('keydown', closeModal) },
//       onClose: (instance) => { document.removeEventListener('keydown', closeModal) },
//     }
//   );
  
//   function closeModal(evn) {
//     if (evn.code === 'Escape') {
//       instance.close()
//     }
//   }
 
//   instance.show()

// });
