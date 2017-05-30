$(document).ready(function(){
    
	var sounds = ["https://s3.amazonaws.com/freecodecamp/simonSound1.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"];
	var sound1 = new Audio(sounds[0]);
    var sound2 = new Audio(sounds[1]);
    var sound3 = new Audio(sounds[2]);
    var sound4 = new Audio(sounds[3]);
    
    var firstClick = false;
    
    var scoreVar = 0;
    var computerList = [];
    var userList = [];
    var testList = [1,3,4,1,2];
	
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
	};
	
    
    
    
    
    
    
    
    
    
    
    
    
    // Tell computer to make a random move
    // This uses a setTimeout to run loop at intervals
    function computerMoves() {
        
        for (i = 0; i < computerList.length; i++) {
        
            (function(i){ 
            
                setTimeout(function(){
                
                    if (allowLoop == true) {
                        if (computerList[i] == 1) {
                            greenFunction();
                        }
                        if (computerList[i] == 2) {
                            redFunction();
                        }
                        if (computerList[i] == 3) {
                            yellowFunction();
                        }
                        if (computerList[i] == 4) {
                            blueFunction();
                        }
                    };
                    allowUser = true;
        
                }, 2000 * i);
                
            }(i));  
            
        };
        
        
        checker();
        
    };
    
    
    
    
    
    
    // Check to see if the players moves are matching up with what the computer made
    function checker() {
        
//        if (computerList[0] == userList[0]) {
//            gameStart();
//        } else alert("You Lose");
        
 
        
    };
    
    
    
    
    


    // Game start function 
    function gameStart() {
        firstClick = true;
        var newRandom = randomNum();
        computerList.push(newRandom);
        console.log("computer list   " + computerList);
        userList = [];
        computerMoves();
    };
    
    
    
    
    
    
    // When called, see if the users last move matches its respective spot in the machineList
    // If it does do nothing but if it doesn't tell user they lost and reset the game
    function checkLastMove() {
        
        if (userList[userList.length-1] !== computerList[userList.length-1]) {
            alert("YOU HAVE LOST");
            computerList = [];
            userList = [];
            gameStart();
        }
        
        
        // Comparing their length only, not the contents of the lists because the previous conditional should be checking that
        else if (userList.length === computerList.length) {
            scoreVar ++;
            console.log("scoreVar =   " + scoreVar);
            gameStart();
        }
        
    };
    
    
    
    
    
    
    
    
    
    
    
    
    
    // User initiated click events below/////////////////////////////
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
        console.log("userList =   " + userList);
        checkLastMove();
    };
        
    
    

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
        console.log("userList =   " + userList);
        checkLastMove();
    };

    
    

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
        console.log("userList =   " + userList);
        checkLastMove();
    };
    
    
    
    
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
        console.log("userList =   " + userList);
        checkLastMove();
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
    
    


    
    
	
});
	
