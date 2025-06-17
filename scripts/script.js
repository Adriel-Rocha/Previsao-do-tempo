window.onload =  function openPage() {

    const listCity = ['New York', 'California', 'Brasília', 'São Paulo', 'New Jersey', 'Tokio', 'Toronto', 'Vancouver', 'Montreal', 'Moscou', 'São Petersburgo', 'Cancún', 'Buenos Aires', 'Lisboa', 'Porto', 'Coimbra', 'Aveiro'];
    const cityRandom = listCity[Math.floor(Math.random() * listCity.length)];

    searchCity(cityRandom);
}

function clickSearch() {

    const city = document.querySelector(".inputCity").value;
    searchCity(city);
}

async function searchCity(city) {

    const res = await fetch(`https://weather-backend-utcz.onrender.com/forecast?city=${city}&?lang=pt-br`);
    const dates = await res.json();
    showResult(dates);
}

function showResult(dates) {

    const city = dates.weather.name;
    const iconFlag = `https://flagsapi.com/${dates.weather.sys.country}/shiny/64.png`;
    const temp = dates.weather.main.temp;
    const imgPreview = `https://openweathermap.org/img/wn/${dates.weather.weather[0].icon}.png`;
    const description = dates.weather.weather[0].description;
    const humidity = dates.weather.main.humidity;
    const air = dates.weather.wind.speed;

    const bgImage = `url(${dates.image})`;

    document.querySelector('.city').innerHTML = `Clima em ${city}`;
    document.querySelector('.iconFlag').src = iconFlag;
    document.querySelector('.temp').innerHTML = `${temp}°C`;
    document.querySelector('.imgPreview').src = imgPreview;
    document.querySelector('.textPreview').innerHTML = description;
    document.querySelector('.humidity').innerHTML = `${humidity}%`;
    document.querySelector('.air').innerHTML = `${air} m/s`;
    document.querySelector('.inputCity').value = '';

    document.body.style.backgroundImage = bgImage;
}
