// WEATHER APP

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "4d737c560ae7c301b09486aa0cae4951";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
           
            displayError(error);
        }

    }
    else {

        displayError("Please enter a city");

    }

});

async function getWeatherData(city) {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    const response = await fetch(apiUrl);

    console.log(response);
}



function displayWeatherInfo(data) {

}

function getWeatherEmoji(weatherId) {

}

function displayError(message) {

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}

