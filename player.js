class Player {
  contructor(name, token) {
    this.id = Date.now()
    this.name = name;
    this.token = token;
    this.wins = 0;
  }
  saveWinsToStorage() {
    var id = this.id;
    var saveUserInputs = JSON.stringify(this)
    localStorage.setItem(`${id}`, saveUserInputs)
  }

  retrieveWinsFromStorage() {
    JSON.parse
  }

  takeTurn(piece) {

  }
}
