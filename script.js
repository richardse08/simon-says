$(document).ready(function(){
    
	var sounds = ["https://s3.amazonaws.com/freecodecamp/simonSound1.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"];
	var sound1 = new Audio(sounds[0]);
    var sound2 = new Audio(sounds[1]);
    var sound3 = new Audio(sounds[2]);
    var sound4 = new Audio(sounds[3]);
    var firstClick = false;
    var playList = [];
	
    
	function randomNum() {
		var rand = Math.floor(Math.random() * (4)) + 1; 
		return rand;
	};
    
    
    
    function greenFunction() {
        var firstInterval = setInterval(function() {
            if(firstClick == true) {
                console.log("green function");
                $("#1").addClass("green-highlight");
                sound1.play();
            }
            clearInterval(firstInterval);
            removeGreenHighlight();
        }, 1000);
    };
	
	function removeGreenHighlight() {
		var removeGreenVar = setInterval(function() {
        $("#1").removeClass("green-highlight");
		clearInterval(removeGreenVar);
		}, 1000);
	};
    
    
    
    
    function redFunction() {
        var secondInterval = setInterval(function() {
            if(firstClick == true) {
                console.log("red function");
                $("#1").addClass("red-highlight");
                sound2.play();
            }
            clearInterval(secondInterval);
            removeRedHighlight();
        }, 1000);
    };
	
	function removeRedHighlight() {
		var removeRedVar = setInterval(function() {
        $("#1").removeClass("red-highlight");
		clearInterval(removeRedVar);
		}, 1000);
	};
	
    
	
	

	
	
	
	
	
	
	
	
	

    
	
	
    $("#start").click(function() {
        firstClick = true;
		greenFunction();
        // Fire up the first function here to begin the process
        // How to use css to make something blink and play a noise for X duration?
    });
    
    
    $("#reset").click(function() {
        firstClick = true;
		redFunction();
        // Fire up the first function here to begin the process
        // How to use css to make something blink and play a noise for X duration?
    });
	
	
  
    
    
    
	$(".green").click(function() {
		console.log("green");
        sound1.play();
	});
    
    
    
    $(".red").click(function() {
		console.log("red");
        sound2.play();
	});
   
    
    
    $(".blue").click(function() {
		console.log("blue");
        sound3.play();
	});
    
    
    
    $(".yellow").click(function() {
		console.log("yellow");
        sound4.play();
	});
	
    
	
	
	
	
	
});