class Player {
 constructor(name, token, humanScore) {
   this.name = name
   this.token = token
   this.wins = humanScore
 }
  humanPlay(choice) {
    var playerSelection = choice;
    var computerSelection = computerPlay();
    var result = newGame1.playRound(playerSelection, computerSelection);
     newGame1.computeScore(result);
 };
}
