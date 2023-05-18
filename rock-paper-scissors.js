document.getElementById("button").addEventListener("click", (e)=> {
	var rock="rock";
  var paper= "paper";
  var scissors="scissors";
  var playerChoice=prompt("Choose rock, paper, or scissors");
  var computerChoice="blank";
	function playerMove(x) {
			x = x.toLowerCase();
      playerChoice=x
			console.log(`player entered ${x}`);
			if (x !== "rock" && x !== "paper" && x !== "scissors") {
				x = prompt("incorrect choice. Please choose: rock, paper, scissors");
        playerChoice=x.toLowerCase();
				console.log(`if loop response ${x}`);
			}
			console.log(`player choice is ${playerChoice}`);
      
 }
 
 function computerMove() {
			let randomMove = Math.floor(Math.random() * 2);
			if (randomMove === 0) {
				computerChoice = "rock";
			}
			else if (randomMove === 1) {
				computerChoice = "paper";
			}
			else if (randomMove === 2) {
				computerChoice = "scissors";
			}
			console.log(`computer choice is ${computerChoice}`);
}
playerMove(playerChoice);
computerMove();

console.log(`player choice outside of function is ${playerChoice} and computer choice is ${computerChoice}`)

if (playerChoice ===computerChoice){
	console.log("it's a tie. NO POINTS!!! push button again!")
}
if (((playerChoice === paper) && (computerChoice===scissors))|| ((playerChoice=== rock) &&(computerChoice===paper)) ||((playerChoice===scissors)&&(computerChoice===rock))){
console.log("you Lose! Good Day Sir!")
}
})


			//computer player randomly chooses rock paper or scissors
			//compare player and computer results:
			//if player picks rock and:
			//computer picks rock
			//result= tie no points
			//if computer picks paper
			//result= computer wins computer gains 1 point
			//if computer picks scissors
			//result= player wins, player gains 1 point
			//if player picks paper and:
			//computer picks rock
			//result= player wins, player gains 1 point 
			//if computer picks paper
			//result= tie no points 
			//if computer picks scissors
			//result= computer wins computer gains 1 point
			//if player picks scissors and:
			//computer picks rock
			//result= computer wins computer gains 1 point
			//if computer picks paper
			//result= player wins, player gains 1 point 
			//if computer picks scissors
			//result= tie no points
			//if a point is scored or a tie, the game is looped to prompt the player to pick
			//if the score for the playor or computer is == 5 the loop breaks
			// if the player has 5 points, display "you win"
			// if the computer has 5 points, display "you lose
		
	//})
