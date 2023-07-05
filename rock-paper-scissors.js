var computerChoice="blank";
var playerScore=0;
var computerScore=0;

document.getElementById("button").addEventListener("click", (e)=> {
	document.getElementById("button").style.visibility="hidden";
  document.getElementsByClassName("buttons")[0].style.visibility="visible";})
	//if the score for the playor or computer is == 5 the loop breaks
	//while ((playerScore<5) &&(computerScore<5)){
var rock="rock";
var paper= "paper";
var scissors="scissors";
var playerChoice=""
document.getElementById("rock").addEventListener("click", ()=> {
  playerMove("rock");
  computerMove();
  compareResults();
  });
document.getElementById("paper").onclick=()=>{
	playerMove("paper");
	computerMove();
	compareResults();
  }
document.getElementById("scissors").onclick=()=>{
	playerMove("scissors");
	computerMove();
	compareResults();
  }
    
		
		

function playerMove(x) {
			console.log(`player entered ${x}`);
       playerChoice=x;
       return playerChoice;
		
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

		//compare player and computer results:
function compareResults(){
  if (playerChoice ===computerChoice){
    console.log("it's a tie. NO POINTS!!! push button again!");

      }
  if (((playerChoice === paper) && (computerChoice===scissors))|| ((playerChoice=== rock) &&(computerChoice===paper)) ||((playerChoice===scissors)&&(computerChoice===rock))){
    console.log("you Lose! Good Day Sir!");
    computerScore+=1
    console.log(`The score is player ${playerScore} computer ${computerScore}`);

      }
  if  (((playerChoice === scissors) && (computerChoice===paper))|| ((playerChoice=== paper) &&(computerChoice===rock)) ||((playerChoice===rock)&&(computerChoice===scissors))){
    console.log("You've won the round!!!! huzzah! 1 point to you")
    playerScore+=1
    console.log(`The score is player ${playerScore} computer ${computerScore}`)
    }


    // if the player has 5 points, display "you win"
  if (playerScore===5){
    document.getElementById("header").innerHTML="YOU WON!!!!";
    document.getElementById("instructions").innerHTML="refresh the page to play again";
    document.getElementsByClassName("buttons")[0].style="hidden";
    document.getElementById("button").style.visibility="visible";
    document.getElementById("button").innerHTML="Click me to play again."
    playerScore=0;
    computerScore=0;
    return playerScore, computerScore;
  }

  // if the computer has 5 points, display "you lose"
  if (computerScore===5){
    document.getElementById("header").innerHTML="YOU LOSE GO HOME!";
    document.getElementById("instructions").innerHTML="refresh the page to play again";
    document.getElementsById("button").innerHTML="Click me to play again."
    document.getElementsByClassName("buttons")[0].style="hidden";
    document.getElementById("button").style.visibility="visible";
    playerScore=0;
    computerScore=0;
    return playerScore, computerScore;    
  }
}
