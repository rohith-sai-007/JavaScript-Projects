document.querySelector("form").addEventListener('submit', async function(event){
    event.preventDefault();
    
    const city = document.getElementById("location").value;
    
    const weatherData = getWeatherData(city);
    weatherData.then(result => {
        document.getElementById("city-name").innerHTML = (result.name) + " - " +(result.weather[0].main);
        document.getElementById("feels-like").innerHTML = "Feels Like: " 
    + Math.floor(Number(result.main.feels_like) - 273.15) + " &#x2103;";
        document.getElementById("temperature").innerHTML = "Temperature is "+ Math.floor(Number(result.main.temp) - 273.15) + " &#x2103;";
        document.getElementById("humidity").innerHTML = "Humidity is "+ result.main.humidity + "%";
        document.getElementById("wind-speed").innerHTML = "Wind speed is "+ result.wind.speed + " m/s";
    })

});

async function getWeatherData(city){
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=90a159601f5027a19f12afe89ae28c0f`;
    const response = await fetch(api);
    
    if(response.ok===false){
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
}