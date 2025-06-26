document.addEventListener("DOMContentLoaded", async () => {
    const { data: { session } } = await supabase.auth.getSession();
  
    if (!session) {
      // کاربر لاگین نکرده → انتقال به صفحه ورود
      window.location.href = 'login.html';
      return;
    }
  
    const BASE_URL = "https://api.openweathermap.org/data/2.5";
    const API_KEY = "91ad857f98f90c89211c8543e27353b3";
  
    const searchInput = document.getElementById("city");
    const searchButton = document.getElementById("searchBtn");
    const weatherContainer = document.getElementById("Weather");
  
    if (!searchInput || !searchButton || !weatherContainer) {
      console.error("یکی از عناصر مورد نیاز پیدا نشد!");
      return;
    }
  
    const getCurrentWeatherByName = async (city) => {
      const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);
      if (!response.ok) {
        alert("شهر پیدا نشد یا مشکلی در دریافت داده‌ها وجود دارد.");
        return null;
      }
      const json = await response.json();
      return json;
    };
  
    const renderWeather = (data) => {
      if (!data) {
        weatherContainer.innerHTML = "<p>داده‌ای برای نمایش وجود ندارد.</p>";
        return;
      }
      const html = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="weather icon" />
        <p>رطوبت: ${data.main.humidity}%</p>
        <p>سرعت باد: ${data.wind.speed} m/s</p>
      `;
      weatherContainer.innerHTML = html;
    };
  
    searchButton.addEventListener("click", async () => {
      const cityName = searchInput.value.trim();
      if (!cityName) {
        alert("لطفاً نام شهر را وارد کنید!");
        return;
      }
  
      const weatherData = await getCurrentWeatherByName(cityName);
      renderWeather(weatherData);
    });
  });
  