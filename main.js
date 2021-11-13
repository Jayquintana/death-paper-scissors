
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
window.addEventListener('click', findTarget)
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

function findTarget(event) {
  console.log(event.target.id);
}
