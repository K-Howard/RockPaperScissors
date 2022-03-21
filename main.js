let newGame1 = new Game()
let newPlayer1 = new Player()
let computerScore = 0;
let humanScore = 0;
let playChoice = '';
let myArray = ['rock', 'paper', 'scissors'];
let fiveArray = ['rock', 'paper', 'scissors', 'turkey', 'lizard']
const play5 = document.querySelector(".pick5-button")
const rocks = document.querySelector(".rock")
const papers = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const turkeys = document.querySelector(".turkey")
const lizards = document.querySelector(".lizard")

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
            newPlayer1.humanPlay(choice);
            return;

        } else if (choice === 'paper') {
            newPlayer1.humanPlay(choice);
            return;

        } else if (choice === 'scissors') {
            newPlayer1.humanPlay(choice);
            return;

        } else if (choice === 'turkey') {
            newPlayer1.humanPlay(choice)
            return;

        } else if (choice === 'lizard') {
            newPlayer1.humanPlay(playChoice)
            return;
        } else {
              return;
  };
    document.getElementById("paragraph").innerHTML = "You picked " + choice + "!";
};

function computerPlay() {
  if (document.getElementById("paragraph").innerText === "ROCK PAPER SCISSORS") {
  return myArray[~~(Math.random() * myArray.length)];

 } else {
   return fiveArray[~~(Math.random() * fiveArray.length)];
 };
}
