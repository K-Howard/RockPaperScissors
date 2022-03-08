class Player {
 constructor(name, token, humanScore) {
   this.name = human
   this.token = token
   this.wins = humanScore
 }
  humanPlay(choice) {
    var playerSelection = choice;
    var computerSelection = computerPlay();
    var result = playRound(playerSelection, computerSelection);
     computeScore(result);
 };
}
