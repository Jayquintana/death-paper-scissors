class Game {
  constructor() {
    this.user = new Player('Human', 'assets/exercise.png');
    this.computer = new Player('Death', 'assets/Death.svg');
    this.winner;
    this.classicPieces = ['rock','paper', 'scissors'];
    this.deathPieces = ['rock','paper', 'scissors', 'death', 'robots'];
    this.style;
  }

    chooseGameStyle(gameStyle) {
      this.style = gameStyle
    }

    checkForWin() {
      if(this.user.weapon === this.computer.weapon) {
        return this.winner = 'Draw!'
      }

      if (this.user.weapon === 'rock' && this.computer.weapon === 'scissors' || this.computer.weapon === 'death') {
        this.winner = `${this.user.name} Wins!`
      } else if (this.user.weapon === 'rock' && this.computer.weapon === 'paper' || this.computer.weapon === 'robots') {
        this.winner = `${this.computer.name} Wins!`
      }

      if (this.user.weapon === 'paper' && this.computer.weapon === 'rock' || this.computer.weapon === 'robots') {
        this.winner = `${this.user.name} Wins!`
      } else if (this.user.weapon === 'paper' && this.computer.weapon === 'scissors' || this.computer.weapon === 'death') {
        this.winner = `${this.computer.name} Wins!`
      }

      if (this.user.weapon === 'scissors' && this.computer.weapon === 'paper' || this.computer.weapon === 'death') {
        this.winner = `${this.user.name} Wins!`
      } else if (this.user.weapon === 'scissors' && this.computer.weapon === 'rock' || this.computer.weapon === 'robots') {
        this.winner = `${this.computer.name} Wins!`
      }

      if (this.user.weapon === 'death' && this.computer.weapon === 'paper' || this.computer.weapon === 'robots') {
        this.winner = `${this.user.name} Wins!`
      } else if (this.user.weapon === 'death' && this.computer.weapon === 'rock' || this.computer.weapon === 'scissors') {
        this.winner = `${this.computer.name} Wins!`
      }

      if (this.user.weapon === 'robots' && this.computer.weapon === 'scissors' || this.computer.weapon === 'rock') {
        this.winner = `${this.user.name} Wins!`

      } else if (this.user.weapon === 'robots' && this.computer.weapon === 'death' || this.computer.weapon === 'paper') {
        this.winner = `${this.computer.name} Wins!`
      }
    }

    startClassicGame(weapon) {
      this.user.takeTurn(weapon);
      this.computer.takeTurn(weapon, this.classicPieces[this.computer.randomPiece(this.classicPieces)]);
    }

    startDeathGame(weapon) {
      this.user.takeTurn(weapon);
      this.computer.takeTurn(weapon, this.deathPieces[this.computer.randomPiece(this.deathPieces)]);
    }

    resetGame() {
      this.user = new Player('Human', 'assets/exercise.png');
      this.computer = new Player('Death', 'assets/Death.svg');
      this.winner = null;

    }
}
