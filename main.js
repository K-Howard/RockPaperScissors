var computerScore = 0;
var humanScore = 0;
var playChoice = '';
var myArray = ['rock', 'paper', 'scissors'];
var fiveArray = ['rock', 'paper', 'scissors', 'turkey', 'lizard']
var rocks = document.getElementById("rock");
var papers = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var turkey = document.getElementById("turkey");
var lizard = document.getElementById("lizard");
var play5 = document.getElementById("playFive");

document.getElementById("humanScorePoints").innerHTML = "0";
document.getElementById("robotScorePoints").innerHTML = "0";

rocks.addEventListener('click', function() {
  pick('rock')
});

papers.addEventListener('click', function() {
 pick('paper')
});

scissors.addEventListener('click', function() {
  pick('scissors')
});

turkey.addEventListener('click', function() {
  pick('turkey')
});

lizard.addEventListener('click', function() {
  pick('lizard')
});

play5.addEventListener('click', function() {
  play5option()
});

function play5option() {
  var t = document.getElementById("turkey");
  var l = document.getElementById("lizard");
  if (t.style.display === "none") {
    t.style.display = "block";
  } else {
    t.style.display = "none";
  }
  if (l.style.display === "none") {
    l.style.display = "block";
  } else {
    l.style.display = "none";
  }
}

function pick(choice) {
  if (choice === 'rock') {
              humanPlay(choice);
              return;
          }
          else if (choice === 'paper') {
              humanPlay(choice);
              return;
          }
          else if (choice === 'scissors') {
              humanPlay(choice);
              return;
          }
          else if (choice === 'turkey') {
             humanPlay(choice)
             return;
          }
          else if (choice === 'lizard') {
             humanPlay(playChoice)
             return;
          } else {
              return;
  };
    document.getElementById("paragraph").innerHTML = "You picked " + choice + "!";
};

function computerPlay() {
    return myArray[~~(Math.random() * myArray.length)];
    // return Math.floor(Math.random() * myArray.length);
};

function computerPlayFive() {
    return fiveArray[~~(Math.random() * fivearray.length)];
};

function humanPlay(choice) {
    var playerSelection = choice;
    var computerSelection = computerPlay();
    var result = playRound(playerSelection, computerSelection);
    computeScore(result);
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
        return ("win")

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
        return ("win")

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
        return ("win")

    } else if (playerSelection === computerSelection) {
        document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! Tie game!"
        return ("tie")

    } else {
        document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You lose!"
        return ("lose")
    }
};
//  Here is the function for the 5 round play and it needs a lot more work with if else add more above

//
//     if (playerSelection === 'rock' && computerSelection === 'scissors') {
//         document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
//         return ("win")
//
//     } else if (playerSelection === 'paper' && computerSelection === 'rock') {
//         document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
//
// };
