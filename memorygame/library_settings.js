"use strict";
var settings = {
	getNumberOfImages: function() {
		return parseInt(sessionStorage.numberOfImages) || 24;
	},

	setNumberOfImages: function(num) {
		sessionStorage.numberOfImages = num;
	},
		
	setPlayerName: function(name) {
		sessionStorage.playerName = name;
	},

	getPlayerName: function() {
		return sessionStorage.playerName || "";
	}
};    
