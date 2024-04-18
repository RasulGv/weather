document.addEventListener("DOMContentLoaded", function () {
    const weatherData = [
        { city: "Ankara", temperature: 15, description: "Partly Cloudy", humidity: 50, wind_speed: 3 },
        { city: "Baku", temperature: 20, description: "Sunny", humidity: 40, wind_speed: 5 },
        { city: "Moscow", temperature: 5, description: "Overcast", humidity: 60, wind_speed: 2 }
    ];

    const weatherInfo = document.getElementById("weatherInfo");
    const cityInput = document.getElementById("cityInput");
    const searchButton = document.getElementById("searchButton");

   
    searchButton.addEventListener("click", searchWeather);

    
    function searchWeather() {
        const cityName = cityInput.value.trim().toLowerCase();
        const cityData = weatherData.find(data => data.city.toLowerCase() === cityName);
        
        if (cityData) {
            displayWeather(cityData);
        } else {
            weatherInfo.innerHTML = "City not found!";
        }
    }

   
    function displayWeather(data) {
        weatherInfo.innerHTML = "";

        const weatherCard = document.createElement("div");
        weatherCard.classList.add("weather-card");

        const cityName = document.createElement("h2");
        cityName.textContent = data.city;

        const temperature = document.createElement("p");
        temperature.textContent = `Temperature: ${data.temperature}°C`;

        const description = document.createElement("p");
        description.textContent = `Description: ${data.description}`;

        const humidity = document.createElement("p");
        humidity.textContent = `Humidity: ${data.humidity}%`;

        const windSpeed = document.createElement("p");
        windSpeed.textContent = `Wind Speed: ${data.wind_speed} m/s`;

        weatherCard.appendChild(cityName);
        weatherCard.appendChild(temperature);
        weatherCard.appendChild(description);
        weatherCard.appendChild(humidity);
        weatherCard.appendChild(windSpeed);

        weatherInfo.appendChild(weatherCard);
    }
});
