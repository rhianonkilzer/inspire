import ImageService from "./image-service.js";




let imgser = new ImageService
const app = document.getElementById("app")


export default class ImageController {
    constructor() {
        this.getImage()
    }
    getImage() {
        imgser.getImage(image => {
            console.log(image);

            //how to set background of element in js
        })
    }
}

