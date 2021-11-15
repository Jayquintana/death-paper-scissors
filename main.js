//global variables
var newGame = new Game();

// dom related
var gameSelection = document.querySelector('.game-selection-box');
var chooseFighterSection = document.querySelector('.choose-your-fighter')

//titles
var chooseGameTitle = document.querySelector('.choose-game-title')

//imgs
var deathAndRobotImg = document.querySelector('.death-robot-img')

//buttons
var classicGameButton = document.querySelector('.classic-game');
var deathGameButton = document.querySelector('.death-game')

//event listeners
chooseFighterSection.addEventListener('click', chooseFighter)
classicGameButton.addEventListener('click',createClassicGame)
deathGameButton.addEventListener('click',createDeathGame)

function hideElement(element) {
  element.classList.add('hidden');
}

function showElement(element) {
  element.classList.remove('hidden');
}

function createClassicGame() {
  hideElement(gameSelection);
  hideElement(deathAndRobotImg);
  showElement(chooseFighterSection)
  chooseGameTitle.innerText = 'Choose Your Fighter!'
}

function createDeathGame() {
  hideElement(gameSelection)
  showElement(chooseFighterSection)
}

function targetElement(element, fireFunction) {
  if (event.target.id === element) {
      fireFunction
  }
}

function chooseFighter() {
  newGame.startClassicGame(event.target.id)
  newGame.checkForWin()
  console.log(newGame.computer.weapon);


}

function displayUserIcon() {
showElement(element)
setTimeout(hideElement(element), 5000)
// need to display the player icon with accosiated piece selected
// need a way to display the user and the computers choice to compare them and only for a split second
//
}

function displayWinner() {
  hideElement(rock)
  hideElement(paper)
  hideElement(scissors)

}
