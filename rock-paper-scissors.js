var computerChoice="blank";
var playerScore=0;
var computerScore=0;

document.getElementById("button").addEventListener("click", (e)=> {
	document.getElementById("button").innerHTML="Click again to keep playing!"
	//if the score for the playor or computer is == 5 the loop breaks
	while ((playerScore<5) &&(computerScore<5)){
		var rock="rock";
		var paper= "paper";
		var scissors="scissors";
		var playerChoice=prompt("Choose rock, paper, or scissors");

		
		

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

		//computer player randomly chooses rock paper or scissors
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

		//compare player and computer results:
		if (playerChoice ===computerChoice){
			console.log("it's a tie. NO POINTS!!! push button again!");
			break;
		}
		if (((playerChoice === paper) && (computerChoice===scissors))|| ((playerChoice=== rock) &&(computerChoice===paper)) ||((playerChoice===scissors)&&(computerChoice===rock))){
			console.log("you Lose! Good Day Sir!");
			computerScore+=5
			console.log(`The score is player ${playerScore} computer ${computerScore}`);
			break;
		}
		if  (((playerChoice === scissors) && (computerChoice===paper))|| ((playerChoice=== paper) &&(computerChoice===rock)) ||((playerChoice===rock)&&(computerChoice===scissors))){
			console.log("You've won the round!!!! huzzah! 1 point to you")
			playerScore+=5
			console.log(`The score is player ${playerScore} computer ${computerScore}`)
			break
		}
	}
				
	// if the player has 5 points, display "you win"
	if (playerScore==5){
		document.getElementById("header").innerHTML="YOU WON!!!!";
		document.getElementById("instructions").innerHTML="refresh the page to play again";
	}

	// if the computer has 5 points, display "you lose
	if (computerScore==5){
		document.getElementById("header").innerHTML="YOU LOSE GO HOME!";
		document.getElementById("instructions").innerHTML="refresh the page to play again";
	}

})

