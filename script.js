const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');


let ready = false; 
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = []; 

// Unsplash API 
let count = 5;
const apiKey = 'cQ7qqatYgkifTq7DrTKyas5poI3Q1HBnOpWTnt4ODsc';
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// load check 
const imageLoaded = () => {
    imagesLoaded++; 
    if (imagesLoaded === totalImages) {
        ready = true; 
        loader.hidden = true; 
        count = 30; 
    }
}

const setAttributes = (element, attributes) => {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Links & Photos to DOM 
const displayPhotos = () => {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    photosArray.forEach((photo) => {
        // linking to unsplash on click 
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // making img import 
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // loading event 
        img.addEventListener('load', imageLoaded)
        // contain image within anchor and imgcontainer 
        item.appendChild(img);
        imageContainer.appendChild(item); 
    });
}

const getPhotos = async () => {
    try {
      const response = await fetch(apiUrl);
      photosArray = await response.json();
      displayPhotos();
    } catch (error) {
      // error catch
    }
  };
  
// Scroll bar check to trigger loading more photos 
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false; 
        getPhotos();
    }
})

getPhotos();