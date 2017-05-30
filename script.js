$(document).ready(function(){
    
	var sounds = ["https://s3.amazonaws.com/freecodecamp/simonSound1.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"];
	var sound1 = new Audio(sounds[0]);
    var sound2 = new Audio(sounds[1]);
    var sound3 = new Audio(sounds[2]);
    var sound4 = new Audio(sounds[3]);
    
    var firstClick = false;
    var computerList = [];
    var userList = [];
    var testList = [1,3,4,1,2];
	
    var q = 0;
    
    var allowLoop = true;
    var allowUser = false;
    
    
    
    // Get a random number
	function randomNum() {
		var rand = Math.floor(Math.random() * (4)) + 1; 
		return rand;
	};

    
    
    
    
    
    
    
    
    // Computer green code
    function greenFunction() {
        var firstInterval = setInterval(function() {
            if(firstClick == true) {
                console.log("green function");
                $("#1").addClass("green-highlight");
                sound1.play();
            }
            clearInterval(firstInterval);
            removeGreenHighlight();
        }, 2000);
    };
    
	function removeGreenHighlight() {
		var removeGreenVar = setInterval(function() {
        $("#1").removeClass("green-highlight");
		clearInterval(removeGreenVar);
		}, 1000);
        console.log("q iteration is   " + q);
        computerMoves();
	};
    
    
    
    // Computer red code
    function redFunction() {
        var secondInterval = setInterval(function() {
            if(firstClick == true) {
                console.log("red function");
                $("#2").addClass("red-highlight");
                sound2.play();
            }
            clearInterval(secondInterval);
            removeRedHighlight();
        }, 2000);
    };
	
	function removeRedHighlight() {
		var removeRedVar = setInterval(function() {
        $("#2").removeClass("red-highlight");
		clearInterval(removeRedVar);
		}, 1000);
        console.log("q iteration is   " + q);
        computerMoves();
	};
    
    
    
    // Computer yellow code
    function yellowFunction() {
        var yellowInterval = setInterval(function() {
            if(firstClick == true) {
                console.log("yellow function");
                $("#3").addClass("yellow-highlight");
                sound3.play();
            }
            clearInterval(yellowInterval);
            removeYellowHighlight();
        }, 2000);
    };
	
	function removeYellowHighlight() {
		var removeYellowVar = setInterval(function() {
        $("#3").removeClass("yellow-highlight");
		clearInterval(removeYellowVar);
		}, 1000);
        console.log("q iteration is   " + q);
        computerMoves();
	};
    
    
    
    // Computer blue code
    function blueFunction() {
        var blueInterval = setInterval(function() {
            if(firstClick == true) {
                $("#4").addClass("blue-highlight");
                sound4.play();
                console.log("blue function");
            }
            clearInterval(blueInterval);
            removeBlueHighlight();
        }, 2000);
    };
	
	function removeBlueHighlight() {
		var removeBlueVar = setInterval(function() {
        $("#4").removeClass("blue-highlight");
		clearInterval(removeBlueVar);
		}, 1000);
        console.log("q iteration is   " + q);
        computerMoves();
	};
	
    
    
    
    
    
    
    
    
    
    
    
    
    // Tell computer to make a random move
    // This MUST incorporate a loop to run through the list
    function computerMoves() {
        
        
        
            if (allowLoop == true) {
                if (computerList[q] == 1) {
                    greenFunction();
                }
                if (computerList[q] == 2) {
                    redFunction();
                }
                if (computerList[q] == 3) {
                    yellowFunction();
                }
                if (computerList[q] == 4) {
                    blueFunction();
                }
            };
            allowUser = true;
        
    };
    
    
    
    
    
    


    // Game start function 
    function gameStart() {
        firstClick = true;
        var newRandom = randomNum();
        computerList.push(newRandom);
        console.log("computer list   " + computerList);
        computerMoves();
//        allowUser = true;
    };
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // USER CLICK////////////////////////////////////////
    $(".green").click(function() {
        var userInterval = setInterval(function() {
            $("#1").addClass("green-highlight");
            sound1.play();
            clearInterval(userInterval);
            removeGreenUser();
        }, 100);
    });
    
    function removeGreenUser() {
        var removeGreenUserVar = setInterval(function() {
        $("#1").removeClass("green-highlight");
        clearInterval(removeGreenUserVar);
        }, 300);
        userList.push(1);
        checker();
    };
        
    
    
    // USER CLICK////////////////////////////////////////
    $(".red").click(function() {
        var userInterval2 = setInterval(function() {
            $("#2").addClass("red-highlight");
            sound2.play();
            clearInterval(userInterval2);
            removeRedUser();
        }, 100);
    });
    
    function removeRedUser() {
        var removeRedUserVar = setInterval(function() {
        $("#2").removeClass("red-highlight");
        clearInterval(removeRedUserVar);
        }, 300);
        userList.push(2);
        checker();
    };

    
    
    // USER CLICK////////////////////////////////////////
    $(".yellow").click(function() {
        var userInterval3 = setInterval(function() {
            $("#3").addClass("yellow-highlight");
            sound3.play();
            clearInterval(userInterval3);
            removeYellowUser();
        }, 100);
    });
    
    function removeYellowUser() {
        var removeYellowUserVar = setInterval(function() {
        $("#3").removeClass("yellow-highlight");
        clearInterval(removeYellowUserVar);
        }, 300);
        userList.push(3);
        checker();
    };
    
    
    
    // USER CLICK////////////////////////////////////////
    $(".blue").click(function() {
        var userInterval4 = setInterval(function() {
            $("#4").addClass("blue-highlight");
            sound4.play();
            clearInterval(userInterval4);
            removeBlueUser();
        }, 100);
    });
    
    function removeBlueUser() {
        var removeBlueUserVar = setInterval(function() {
        $("#4").removeClass("blue-highlight");
        clearInterval(removeBlueUserVar);
        }, 300);
        userList.push(4);
        checker();
    };
    
    
    
    
    $("#start").click(function() {
        gameStart();
    });
    
    
    $("#reset").click(function () {
        firstClick = true;
        computerMoves();
        console.log("reset clickjed");
    });

   
    $("#strict").click(function () {
        console.log("computer list =   " + computerList);
        console.log("user list =   " + userList);
    });
    
    
    // Check to see if the players moves are matching up with what the computer made
    function checker() {
        
        if (computerList[0] == userList[0]) {
            gameStart();
        } else alert("You Lose");
        
    };

    
    
	
});
	
