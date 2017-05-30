# simon-says
Replica of the Simon Says game

This game will be function intensive and should show solid understanding of object-oriented and functional programming

UPDATE 290517
Made substantial progress today. While testing, was able to code up some functions (they may be archived in functions.js) that would run through a practice list and correctly make a noise and flash a color correlated to a randomly selected corner. Also, was able to create an interval script that would ensure some time elapsed between showing user this. As of now, if you click start the program will choose a random spot. If you choose the same spot, itll continue and create a another random spot. If you choose the wrong spot then it will alert(you lose). 

Need to create code to chain the moves together, also need to add a strict mode








PLAN

CLICK START
- random number is selected
- save this number to a computer list
- run a FUNCTION computerMoves() that loops thru this list, depending on if number is 1, 2, 3 or 4 it will run green, red, yellow or blue
*** computer moves does NOT loop, that is an issue that needs to be resolved ASAP
- once finished looping through list, STOP and allow user to click


USER TURN == TRUE
- user can click on blocks
- each time user clicks a block, its number tag is saved to a separate USER list
- each time user clicks a block, fun a FUNCTION CHECKER() that checks to see if the USER list is same as COMPUTER list

- if userlist length = 1, then check complist[0] and userlist[0] for equality
- if userist length = 2, then check complist[1] and userlist[1] for equality
- in other words, dont check the ENTIRE list, just check the one single iteration

