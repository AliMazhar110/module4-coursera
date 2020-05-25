(function(window){
	var speakGoodbye = {};
	var speakWord = "Good Bye";
	speakGoodbye.speak = function(){
		return speakWord;
	}

	window.speakGoodbye = speakGoodbye;

})(window);