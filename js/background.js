const images = ["0.png", "1.png", "2.png", "3.png", "4.png"];

//const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");
//const bgImage = document.querySelector("body");

const date = new Date();
const hours = date.getHours();

let chosenImage = 0;

if (hours >= 0 && hours <5) {
  chosenImage = images[0];
} else if (hours >= 5 && hours < 9){
  chosenImage = images[1];
} else if (hours >= 9 && hours < 18){
  chosenImage = images[2];
} else if (hours >= 18 && hours < 22){
  chosenImage = images[3];
} else {
  chosenImage = images[4];
}

//bgImage.id = "bgImg";
//bgImage.src = `img/${chosenImage}`; 

//document.body.style.backgroundImage = `url(img/${chosenImage})`; 
//document.body.style.cssText = `background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(img/${chosenImage});`;
document.body.style.cssText = `background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(img/${chosenImage});`;


//document.body.appendChild(bgImage); 