const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//JS 에서 만들어서 html에 추가 --> createElement 이용!
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`; //아직까진 html 아닌 JS임.

document.body.appendChild(bgImage); //appendChild 이용해서 body에 추가