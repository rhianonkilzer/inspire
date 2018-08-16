


export default class Weather {
    constructor(data) {
        this.coord = data.coord
        this.weather = data.weather
        this.wind = data.wind
        this.celsius = data.celsius
        this.fahrenheit = data.fahrenheit
        this.kelvin = data.kelvin
    }
}
