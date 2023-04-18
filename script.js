

// Unsplash API 
const count = 10;
const apiKey = 'cQ7qqatYgkifTq7DrTKyas5poI3Q1HBnOpWTnt4ODsc';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getPhotos() {
    try {
        const response = await fetch(apiUrl)
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // error catch
    }
}

getPhotos();