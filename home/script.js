$(document).ready(function () {
    $('.stats-box').css('opacity', 0);

    $(window).on('scroll', function () {
        const boxTop = $('.stats-box').offset().top;
        const winTop = $(window).scrollTop();
        const winHeight = $(window).height();

        if (boxTop < winTop + winHeight - 100) {
            $('.stats-box').animate({ opacity: 1 }, 1000);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const weatherDiv = document.getElementById("weather");

    fetch("https://api.open-meteo.com/v1/forecast?latitude=51.1694&longitude=71.4491&current_weather=true")
        .then(res => res.json())
        .then(data => {
            const w = data.current_weather;
            const temperature = Math.round(w.temperature);
            const wind = w.windspeed;
            const conditionCode = w.weathercode;

            const conditions = {
                0: "Clear sky ☀️",
                1: "Mainly clear 🌤️",
                2: "Partly cloudy ⛅",
                3: "Overcast ☁️",
                45: "Fog 🌫️",
                51: "Light drizzle 🌦️",
                61: "Light rain 🌧️",
                71: "Light snow ❄️",
                80: "Rain showers 🌧️",
                95: "Thunderstorm ⛈️"
            };

            const condition = conditions[conditionCode] || "Unknown";

            weatherDiv.innerHTML = `
        <h5 class="text-dark">${condition}</h5>
        <p class="mb-1 fs-5"><strong>${temperature}°C</strong></p>
        <p class="text-secondary mb-0">Wind: ${wind} km/h</p>
      `;
        })
        .catch(error => {
            console.error("Weather API error:", error);
            weatherDiv.textContent = "Unable to load weather data.";
        });
});