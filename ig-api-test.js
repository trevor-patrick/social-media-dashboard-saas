const Insta = require('scraper-instagram');
const InstaClient = new Insta();
const InstaClient2 = new Insta();
InstaClient2.getProfile("casina.ewert")
	.then(profile => console.log(profile))
	.catch(err => console.error(err));


console.log(InstaClient2)