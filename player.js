class Player {
  contructor(name, token) {
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



  takeTurn(playerChoice, array) {
    if (this.name === 'death') {
      this.weapon = getRandomIndex(array)
    } else {
      this.weapon = playerChoice;
    }
  }

 getRandomIndex(array) {
 return Math.floor(Math.random() * array.length);
  }

  updateWins() {
    this.wins++
  }
}
