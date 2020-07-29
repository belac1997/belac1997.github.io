
var card = {  
	
	preloadAndStoreImages: function() {
    	var numberOfImages = settings.getNumberOfImages(); // get value from settings
    	var images = [];
    	var back = new Image();
    	back.src = "images/back.png";    
    	var blank = new Image();
    	blank.src = "images/blank.png";
    
    	for (var i = 1; i <= numberOfImages; i++) { // use value from settings
        	var img = new Image();
        	img.src = "images/card_" + i + ".png";
        	images.push(img);
    	}
    	return images;
	},
	
	storeCardSrcs: function(images) {
    	var srcs = [];
    	if (Array.isArray(images)) {
        	for (var i in images) {
            	srcs.push(images[i].src);
            	srcs.push(images[i].src);
        	}
    	}
    	return srcs;
	},
	
	createCardsHtml: function(cards, backSrc) {
    	var counter, max, cardIndex, src, html;
    
    	// set initial counter value and max cards per row
    	counter = 1, max = 8;
    
    	// create cards HTML
    	if (Array.isArray(cards)) {
        	html = "<div>"; // open first div tag
        
        	while (cards.length > 0) {
            	// randomly select card from array
            	cardIndex = Math.floor(Math.random() * cards.length);
            	src = cards[cardIndex];
            	cards.splice(cardIndex, 1); // remove card from array
            
            	// create HTML for link and image
            	html += "<a id='" + src + "' href='#'><img src='" + backSrc + "' alt=''></a>";
            
            	// if end of row, clear float, close div tag and open new div tag, and reset counter
            	if (counter === max) {
                	html += "<p class='clear'></p></div><div>";
                	counter = 1;
            	} else { // otherwise, increment counter
                	counter++;
            	}
        	}
        	html+= "</div>"; // close last div tag
    	}
    	return html;
	},
	
	fadeCardFlip: function(img, newSrc, duration) {
    	img.fadeOut(duration, function() {
        	img.attr( "src", newSrc ).fadeIn(duration);
    	});
	},

	slideCardFlip: function(img, newSrc, duration) {
    	img.slideUp(duration, function() {
        	img.attr( "src", newSrc ).fadeIn(duration);
    	});
	}
};

