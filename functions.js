    $("#reset").click(function() {

        resetFunction();
        // Fire up the first function here to begin the process
        // How to use css to make something blink and play a noise for X duration?

    })






    $("#start").click(function() {
        // Get a random number and send it to chooseNum function
        firstClick = true;
        var alpha = randomNum();
        console.log(alpha);
        
        if (alpha === 1) {
            greenFunction();
            playList.push(alpha);
        }
        else if (alpha === 2) {
            redFunction();
            playList.push(alpha);
        }
        else if (alpha === 3) {
            yellowFunction();
            playList.push(alpha);
        }
        else if (alpha === 4) {
            blueFunction();
            playList.push(alpha);
        }
        
        console.log(playList);
    });






    function loopFunction() {
    
        if (testList[0] === 1) {
            greenFunction();
            return;
        }
        else if (testList[0] === 2) {
            redFunction();
            return;
        }
        else if (testList[0] === 3) {
            yellowFunction();
            return;
        }
        else if (testList[0] === 4) {
            blueFunction();
            return;
        }
        
    };


  function listLoop() {
        
        for (i = 0; i < testList.length; i++) {
            if (testList[i] === 1) {
                greenFunction();
            }
            else if (testList[i] === 2) {
                redFunction();
            }
            else if (testList[i] === 3) {
                yellowFunction();
            }
            else if (testList[i] === 4) {
                blueFunction();
            }
        };
        loopFunction();
    };
    
    
    function looper() {
        
        for (i = 0; i < testList.length; i++) {
            
            if (cond == true && testList[i] === 1) {
                cond == false;
                greenFunction();
            }
            else if (cond == true && testList[i] === 2) {
                cond == false;
                redFunction();
            }
            else if (cond == true && testList[i] === 3) {
                cond == false;
                yellowFunction();
            }
            else if (cond == true && testList[i] === 4) {
                cond == false;
                blueFunction();
            }
            
        };
        
    };
    
    
    
    
    
    
    
    function loopFunction() {
        
        var one = greenFunction();
        var two = redFunction();
        var three = yellowFunction();
        var four = blueFunction();
        
        var loopInterval = setInterval(function() {
            
                if (testList[i] === 1) {
                    greenFunction();
//                    clearInterval(loopInterval);
//                    return;
                }
                else if (testList[i] === 2) {
                    redFunction();
//                    clearInterval(loopInterval);
//                    return;
                }
                else if (testList[i] === 3) {
                    yellowFunction();
//                    clearInterval(loopInterval);
//                    return;
                }
                else if (testList[i] === 4) {
                    blueFunction();
//                    clearInterval(loopInterval);
//                    return;
                }
                console.log("asdfsdafa");
                
        }, 1000);
        
    };