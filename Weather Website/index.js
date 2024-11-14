const inputData = document.querySelector(".inputData");
const cityName = document.querySelector(".cityName");
const weatherData = document.querySelector(".weatherData");
const apiKey = '648d5dad63f6e5f8a7ec0a7a3e8dd940';
let weatherId = "";
inputData.addEventListener('submit', async event => {

    event.preventDefault();

    const city = cityName.value;

    if(city){
        try{
            const weatherInfo = await getWeatherData(city);
            displayData(weatherInfo);
        }
        catch(error){
            console.error(error);
            errorDisplay(error);
        }
    }
    else{
        errorDisplay("Please Enter City Name");
    }

});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Enter correct City Name")
    }
    return await response.json();
}

function displayData(data){

    const {name: city, 
        main: {humidity, temp}, 
        weather:[{description, id}] } = data;

        weatherData.textContent = "";
        weatherData.style.display = 'flex';

        const cityDisplay = document.createElement("h1");
        const tempDisplay = document.createElement("p");
        const humidityDisplay = document.createElement("p");
        const descDisplay = document.createElement("p");
        const emojiDisplay = document.createElement("p");

        cityDisplay.textContent = city;
        tempDisplay.textContent = `${(temp - 273.5).toFixed(1)}°C`;
        humidityDisplay.textContent = `Humidity ${humidity}%`;
        descDisplay.textContent = description;
        emojiDisplay.textContent = displayEmoji(id);

        cityDisplay.classList.add("cityDisplay");
        tempDisplay.classList.add("tempDisplay");
        humidityDisplay.classList.add("humidityDisplay");
        descDisplay.classList.add("descDisplay");
        emojiDisplay.classList.add("emojiDisplay");

        weatherData.appendChild(cityDisplay);
        weatherData.appendChild(tempDisplay);
        weatherData.appendChild(humidityDisplay);
        weatherData.appendChild(descDisplay);
        weatherData.appendChild(emojiDisplay);
}

function displayEmoji(weatherId){

    switch(true){
        case (weatherId >= 200 && weatherId<300):
        return "⛈";
        
        case (weatherId >= 300 && weatherId<400):
        return "🌧";

        case (weatherId >= 500 && weatherId<600):
        return "⛈";

        case (weatherId >= 600 && weatherId<700):
        return "❄";

        case (weatherId >= 700 && weatherId<800):
        return "🌪";

        case (weatherId ===800):
        return "☀";

        case (weatherId >= 800 && weatherId<810):
        return "☁";

        default: 
        return "❓";


    }
}

function errorDisplay(error){
    const errorCity = document.createElement('p');
    errorCity.textContent = error;
    errorCity.classList.add('error');

    weatherData.textContent = "";
    weatherData.style.display = 'flex';
    weatherData.appendChild(errorCity);
}
