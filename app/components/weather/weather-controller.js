import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function draw(weather) {
	console.log("weather", weather)
	let tempf = (weather.main.temp*9/5-459.67).toFixed(0)
	let template = `
	<div class="text-center weather">
	<p>Latitude: ${weather.coord.lat}</p>
	<p>Temperature: ${tempf}</p>
	<p>Wind: ${weather.wind.speed}</p>
	</div>
	`
document.getElementById('weather').innerHTML = template
}
export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(draw)
	}
}
