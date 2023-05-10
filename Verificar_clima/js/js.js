const btn = document.querySelector(".btn")
const key = "caf72c6d48599040155f0e56d6f332a4"
const cityInput = document.querySelector("#cidade")
const nomeCidade = document.querySelector(".cidade_nome")
const temperatura = document.querySelector(".temperatura")
const ceu = document.querySelector(".ceu_ceu")
const umidade = document.querySelector(".umidade")
const vento = document.querySelector(".vento")

const getWeather = async (city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=pt_br`
    const res = await fetch(url)
    const data = await res.json()
    return data
}

const showWeatherData = async (city)=>{
    const data = await getWeather(city)
    getWeather(city)
    console.log(data)
    nomeCidade.innerText = data.name
    temperatura.innerText = `${parseInt(data.main.temp)}°`
    ceu.innerText = data.weather[0].description
    umidade.innerText = `${data.main.humidity}%`
    vento.innerText = `${data.wind.speed}km/h`
}
btn.addEventListener("click", (e)=>{
    e.preventDefault()
    let city = cityInput.value
    showWeatherData(city)
})