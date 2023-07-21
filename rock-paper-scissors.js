var computerChoice="blank";
var playerScore=0;
var computerScore=0;

document.getElementById("button").addEventListener("click", (e)=> {
	document.getElementById("button").style.visibility="hidden";
  document.getElementsByClassName("buttons")[0].style.visibility="visible";
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
var lightningImage=document.getElementById('lightning');
var computerImage=document.getElementById("computer-image");
var playerImage="";




document.getElementById("rock").addEventListener("click", ()=> {
	
  window.requestAnimationFrame(function() {
    lightningImage.classList.add('lightning')
  });

  lightningImage.classList.remove('lightning');
  
  
  playerMove("rock");
  computerMove();
  playerImage= rockImage;
  compareResults();
  });
document.getElementById("paper").onclick=()=>{
	playerMove("paper");
  
  window.requestAnimationFrame(function() {
    lightningImage.classList.add('lightning');
    });
    
  lightningImage.classList.remove('lightning');
 
 	computerMove();
  playerImage=paperImage;
	compareResults();
  }
document.getElementById("scissors").onclick=()=>{

  window.requestAnimationFrame(function() {
    lightningImage.classList.add('lightning');
  });
  
  lightningImage.classList.remove('lightning');
  
	playerMove("scissors");
	computerMove();
  playerImage=scissorsImage;
	compareResults();
  }
    
		
		

function playerMove(x) {
			console.log(`player entered ${x}`);
       playerChoice=x;
       return playerChoice;
       
		
		}

		//computer player randomly chooses rock paper or scissors
function computerMove() {
  let randomMove = Math.floor(Math.random() * 3);
  //below for debugging computer move animations
  //let randomMove=0; 
  if (randomMove === 0) {
    computerChoice = "rock";
    window.requestAnimationFrame(function() {
    	computerImage.setAttribute('src',"images/rock-sprite.png");
      computerImage.setAttribute("height",'200vh');
      computerImage.setAttribute('width','200vw');
  	});
    
  }
  else if (randomMove === 1) {
    computerChoice = "paper";
    window.requestAnimationFrame(function() {
    	computerImage.setAttribute('src',"images/paper-sprite.png");
      computerImage.setAttribute("height",'200vh');
      computerImage.setAttribute('width','200vw');
  	});
    
  }
  else if (randomMove === 2) {
    computerChoice = "scissors";
    window.requestAnimationFrame(function() {
    	computerImage.setAttribute('src',"images/scissors-sprite.png");
      computerImage.setAttribute("height",'200vh');
      computerImage.setAttribute('width','200vw');
  	});
    
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
    window.requestAnimationFrame(function() {
    	playerImage.classList.add('animated');
      
      computerImage.classList.add('computerAnimated');
      })
      
    playerImage.classList.remove('animated', 'player-loss-animation');
    paperImage.classList.remove('animated', 'player-loss-animation');
  	scissorsImage.classList.remove('animated', 'player-loss-animation');
  	rockImage.classList.remove('animated', 'player-loss-animation');
    
  	computerImage.classList.remove('computerAnimated','computer-loss-animation');
    computerImage.removeAttribute('src','width','height');
    
    
      }
  if (((playerChoice === paper) && (computerChoice===scissors))|| ((playerChoice=== rock) &&(computerChoice===paper)) ||((playerChoice===scissors)&&(computerChoice===rock))){
  	
   	preScore.textContent = "you Lose! Good Day Sir!";
    computerScore+=1
    score.textContent = `The score is player ${playerScore} computer ${computerScore}`;
    score.appendChild(preScore);
    window.requestAnimationFrame(function() {
    	playerImage.classList.add('player-loss-animation');
      
      computerImage.classList.add('computerAnimated');
    	computerImage.style.visibility="hidden";
      })
    playerImage.classList.remove('animated', 'player-loss-animation');
    paperImage.classList.remove('animated', 'player-loss-animation');
  	scissorsImage.classList.remove('animated', 'player-loss-animation');
  	rockImage.classList.remove('animated', 'player-loss-animation');
    
    computerImage.classList.remove('computerAnimated','computer-loss-animation');
    computerImage.removeAttribute('src','width','height');
		}
   	
  if  (((playerChoice === scissors) && (computerChoice===paper))|| ((playerChoice=== paper) &&(computerChoice===rock)) ||((playerChoice===rock)&&(computerChoice===scissors))){
  	
    preScore.textContent = "You've won the round!!!! huzzah! 1 point to you";
    playerScore+=1
    score.textContent=`The score is player ${playerScore} computer ${computerScore}`;
    score.appendChild(preScore);
    
    window.requestAnimationFrame(function() {
    	playerImage.classList.add('animated');
      
      computerImage.classList.add('computer-loss-animation');
    	computerImage.style.visibility="hidden";
      })
    playerImage.classList.remove('animated', 'player-loss-animation');
    paperImage.classList.remove('animated', 'player-loss-animation');
  	scissorsImage.classList.remove('animated', 'player-loss-animation');
  	rockImage.classList.remove('animated', 'player-loss-animation');
    
    computerImage.classList.remove('computer-loss-animation', "computerAnimated");
    computerImage.removeAttribute('src','width','height');
    
    }


    // if the player has 5 points, display "you win"
  if (playerScore===5){
    document.getElementById("header").innerHTML="YOU WON!!!!";
    document.getElementById("instructions").innerHTML="Click the button or Close the page there's nothing else to do here";
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
    document.getElementById("button").innerHTML="Click me to play again.";
    playerScore=0;
    computerScore=0;
    return playerScore, computerScore;    
  }
}
