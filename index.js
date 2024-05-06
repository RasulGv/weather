const apiKey = 'd98ffdeaebb5600658f6d76482d1f63e';
const cityInput = document.getElementById('cityInput');
const cityInfoCardContainer = document.getElementById('cityInfoCardContainer');

let previousCity = null; 

async function fetchCityInfo(cityName) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${apiKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }
        const data = await response.json();
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        console.log(data);
       
        if (previousCity !== cityName) {
            cityInfoCardContainer.innerHTML = ''; 
            previousCity = cityName; 
        }

        const card = document.createElement('div');
        card.className = 'city-info-card';

        const currentTime = new Date();
        const timezoneOffset = data.timezone;
        const localTime = new Date(currentTime.getTime() + timezoneOffset * 60000);
        card.innerHTML = `
            <div class="weather-info">
                <img src="${iconUrl}" alt="Weather Icon" /> 
                <h2>${data.name}</h2> <!-- Şehir adı -->
                <p><i class="wi wi-thermometer"></i> Temperature: ${data.main.temp}°C</p>
                <p><i class="wi wi-humidity"></i> Humidity: ${data.main.humidity}%</p>
                <p><i class="wi wi-barometer"></i> Pressure: ${data.main.pressure} hPa</p>
                <p><i class="wi wi-wind"></i> Wind Speed: ${data.wind.speed} m/s</p>
                <p><i class="wi wi-${data.weather[0].icon}"></i> Description: ${data.weather[0].description}</p>
                <p>Current Time: ${localTime.toLocaleTimeString()}</p>
            </div>
        `;

        cityInfoCardContainer.appendChild(card);
    } catch (err) {
        console.log(err);
    }
}



function searchFunction() {
    const cityName = cityInput.value;
    fetchCityInfo(cityName);
}



cityInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchFunction();
    }
});
