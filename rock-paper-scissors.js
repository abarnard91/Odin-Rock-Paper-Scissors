let rock="rock";
let paper="paper";
let scissors="scissors";
//let playerChoice= prompt("Choose: rock, paper, scissors");
//scores set to 0
let computerScore=0;
let playerScore=0;
//prompt player to pick either rock, paper or scissors
function playerMove(x){
		x=x.toLowerCase();
    console.log(x);
		//if (x!= "rock" || x!="paper" ||x!="scissors"){
    	//x=prompt("incorrect choice. Please choose: rock, paper, scissors")
    //}
  	
  }
function computerMove(){
	let computerChoice= Math.floor(Math.random() *2);
	if (computerChoice===0){
		computerChoice ="rock";
  }
  else if (computerChoice===1){
  	computerChoice = "paper";
  }
  else if(computerChoice === 2){
  	computerChoice = "scissors";
  }
  console.log(`computer choice is ${computerChoice}`);
}
while ((computerScore < 5) && (playerScore<5)){
	console.log("in the loop");
	//playerMove(playerChoice); 
  computerMove();
  computerScore++;
  console.log(`player score is ${playerScore} and computer score is ${computerScore}`);

	
  
 
}  
  
  
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
