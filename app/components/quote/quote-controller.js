import QuoteService from "./quote-service.js";

let qs = new QuoteService

function draw(quote){
let template = `
<div class="col-3">

</div>
`

}

export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(draw)
	}
}
