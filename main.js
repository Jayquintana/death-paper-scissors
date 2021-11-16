//global variables
var newGame = new Game();

// dom related

//sections
var gameSelection = document.querySelector('.game-selection-box');
var chooseFighterSection = document.querySelector('.choose-your-fighter');
var chooseYourGameSection = document.querySelector('.choose-your-game-section');
var pieces = document.querySelectorAll('.pieces')
var gameImages = document.querySelector('.game-images')

//titles
var chooseGameTitle = document.querySelector('.choose-game-title');
var humanWinsTitle = document.querySelector('.human-wins');
var deathTitle = document.querySelector('.death-wins');
var drawTitle = document.querySelector('.its-a-draw')


//imgs
var deathAndRobotImg = document.querySelector('.death-robot-img')

//buttons
var classicGameButton = document.querySelector('.classic-game');
var deathGameButton = document.querySelector('.death-game');
var changeGameButton = document.querySelector('.change-game-box')

//event listeners
gameImages.addEventListener('click',createClassicGame )
chooseYourGameSection.addEventListener('click', chooseGame);
classicGameButton.addEventListener('click',goToClassicGame);
deathGameButton.addEventListener('click',goToDeathGame);
changeGameButton.addEventListener('click', changeGame)


//reusable functions
function hideElement(element) {
  element.classList.add('hidden');
}

function showElement(element) {
  element.classList.remove('hidden');
}

//hide button and show game
function goToClassicGame() {
  hideElement(gameSelection);
  hideElement(deathAndRobotImg);
  showElement(chooseFighterSection)
  hideElement(changeGameButton)
  chooseGameTitle.innerText = 'Choose Your Fighter!'
}

function goToDeathGame() {
  hideElement(gameSelection)
  showElement(chooseFighterSection)
  chooseGameTitle.innerText = 'Choose Your Fighter!'
}

//game selection
function chooseGame() {
  if (event.target.id === 'classic') {
    goToClassicGame()
    showElement(changeGameButton)
  }  else if (event.target.id === 'death') {
    goToDeathGame()
    showElement(changeGameButton)
  }
}

function changeGame() {
  showElement(gameSelection);
  showElement(deathAndRobotImg);
  hideElement(chooseFighterSection)
  chooseGameTitle.innerText = 'Choose Your Game!'
}


//choose fighter
function createClassicGame() {
  newGame.startClassicGame(event.target.id)
  newGame.checkForWin()
  console.log(newGame);
  humanWinsTitle.innerText = `Wins: ${newGame.user.wins}`
  deathTitle.innerText = `Wins: ${newGame.computer.wins}`
  chooseGameTitle.innerText = `${newGame.winner}`
  showGamePieces(newGame.user.weapon, newGame.computer.weapon);
  setTimeout(resetGame, 3000)
}

function resetGame() {
  chooseGameTitle.innerText = 'Choose Your Fighter!'
  hideGamePieces()
  hideElement(drawTitle);

}

function showGamePieces(humanWeapon, computerWeapon) {
  for (var i = 0; i < pieces.length; i++) {
    hideElement(pieces[i]);
    if (humanWeapon === pieces[i].id || computerWeapon === pieces[i].id) {
      showElement(pieces[i]);
    } else if (humanWeapon === computerWeapon) {
      showElement(drawTitle)
    }
  }
}

function hideGamePieces() {
  for (var i = 0; i < pieces.length; i++) {
    showElement(pieces[i]);
  }
}

function chooseDeathFighter() {
  newGame.startDeathGame(event.target.id)
  newGame.checkForWin()
}

function displayUserIcon() {
var displayIcon = document.querySelectorAll('.display-choice')
showElement(element)
setTimeout(hideElement(element), 5000)
// need to display the player icon with accosiated piece selected
// need a way to display the user and the computers choice to compare them and only for a split second
//
}




// need to do
// toggle pieces within a win or a Draw
//update game wins when a game is played
// set timeout for the game after a game is played
//incorperate reset game
//find a way to choose game selection
//create a button that allows the user to go choose another game
