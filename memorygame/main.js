"use strict";
$(document).ready(function() {
    // attach tabs widget 
    $("#tabs").tabs();

	/*var getNumberOfImages = function() {
    	return parseInt(sessionStorage.numberOfImages) || 24;
	};	
	
	var setNumberOfImages = function(num) {
    	sessionStorage.numberOfImages = num;
	};
		
	var setPlayerName = function(name) {
    	sessionStorage.playerName = name;
	};

	var getPlayerName = function() {
    	return sessionStorage.playerName || "";
	};*/

	/*var preloadAndStoreImages = function() {
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
	};

	var storeCardSrcs = function(images) {
    	var srcs = [];
    	if (Array.isArray(images)) {
        	for (var i in images) {
            	srcs.push(images[i].src);
            	srcs.push(images[i].src);
        	}
    	}
    	return srcs;
	};

	var createCardsHtml = function(cards, backSrc) {
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
	};

	var fadeCardFlip = function(img, newSrc, duration) {
    	img.fadeOut(duration, function() {
        	img.attr( "src", newSrc ).fadeIn(duration);
    	});
	};

	var slideCardFlip = function(img, newSrc, duration) {
    	img.slideUp(duration, function() {
        	img.attr( "src", newSrc ).fadeIn(duration);
    	});
	};*/

	/*var getHighScore = function(name) {
    	var percentage = localStorage.getItem(name) || undefined;
    	return parseInt(percentage);
	};
	
	var setHighScore = function(name, percentage) {
    	if (name && name !== "" && !isNaN(percentage)) {
        	localStorage.setItem(name, percentage);
    	}
	};

	var compareScores = function(name, percentage) {
    	if (name && name !== "" && !isNaN(percentage)) {
        	var highScore = getHighScore(name);
        	if (isNaN(highScore) || percentage > highScore) {
            	setHighScore(name, percentage);
        	}
    	}
	};

	var displayHighScore = function(name) {
    	if (name !== "") {
        	var percent = getHighScore(name);
        	if (!isNaN(percent)) {
            	$("#high_score").text( "High score: " + percent + "%");
        	}
    	}
	};*/
	   
    // initialize variables


    var lastA, lastImg, name, percent;
    var isFirst = true, isOkToClick = true;
	var matchSelect = myApp.scores;
	var correctSelection = 0;
    	
    // preload images and store Image objects for cards in images array		
	var images = card.preloadAndStoreImages();	
	
    
    // store two src strings for each Image object in cards array
    var cards = card.storeCardSrcs(images);
    
    // randomly add each src in the cards array to an html string and 
    // display html string on page
    var html = card.createCardsHtml(cards, "images/back.png");
    $("#cards").html( html );
    

    // display settings and high score for player
    name = settings.getPlayerName();
    $("#player_name").val( name );
    $("#num_cards").val( settings.getNumberOfImages() * 2 );
    
    if (name !== "") {
        $("#player").text( "Player: " + name );    	
    } 
    
	matchSelect.displayHighScore(name);
    
    // add click event handler for each card
    $("#cards").find("a").each(function() {
        $(this).click(function(evt) {
            // cancel the default action of the clicked <a> tag
            evt.preventDefault();

            // get the clicked <a> tag and its child img tag
            var a = $(this);
            var img = $(a.find("img")[0]);
            
            // don't do anything if the image is blank or already revealed, or last turn isn't done yet
            if (img.attr("src") !== "images/back.png" || !isOkToClick) { return; }

            // fade img tag from default image to image in the id 
            // attribute of the <a> tag
            card.fadeCardFlip(img, a.attr("id"), 500);

            // if isFirst flag is true, that means the clicked card is the
            // first card of the turn. Store clicked <a> tag and set flag to false
            if (isFirst) { 
                lastA = a; 
                isFirst = false;

            } else { // clicked card is second card of turn    
                // set okToClick flag to false for this turn
                isOkToClick = false;
  
                // get child img tag of last clicked <a> tag
                lastImg = $(lastA.find("img")[0]);
                
                // update count 
                matchSelect.nomatch();
				
                // if id attribute for last clicked and current <a> match...             
                if (lastA.attr("id") === a.attr("id")) {
                    // update count 
                    matchSelect.match();
					correctSelection++;
                    // slide both child img tags to blank image after 1 second,
                    // reset isOkToClick flag back to true for next turn
                    setTimeout(function(){ 
                        card.slideCardFlip(img, "images/blank.png", 500);
                        card.slideCardFlip(lastImg, "images/blank.png", 500);
                        isOkToClick = true;
                    }, 1000);
                    isFirst = true;
                    // if all images have been correctly selected, calculate % 
                    // and display after 1.5 seconds 
                    if ( correctSelection == images.length) {
                        setTimeout(function(){ 
                            // save and display high score for player
                            name = settings.getPlayerName();
                            matchSelect.compareScores(name);
                            matchSelect.displayHighScore(name);
                        }, 1500);     
                    }      
                } else {					
                    // fade both images back to default image after 2 seconds,
                    // reset isOkToClick flag back to true for next turn
                    setTimeout(function(){ 
                        card.fadeCardFlip(img, "images/back.png", 500);
                        card.fadeCardFlip(lastImg, "images/back.png", 500);
                        isOkToClick = true;
                    }, 2000);
                } // end inner if
				//alert(isFirst);
                // reset isFirst flag for next turn
                isFirst = true;
                //alert(isFirst);
            } // end outer if

        }); // end click()
    }); // end each()
    
    // add click event handler for Save Settings button
    $("#save_settings").click(function() {
        // save settings
		
        //setPlayerName( $("#player_name").val() );
		settings.setPlayerName( $("#player_name").val() );
        //setNumberOfImages( parseInt( $("#num_cards").val() ) / 2 ); 
        settings.setNumberOfImages( parseInt( $("#num_cards").val() ) / 2 ); // divide by 2 because cards contains 2 of each card
        // reload page 
        location.reload();
    }); // end click()
    
}); // end ready()