var computerChoice="blank";
var playerScore=0;
var computerScore=0;

document.getElementById("button").addEventListener("click", (e)=> {
	document.getElementById("button").style.visibility="hidden";
  document.getElementsByClassName("buttons")[0].style.visibility="visible";
  document.getElementsByClassName("images")[0].style.visibility="visible";
  })
	//if the score for the playor or computer is == 5 the loop breaks
	//while ((playerScore<5) &&(computerScore<5)){
var rock="rock";
var paper= "paper";
var scissors="scissors";
var playerChoice=""
var paperImage=document.getElementById("paper-image");
var rockImage=document.getElementById("rock-image");
var scissorsImage=document.getElementById("scissors-image");


document.getElementById("rock").addEventListener("click", ()=> {
	paperImage.classList.remove('animated');
  scissorsImage.classList.remove('animated');
  rockImage.classList.remove('animated');
  window.requestAnimationFrame(function() {
    rockImage.classList.add('animated');
  });
  
  
  playerMove("rock");
  computerMove();
  compareResults();
  });
document.getElementById("paper").onclick=()=>{
	playerMove("paper");
  paperImage.classList.remove('animated');
  rockImage.classList.remove('animated');
  scissorsImage.classList.remove('animated');
  window.requestAnimationFrame(function() {
    paperImage.classList.add('animated');
  });
  
  
  //document.getElementById("paper-image").style.animationIterationCount="1";
	computerMove();
	compareResults();
  }
document.getElementById("scissors").onclick=()=>{
	paperImage.classList.remove('animated');
  scissorsImage.classList.remove('animated');
  rockImage.classList.remove('animated');
  window.requestAnimationFrame(function() {
    scissorsImage.classList.add('animated');
  });
  
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
  const score=document.getElementById("instructions");
  const preScore=document.createElement("div");
  preScore.setAttribute('id','prescore');
  preScore.setAttribute('class','instructions')
  score.appendChild(preScore);
  
  if (playerChoice ===computerChoice){
    preScore.textContent = "it's a tie. NO POINTS!!! push button again!";
    
    
      }
  if (((playerChoice === paper) && (computerChoice===scissors))|| ((playerChoice=== rock) &&(computerChoice===paper)) ||((playerChoice===scissors)&&(computerChoice===rock))){
  	
   	preScore.textContent = "you Lose! Good Day Sir!";
    computerScore+=1
    score.textContent = `The score is player ${playerScore} computer ${computerScore}`;
    score.appendChild(preScore);
   
		}
  if  (((playerChoice === scissors) && (computerChoice===paper))|| ((playerChoice=== paper) &&(computerChoice===rock)) ||((playerChoice===rock)&&(computerChoice===scissors))){
  	
    preScore.textContent = "You've won the round!!!! huzzah! 1 point to you";
    playerScore+=1
    score.textContent=`The score is player ${playerScore} computer ${computerScore}`;
    score.appendChild(preScore);
    
    }


    // if the player has 5 points, display "you win"
  if (playerScore===5){
    document.getElementById("header").innerHTML="YOU WON!!!!";
    document.getElementById("instructions").innerHTML="Click the button or Close the page there's nothing else to do here ";
    document.getElementsByClassName("buttons")[0].style="hidden";
    document.getElementById("button").style.visibility="visible";
    document.getElementById("button").innerHTML="Click me to play again.";
    playerScore=0;
    computerScore=0;
    return playerScore, computerScore;
  }

  // if the computer has 5 points, display "you lose"
  if (computerScore===5){
    document.getElementById("header").innerHTML="YOU LOSE GO HOME!";
    document.getElementById("instructions").innerHTML="Click the button or Close the page there's nothing else to do here ";
    
    document.getElementsByClassName("buttons")[0].style="hidden";
    document.getElementById("button").style.visibility="visible";
    //document.getElementsById("button").innerHTML="Click me to play again."
    document.getElementById("button").innerHTML="Click me to play again.";
    playerScore=0;
    computerScore=0;
    return playerScore, computerScore;    
  }
}
