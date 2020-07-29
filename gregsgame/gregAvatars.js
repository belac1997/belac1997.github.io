function getMore(x)
{
	switch (x)
	{
	case "bunny":
		var bunnyDetails = document.createElement("p");
		var bunnyInfo = document.createTextNode("The bunny can hop to a height of 100 feet and span 100 feet at a time. The Easter Basket is magical and holds anything put into it, even a house (if you can lift it and move it!). The basket comes pre-loaded with supplies like chocolate eggs and a bag of life-sustaining jelly beans. The bunny's partner is a clever fox who is sly and quick-witted. Together with the bunny their intelligence is unmatched. ");
		bunnyDetails.appendChild(bunnyInfo);
		document.getElementById("details").appendChild(bunnyDetails);
		break;		
	case "princess":
		var prinDetails = document.createElement("p");
		var prinInfo = document.createTextNode("The princess is so lovely that she mesmerizes anyone who looks at her, man and woman alike. Her makeup case holds her own makeup (although she rarely needs any, as lovely as she already is) but also allows her to transform her appearance to any human or animal form. The princess can call her knight whenever she needs him. He will always appear, garbed in his shining armor.");
		prinDetails.appendChild(prinInfo);
		document.getElementById("details").appendChild(prinDetails);
		break;		
	case "ghost":
		var ghostDetails = document.createElement("p");
		var ghostInfo = document.createTextNode("The ghost can appear in ghostly form or become invisible at will. His sunglasses allow him to see through any barrier and increase his sight to a range of 20 miles. The ghost has no need for food, water, or sleep. While the ghost cannot speak, the sunglasses can amplify any sound. To alert a companion to danger, the ghost can tap the sunglasses on any surface. The ghost's best friend is a vampire who can walk among humans (at night, of course) when necessary to aid the ghost.");
		ghostDetails.appendChild(ghostInfo);
		document.getElementById("details").appendChild(ghostDetails);
		break;		
	case "wizard":
		var wizardDetails = document.createElement("p");
		var wizardInfo = document.createTextNode("The wizard is a first-class magician. With his magic wand he can weave spells that confound even the hardiest souls. His magic is rivaled by no person or creature, save the evil warlock, Dartmouth Dreadful. The wizard wears a cloak that has bottomless pockets, pre-loaded with a week's supply of food and water. The wizard's cat is very cuddly and provides the wizard with the love and companionship the solitary wizard often craves.");
		wizardDetails.appendChild(wizardInfo);
		document.getElementById("details").appendChild(wizardDetails);
		break;		
	case "elf":
		var elfDetails = document.createElement("p");
		var elfInfo = document.createTextNode("The elf is the mischief-maker. With the ability to hear sounds as far as 20 miles off, the elf always knows what or who is approaching. The elf's bow and arrows shoot true, rarely missing their mark. The elf also climbs trees with the agility of a squirrel, climbs mountains like a mountain goat, and is as comfortable in water as an otter. The elf's quiver holds a dozen arrows which are automatically replenished after 11 are used. The elf and dragon are rarely parted. The elf babysits the dragon's one young dragon-ette in a nursery deep within the elf's giant oak tree and the dragon provides transportation by air whenever the elf must travel long distances quickly.");
		elfDetails.appendChild(elfInfo);
		document.getElementById("details").appendChild(elfDetails);
		break;	
	}
}
