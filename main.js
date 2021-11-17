//global variables
var newGame = new Game();

//sections
var gameSelection = document.querySelector('.game-selection-box');
var chooseFighterSection = document.querySelector('.choose-your-fighter');
var chooseYourGameSection = document.querySelector('.choose-your-game-section');
var pieces = document.querySelectorAll('.pieces');
var allGamePieces = document.querySelector('.game-images');
var classicGamePieces = document.querySelector('.rock-paper-scissors-img');
//titles
var chooseGameTitle = document.querySelector('.choose-game-title');
var humanWinsTitle = document.querySelector('.human-wins');
var deathTitle = document.querySelector('.death-wins');
var drawTitle = document.querySelector('.its-a-draw');
//imgs
var deathAndRobotImg = document.querySelector('.death-robot-img');
//buttons
var classicGameButton = document.querySelector('.classic-game');
var deathGameButton = document.querySelector('.death-game');
var changeGameButton = document.querySelector('.change-game-box');

allGamePieces.addEventListener('click', playDeathGame)
classicGamePieces.addEventListener('click', playClassicGame)
chooseYourGameSection.addEventListener('click', chooseGame);
classicGameButton.addEventListener('click', goToClassicGame);
deathGameButton.addEventListener('click', goToDeathGame);
changeGameButton.addEventListener('click', changeGame)

function hideElement(element) {
  element.classList.add('hidden');
}

function showElement(element) {
  element.classList.remove('hidden');
}

function goToClassicGame() {
  hideElement(gameSelection);
  hideElement(deathAndRobotImg);
  showElement(chooseFighterSection);
  hideElement(changeGameButton);
  chooseGameTitle.innerText = 'Choose Your Fighter!'
}

function goToDeathGame() {
  hideElement(gameSelection);
  showElement(chooseFighterSection);
  chooseGameTitle.innerText = 'Choose Your Fighter!'
}

function chooseGame() {
  if (event.target.id === 'classic') {
    goToClassicGame();
    showElement(changeGameButton);
    newGame.chooseGameStyle('classic');
  }  else if (event.target.id === 'death') {
    goToDeathGame();
    showElement(changeGameButton);
    newGame.chooseGameStyle('death');
  }
}

function changeGame() {
  showElement(gameSelection);
  showElement(deathAndRobotImg);
  hideElement(chooseFighterSection);
  chooseGameTitle.innerText = 'Choose Your Game!'
}

function playClassicGame() {
  if (newGame.style === 'classic') {
  newGame.startClassicGame(event.target.id)
  newGame.checkForWin();
  addWins();
  chooseGameTitle.innerText = `${newGame.winner}`
  showGamePieces(newGame.user.weapon, newGame.computer.weapon);
  setTimeout(resetGame, 2000);
  }
}

function playDeathGame() {
  if (newGame.style === 'death') {
    newGame.startDeathGame(event.target.id)
    newGame.checkForWin();
    addWins();
    console.log(newGame.winner);
    chooseGameTitle.innerText = `${newGame.winner}`
    showGamePieces(newGame.user.weapon, newGame.computer.weapon);
    setTimeout(resetGame, 2000);
  }
}

function addWins() {
  if (newGame.winner === 'Human Wins!') {
    newGame.user.updateWins();
    humanWinsTitle.innerText = `Wins: ${newGame.user.wins}`;
  } else if (newGame.winner === 'Death Wins!') {
      newGame.computer.updateWins();
      deathTitle.innerText = `Wins: ${newGame.computer.wins}`;
  }
}

function resetGame() {
  chooseGameTitle.innerText = 'Choose Your Fighter!';
  hideGamePieces();
  hideElement(drawTitle);
  allGamePieces.classList.remove('pointer-none');
}

function showGamePieces(humanWeapon, computerWeapon) {
  for (var i = 0; i < pieces.length; i++) {
    hideElement(pieces[i]);
    allGamePieces.classList.add('pointer-none');
    if (humanWeapon === pieces[i].id || computerWeapon === pieces[i].id) {
      showElement(pieces[i]);
    } else if (humanWeapon === computerWeapon) {
      showElement(drawTitle);
    }
  }
}

function hideGamePieces() {
  for (var i = 0; i < pieces.length; i++) {
    showElement(pieces[i]);
  }
}
