//play a game of rock, paper, scissors where computer chooses randomly.
function RPS() {
	var rpsChoice = ["Rock", "Paper", "Scissors"];
	var AIchoice = rpsChoice[Math.floor(Math.random()*3)];
	var outcome = 0;
    uChoice="";
     User();
    //function for user choice
    //deciding the outcome, 1 = user victory, 0 = tie, -1 = user loss
    switch(uChoice){
      case "ROCK":
        if (AIchoice=="Rock"){
        	outcome+=0;
        } else if(AIchoice=="Paper"){
        	outcome -=1;
        } else{
        	outcome +=1;
        }
        break;
      case "Scissors":
      	if (AIchoice=="Rock"){
        	outcome-=1;
        } else if(AIchoice=="Paper"){
        	outcome +=1;
        } else{
        	outcome +=0;
        }
        break;
      case "Paper":
      	if (AIchoice=="Rock"){
        	outcome+=1;
        } else if(AIchoice=="Paper"){
        	outcome +=0;
        } else{
        	outcome -=1;
        }
        break;
    }

  	if (outcome == 1) {
  		alert( "Computer Chose "+ AIchoice + " You won!");
  	} else if (outcome === 0) {
  		alert( "Computer Chose "+ AIchoice + " Tie!");
  	} else {
  		alert( "Computer Chose "+ AIchoice + " You Lost!");
  	}

  }
  function User() {
	var input = prompt("Choose your weapon!", "Rock,Paper,Scissors");
	//allow for variations in uppercase/lowercase
	var userChoice = input.toUpperCase();
		if (userChoice != "ROCK" && userChoice!= "PAPER"&& userChoice != "SCISSORS") {
          alert("Incorrect choice please try again");
          return User();
        }
        else {
         uChoice=userChoice;
        }
    }