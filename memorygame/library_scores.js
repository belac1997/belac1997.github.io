"use strict";

	var myApp = myApp || {};
	myApp.scores = (function(){
		//private variables		
		var match = 0; 
		var noMatch = 0;

		//private functions
		var getHighScore = function(name) {
			var percentage = localStorage.getItem(name) || undefined;
				return parseInt(percentage);
			};
		
		var setHighScore = function(name, percentage) {
			if (name && name !== "" && !isNaN(percentage)) {
				localStorage.setItem(name, percentage);
			}
		};
		
		
		//public methods
		return {
			compareScores: function(name) {
				var percentage = Math.floor((match / noMatch) * 100);
                $("#correct").text("Correct: " + percentage + "%");
				if (name && name !== "" && !isNaN(percentage)) {
						var highScore = getHighScore(name);
						if (isNaN(highScore) || percentage > highScore) {
							setHighScore(name, percentage);
						}
					}
			},
			
			displayHighScore: function(name) {
				if (name !== "") {
					var percent = getHighScore(name);
					if (!isNaN(percent)) {
						$("#high_score").text( "High score: " + percent + "%");
					}
				}
			},
			
			match: function() {
				match++;
			},
			
			nomatch: function() {
				noMatch++;
			},
			

		}
	})();
