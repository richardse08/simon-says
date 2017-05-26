$(document).ready(function(){
    
    
    
    
    var firstClick = false;
    
    
    
    function (firstFunction) {
        var firstInterval = setInterval(function() {

            if(firstClick == true) {
                console.log("first fucntion");    
                $(".green").addClass("green-highlight");
                sound1.play();
            }
            clearInterval(firstInterval);
            classRemove();    
        }, 3000);
    };
    
    
    
    function classRemove() {
        
        $(".green").removeClass("green-highlight")
        
    };
    
    
    
    
    function resetFunction() {
        $(".green").removeClass("green-highlight");
        sound3.play();
    }
    
    
    
    
    $("#reset").click(function() {
        
        resetFunction();
        // Fire up the first function here to begin the process
        // How to use css to make something blink and play a noise for X duration?
    })
    
    
    
    
    $("#start").click(function() {
        firstClick = true;
        firstFunction();
        // Fire up the first function here to begin the process
        // How to use css to make something blink and play a noise for X duration?
    })
    
    
    
    
    var sounds = ["https://s3.amazonaws.com/freecodecamp/simonSound1.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"];
    
    
    
    
    var sound1 = new Audio(sounds[0]);
    var sound2 = new Audio(sounds[1]);
    var sound3 = new Audio(sounds[2]);
    var sound4 = new Audio(sounds[3]);
    
    
    
    
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