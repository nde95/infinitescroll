const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = []; 

// Unsplash API 
const count = 10;
const apiKey = 'cQ7qqatYgkifTq7DrTKyas5poI3Q1HBnOpWTnt4ODsc';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


const setAttributes = (element, attributes) => {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Links & Photos to DOM 
const displayPhotos = () => {
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
  

getPhotos();