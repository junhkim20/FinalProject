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
	}, 
	{
		"factTitle": "40%",
		"fact": "This is the percentage of social media users who get cyber bullied everyday",
		"source": "Cal Underground"
	},
	{
		"factTitle": "75%",
		"fact": "This is the percentage of American teens involved in self-harm/suicide in 2021 due to social media",
		"source": "Fox Business"
	},
	{
		"factTitle": "7% and 20%",
		"fact": "This is the percentage of increase in severe depression and anxiety disorder with social media usage",
		"source": "MIT Management Sloan School"
	}

];

let resourceJSON = [
	{
		"resourceTitle": "Social Media Addiction: Signs, Symptoms & Treatments",
		"href": "https://www.choosingtherapy.com/social-media-addiction/"
	},
	{
		"resourceTitle": "Social Media Addiction: The Impact On Mental Health",
		"href": "https://addictionresource.com/addiction/social-media/"
	},
	{
		"resourceTitle": "Treatment For Social Media Addiction",
		"href": "https://www.addictioncenter.com/drugs/social-media-addiction/treatment/"
	},
	{
		"resourceTitle": "Social Media Addiction Help - AddictionHelp.com",
		"href": "https://www.addictionhelp.com/social-media-addiction/"
	},
	{
		"resourceTitle": "Social Media Addiction Help - RightStep",
		"href": "https://www.rightstep.com/rehab-blog/social-media-addiction-help/"
	},
	{
		"resourceTitle": "Social Media Addiction Help - Foothills",
		"href": "https://www.foothillsatredoak.com/adolescent-treatment-center-nc/process-addiction-treatment-center/social-media-addiction-treatment-center/"
	},
	{
		"resourceTitle": "Social Media Addiction Help - Omega Recovery",
		"href": "https://omegarecovery.org/social-media-addiction-help-329298/"
	}
];

function factDisplay() {
	let mainSection = document.getElementById('mainSection');

	let counter = 0; 

	for(let eachFact of factsJSON) {
		let factSection = document.createElement('div');
		if(counter % 2 == 0){
			factSection.className = 'fact1'; 
		} else {
			factSection.className = 'fact2'
		}
		factSection.setAttribute('data-aos', 'fade-up');
		factSection.setAttribute('data-aos-duration', '3000');

		counter += 1; 

		let factTitle = document.createElement('h1');
		factTitle.className = 'title';
		factTitle.textContent = eachFact.factTitle;
	    factSection.appendChild(factTitle);

	    let factFact = document.createElement('h1');
		factFact.textContent = eachFact.fact;
	    factSection.appendChild(factFact);

	    let factSource = document.createElement('h5');
		factSource.textContent = "Source: " + eachFact.source;
	    factSection.appendChild(factSource);

		mainSection.appendChild(factSection);
	}
}

function resourceDisplay() {
	let resourceSection = document.getElementById('resourceSection');

	for(let resource of resourceJSON) {
		let eachResource = document.createElement('div');

		let resTitle = document.createElement('a');
		resTitle.className = 'hover-3';
		resTitle.setAttribute('href', resource.href);
		resTitle.setAttribute('target', '_blank');
		resTitle.textContent = resource.resourceTitle;
	    eachResource.appendChild(resTitle);

	    resourceSection.append(eachResource);
	}
}

factDisplay(); 
resourceDisplay();

AOS.init();

$(document).ready(function () {
  $('.sectiontitle').tilt({
    scale: 1.1,
    glare: true
  });
});

$(document).ready(function () {
  $('.resourcesectiontitle').tilt({
    scale: 1.5,
    glare: true
  });
});
