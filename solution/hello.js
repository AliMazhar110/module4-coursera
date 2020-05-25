(function(window){
	var speakHello = {};
	var speakWord = "Hello";
	speakHello.speak = function(){
		return speakWord;
	}

	window.speakHello = speakHello;

})(window);





