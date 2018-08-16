import WeatherController from "./components/weather/weather-controller.js";
import QuoteController from "./components/quote/quote-controller.js";
import TodoController from "./components/todo/todo-controller.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class app {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController()
    }
  }
}

// @ts-ignore
window.app = new app()  