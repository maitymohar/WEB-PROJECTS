const apikey ="e3bbc2e482aa908528eb88599fc711bb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
async function checkweather(city)
{
    const response =await fetch(apiUrl + city+ `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML =data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wiind.speed
}
searchBtn.addEventListener("click", ()=>
{
    checkweather(searchBox.value);
})