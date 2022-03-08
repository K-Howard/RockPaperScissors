var newGame1 = new Game()
var computerScore = 0;
var humanScore = 0;
var playChoice = '';
var myArray = ['rock', 'paper', 'scissors'];
var fiveArray = ['rock', 'paper', 'scissors', 'turkey', 'lizard']
var play5 = document.querySelector(".pick5-button")
var rocks = document.querySelector(".rock")
var papers = document.querySelector(".paper")
var scissors = document.querySelector(".scissors")
var turkeys = document.querySelector(".turkey")
var lizards = document.querySelector(".lizard")

document.getElementById("humanScorePoints").innerHTML = "0";
document.getElementById("robotScorePoints").innerHTML = "0";

rocks.addEventListener("click", function() {
  pick('rock')
});

papers.addEventListener("click", function() {
 pick('paper')
});

scissors.addEventListener("click", function() {
  pick('scissors')
});

turkey.addEventListener("click", function() {
  pick('turkey')
});

lizard.addEventListener("click", function() {
  pick('lizard')
});

play5.addEventListener("click", function() {
  play5option()
  play5turkeyLizard()
});

function play5turkeyLizard() {
   if (document.getElementById("paragraph").innerText === "ROCK PAPER SCISSORS") {
  document.getElementById("paragraph").innerText = "ROCK PAPER SCISSORS TURKEY LIZARDS"

  } else {
  document.getElementById("paragraph").innerText = "ROCK PAPER SCISSORS"
 }
}

function play5option() {
  var t = document.getElementById("turkey");
  var l = document.getElementById("lizard");
  t.hidden = !t.hidden
  l.hidden = !l.hidden

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
};

function computerPlayFive() {
    return fiveArray[~~(Math.random() * fivearray.length)];
};

function humanPlay(choice) {
    var playerSelection = choice;
    var computerSelection = computerPlay();
    var result = newGame1.playRound(playerSelection, computerSelection);
    newGame1.computeScore(result);
};

// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === 'rock' && computerSelection === 'scissors') {
//         document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
//         return ("win")
//
//     } else if (playerSelection === 'paper' && computerSelection === 'rock') {
//         document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
//         return ("win")
//
//     } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//         document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
//         return ("win")
//
//     } else if (playerSelection === computerSelection) {
//         document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! Tie game!"
//         return ("tie")
//
//     } else if (playerSelection === 'scissors' && computerSelection === 'turkey') {
//           document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You lose!"
//           return ("win")
//
//     } else if (playerSelection === 'paper' && computerSelection === 'turkey') {
//           document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You lose!"
//           return ("win")
//
//     } else if (playerSelection === 'rock' && computerSelection === 'lizard') {
//           document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You lose!"
//           return ("win")
//
//     } else if (playerSelection === 'turkey' && computerSelection === 'lizard') {
//           document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You lose!"
//           return ("win")
//
//     } else if (playerSelection === 'turkey' && computerSelection === 'rock') {
//           document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You lose!"
//           return ("win")
//
//     } else if (playerSelection === 'lizard' && computerSelection === 'paper') {
//           document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You lose!"
//           return ("win")
//
//     } else if (playerSelection === 'lizard' && computerSelection === 'scissors') {
//           document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You lose!"
//           return ("win")
//
//     } else {
//         document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You lose!"
//         return ("lose")
//
//     }
// };
