class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.weapon;
  }
  saveWinsToStorage() {
    var saveUserInputs = JSON.stringify(wins)
    localStorage.setItem(this.name, saveUserInputs)
  }

  retrieveWinsFromStorage() {
    var getUserInput = localStorage.getItem(this.name);
    var parseData = JSON.parse(getUserInput)
    return parseData
  }

  takeTurn(weapon, array) {
    if (this.name === 'Human') {
      this.weapon = weapon
    } else if (this.name === 'Death') {
      this.weapon = array
    }
  }

  randomPiece(array) {
    return Math.floor(Math.random() * array.length);
  }

  updateWins() {
    this.wins += 1;
  }
}
