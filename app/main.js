import WeatherController from "./components/weather/weather-controller.js";
import QuoteController from "./components/quote/quote-controller.js";
import TodoController from "./components/todo/todo-controller.js";
import ImageController from "./components/image/image-controller.js";

class app {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      quoteController: new QuoteController(),
      todoController: new TodoController(),
      imageController: new ImageController()
    }
  }
}

// @ts-ignore
window.app = new app()  