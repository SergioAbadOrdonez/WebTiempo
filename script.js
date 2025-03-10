const url = "https://api.openweathermap.org/data/2.5/"
const apiKey = "5f998e1c9b8878ed182dd1eb3befb303";

const inputText = document.querySelector("#busqueda");
inputText.addEventListener("keypress", setCity);

function setCity(event){
    if(event.keyCode == 13){
        getCity(inputText.value)
        console.log(inputText.value)
    }
}

function getCity(city){
    fetch(`${url}weather?q=${city}&units=metric&APPID=${apiKey}`)
    .then(weather => {
        return weather.json()
        .then(displayResults)
    })
}


function displayResults(weather){
    console.log(weather);
    let city = document.querySelector("#nombreCiudad");
    city.innerHTML = weather.name+", "+ weather.sys.country;
    let date = document.querySelector("#fecha");
    date.innerHTML = dateBuilder(new Date());
    let temp = document.querySelector("#temperatura");
    temp.innerHTML = `${Math.round(weather.main.temp)}<span><sup>o</sup>C</span>`;
    let tiempo = document.querySelector("#tiempo");
    tiempo.innerHTML = weather.weather[0].main;

    let maxmin = document.querySelector("#maxmin");
    maxmin.innerHTML = `${Math.round(weather.main.temp_min)}<sup>o</sup>c / ${Math.round(weather.main.temp_max)}<sup>o</sup>c`
}

function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
}