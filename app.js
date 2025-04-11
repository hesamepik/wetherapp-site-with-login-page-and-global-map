document.addEventListener("DOMContentLoaded", () => {
    const BASE_URL = "https://api.openweathermap.org/data/2.5";
    const API_KEY = "91ad857f98f90c89211c8543e27353b3";

    const searchInput = document.querySelector("input");
    const searchButton = document.querySelector("button");
    const weatercon = document.getElementById("Weather");

    

    const getCurrenWeatherByName = async (city) => {
        const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;

            const response = await fetch(url);
            const json = await response.json();

        

            return json;
      
    };

    const rendercurr = (data) => {
        console.log(data);

      

        const weaterjsx = `
            <h1>${data.name}, ${data.sys.country}</h1>
            <div>
                <img alt="weather icon" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
            </div>
            <div>
              <p>humidity:<span>${data.main.humidity}%</span></p>
            <p>wind speed:<span>${data.wind.speed}%</span></p>
        `;

        weatercon.innerHTML = weaterjsx;
    };

    const searchHandler = async () => {
        const cityName = searchInput.value.trim();

        if (!cityName) {
            alert("لطفاً نام شهر را وارد کنید!");
            return;
        }

        const currentData = await getCurrenWeatherByName(cityName);

        if (!currentData) {
            return;
        }

        rendercurr(currentData);
    };

    searchButton.addEventListener("click", searchHandler);
});
