import ImageService from "./image-service.js";


let imgser = new ImageService

function draw(image){
console.log(image)
    document.body.style.backgroundImage = `url('${image.large_url}')`
}


export default class ImageController {
    constructor() {
        this.getImage()
    }
    getImage() {
        imgser.getImage(image => {
            draw(image)
            //how to set background of element in js
        })
    }
}
