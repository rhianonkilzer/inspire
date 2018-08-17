import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function draw(weather) {
	let template = `
	<div class="weather">
	<p>${weather.coord}</p>
	<p>${weather.weather}</p>
	<p>${weather.wind}</p>
	</div>
	`
	
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
