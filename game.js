class Game {
  constructor() {
    this.user = new Player('Human', 'assets/exercise.png');
    this.computer  = new Player('Death', 'assets/Death.svg')
    this.winner;
    this.classicPieces = ['rock','paper', 'scissors']
    this.deathPieces = ['rock','paper', 'scissors', 'death', 'robots']
  }

    checkForWin() {
      if (this.user.weapon === 'rock' && this.computer.weapon === 'scissors' || this.computer.weapon === 'death') {
        this.winner = this.user.name
        this.user.updateWins()
        return `${this.winner} Wins!`
      } else if (this.user.weapon === 'rock' && this.computer.weapon === 'paper' || this.computer.weapon === 'robots') {
        this.winner = this.computer.name
        this.computer.updateWins()
        return `${this.winner} Wins!`
      }

      if (this.user.weapon === 'paper' && this.computer.weapon === 'rock' || this.computer.weapon === 'robots') {
        this.winner = this.user.name
        this.user.updateWins()
        return `${this.winner} Wins!`
      } else if (this.user.weapon === 'paper' && this.computer.weapon === 'scissors' || this.computer.weapon === 'death') {
        this.winner = this.computer.name
        this.computer.updateWins()
        return `${this.winner} Wins!`
      }

      if (this.user.weapon === 'scissors' && this.computer.weapon === 'paper' || this.computer.weapon === 'death') {
        this.winner = this.user.name
        this.user.updateWins()
        return `${this.winner} Wins!`
      } else if (this.user.weapon === 'scissors' && this.computer.weapon === 'rock' || this.computer.weapon === 'robots') {
        this.winner = this.computer.name
        this.computer.updateWins()
        return `${this.winner} Wins!`
      }

      if (this.user.weapon === 'death' && this.computer.weapon === 'paper' || this.computer.weapon === 'robots') {
        this.winner = this.user.name
        this.user.updateWins()
        return `${this.winner} Wins!`
      } else if (this.user.weapon === 'death' && this.computer.weapon === 'rock' || this.computer.weapon === 'scissors') {
        this.winner = this.computer.name
        this.computer.updateWins()
        return `${this.winner} Wins!`
      }

      if (this.user.weapon === 'robots' && this.computer.weapon === 'scissors' || this.computer.weapon === 'rock') {
        this.winner = this.user.name
        this.user.updateWins()
        return `${this.winner} Wins!`
      } else if (this.user.weapon === 'robots' && this.computer.weapon === 'death' || this.computer.weapon === 'paper') {
        this.winner = this.computer.name
        this.computer.updateWins()
        return `${this.winner} Wins!`
      }
    }

    //a way to reset the games board to begin a new game


}
