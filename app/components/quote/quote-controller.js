import QuoteService from "./quote-service.js";

let qs = new QuoteService

function draw(quote){

	let template = `
<div class="text-center">
<p class="desc">${quote.quote}</p>
<p class="author">- ${quote.author}</p>
</div>
`
document.getElementById('quote').innerHTML = template
}

export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(draw)
	}
}
