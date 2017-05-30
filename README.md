# simon-says
Replica of the Simon Says game

This game will be function intensive and should show solid understanding of object-oriented and functional programming

UPDATE 290517
Made substantial progress today. While testing, was able to code up some functions (they may be archived in functions.js) that would run through a practice list and correctly make a noise and flash a color correlated to a randomly selected corner. Also, was able to create an interval script that would ensure some time elapsed between showing user this. As of now, if you click start the program will choose a random spot. If you choose the same spot, itll continue and create a another random spot. If you choose the wrong spot then it will alert(you lose). 

Need to create code to chain the moves together, also need to add a strict mode



ISSUES

- Originally, I setup the 4 "color" functions (the ones that illuminate the blocks and play a sound when their respective function is fired) that illuminate the blocks to iterate a variable called 'Q' as well as re-run machine function. The purpose of this was try to do a loop by having the first color function run, followed by Q++ and machineMoves(). I realized this was bad practice and didn't work quite right (obviously) so I will use setTimeout instead paired with a loop to ensure that the loop doesn't iterate through the list all at once, but instead incorporates a delay




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

