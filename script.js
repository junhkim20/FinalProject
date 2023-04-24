// {
// 	"factTitle": "",
// 	"fact": "",
// 	"source": ""
// }

let factsJSON = [
	{
		"factTitle": "1,300 hours",
		"fact": "This is how long Americans spent on average being on social media.",
		"source": "Forbes"
	},
	{
		"factTitle": "72%",
		"fact": "This is the percentage of Americans on social media.",
		"source": "Pew Research Center"
	}
];

function mainDisplay() {
	let mainSection = document.getElementById('mainSection');

	for(let eachFact of factsJSON) {
		let factSection = document.createElement('div');
		
		factSection.className = 'fact'; 

		let factTitle = document.createElement('h1');
		factTitle.className = 'title';
		factTitle.textContent = eachFact.factTitle;
	    factSection.appendChild(factTitle);

	    let factFact = document.createElement('h1');
		factFact.textContent = eachFact.fact;
	    factSection.appendChild(factFact);

	    let factSource = document.createElement('h2');
		factSource.textContent = "Source: " + eachFact.source;
	    factSection.appendChild(factSource);

		mainSection.appendChild(factSection);
	}
}

mainDisplay(); 