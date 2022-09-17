const API_KEY = "75d545aa2684c63d1fb8a256d9e07959"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; 
    fetch(url)
        .then(reponse => reponse.json())
        .then(data => {
            const weatherImg = document.querySelector("#weather img")
            const city = document.querySelector("#weather span:first-of-type")
            const tempCurr = document.querySelector("#weather span:nth-of-type(2)")
            const weather = document.querySelector("#weather span:nth-of-type(3)")
            const tempMaxMin = document.querySelector("#weather span:last-of-type")

            weatherImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            city.innerText = data.name;
            tempCurr.innerText = `${data.main.temp}°`;
            weather.innerText = data.weather[0].main;
            tempMaxMin.innerText = `최고:${data.main.temp_max}° 최저:${data.main.temp_min}°`;
        }); 
}
function onGeoError(){
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);