document.addEventListener("DOMContentLoaded", function () {
    const weatherData = [
        { city: "Ankara", temperature: 15, description: "Partly Cloudy", humidity: 50, wind_speed: 3, img:"https://s7g10.scene7.com/is/image/accorhotels/GettyImages-1294795577:8by10?wid=412&hei=515&dpr=on,2.625&qlt=75&resMode=sharp2&op_usm=0.5,0.3,2,0&iccEmbed=true&icc=sRGB" },
        { city: "Baku", temperature: 20, description: "Sunny", humidity: 40, wind_speed: 5, img:"https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/a5/a7.jpg" },
        { city: "Berlin", temperature: 5, description: "Overcast", humidity: 60, wind_speed: 2, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg/1200px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg" }
    ];
   
    const weatherInfo = document.getElementById("weatherInfo");
    const cityInput = document.getElementById("cityInput");
    const searchButton = document.getElementById("searchButton");

   
    searchButton.addEventListener("click", searchWeather);

    
    function searchWeather() {
        const cityName = cityInput.value.trim().toLowerCase();
        const cityData = weatherData.find(info => info.city.toLowerCase() === cityName);
        
        if (cityData) {
            displayWeather(cityData);
        } else {
            weatherInfo.innerHTML = "City not found!";
        }
    }

   
    function displayWeather(info) {
        weatherInfo.innerHTML = "";

        const weatherCard = document.createElement("div");
        weatherCard.classList.add("weather-card");

        const cityName = document.createElement("h2");
        cityName.textContent = info.city;

        const temperature = document.createElement("p");
        temperature.textContent = `Temperature: ${info.temperature}°C`;

        const description = document.createElement("p");
        description.textContent = `Description: ${info.description}`;

        const humidity = document.createElement("p");
        humidity.textContent = `Humidity: ${info.humidity}%`;

        const windSpeed = document.createElement("p");
        windSpeed.textContent = `Wind Speed: ${info.wind_speed} m/s`;

        const image=document.createElement("img");
        image.src=info.img;
        image.alt=`${info.city} Weather`;

        weatherCard.appendChild(cityName);
        weatherCard.appendChild(temperature);
        weatherCard.appendChild(description);
        weatherCard.appendChild(humidity);
        weatherCard.appendChild(windSpeed);
        weatherCard.appendChild(image);

        weatherInfo.appendChild(weatherCard);
    }
});
