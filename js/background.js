/* const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];




const bgImage = document.createElement("img");


bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

*/


document.body.style = `background-image: url("img/0${Math.ceil(
    Math.random() * 4 
    )}.jpg");`;
