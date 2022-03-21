class Player {
 constructor(name, token, humanScore) {
   this.name = name
   this.token = token
   this.wins = humanScore
 }
  humanPlay(choice) {
    let playerSelection = choice;
    let computerSelection = computerPlay();
    let result = newGame1.playRound(playerSelection, computerSelection);
     newGame1.computeScore(result);
 };
}
