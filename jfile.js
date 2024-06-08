
function searchWeather() {
    const cityName = document.getElementById("city-input").value.trim();
    if (cityName) {
        fetchWeatherData(cityName);
    } else {
        alert("Please enter a city name");
    }
}

// Function to fetch weather data from the API
function fetchWeatherData(cityName) {
    const apiKey = 'd07624d94b339e686f4573049e57c20c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const weatherData = {
                city: data.name,
                temperature: `${data.main.temp}°C`
            };
            updateWeatherInfo(weatherData);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Function to update weather information on the page
function updateWeatherInfo(data) {
    document.getElementById("city-name").textContent = data.city;
    document.getElementById("temperature").textContent = data.temperature;
}
