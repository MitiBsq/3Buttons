//We start with creating the start button which starts the whole process of this game
const userSubmitButton = document.getElementById('startGame');
userSubmitButton.addEventListener('click', phase1);
//Getting the variables necessary for our global project
const screen = document.getElementById('screen');
const buttonsPlace = document.getElementById('buttonsPlace');
let redcount;
let greencount;
let blackcount;
//This is the phase where we create our game interface
function phase1() {
    document.getElementById('startGame').remove();
    screen.textContent = 'Alege o culoare!';
    // Creating the 3 buttons and adding events to them
    const redButton = document.createElement('button');
    const greenButton = document.createElement('button');
    const blackButton = document.createElement('button');
    redButton.textContent = "Red";
    redButton.className = "btn btn-lg btn-danger";
    greenButton.textContent = "Green";
    greenButton.className = "btn btn-lg btn-success";
    blackButton.textContent = "Black";
    blackButton.className = "btn btn-lg btn-dark";
    buttonsPlace.appendChild(redButton);
    buttonsPlace.appendChild(greenButton);
    buttonsPlace.appendChild(blackButton);
    redButton.addEventListener('click', (redButtonFunction) => { redcount = 1; phase2(); });
    greenButton.addEventListener('click', (greenButtonFunction) => { greencount = 1; phase2(); });
    blackButton.addEventListener('click', (blackButtonFunction) => { blackcount = 1; phase2(); });
}
//In this phase we generate our winning button and see if the player choose it 
function phase2() {
    const randomButton = generateRandomButton();
    calculateWinner(randomButton);
}
//Function for generating the random "button"
function generateRandomButton() {
    const availableButtons = ['red', 'green', 'black'];
    const randomNumber = Math.floor(Math.random() * availableButtons.length);
    return availableButtons[randomNumber];
}
//Function for verifying if the player choose correctly or not
const game = document.getElementById('game');
function calculateWinner(randomButton) {
    switch (randomButton) {
        case 'red':
            if (redcount === 1) {
                screen.textContent = "Ati Castigat!";
                buttonsPlace.style.visibility = 'hidden';
                game.style.backgroundColor = "green";
                phase3();
            }
            else {
                screen.textContent = "Ati Pierdut!";
                buttonsPlace.style.visibility = 'hidden';
                game.style.backgroundColor = "red";
                phase3();
            }
            break;
        case 'green':
            if (greencount === 1) {
                screen.textContent = "Ati Castigat!";
                buttonsPlace.style.visibility = 'hidden';
                game.style.backgroundColor = "green";
                phase3();
            }
            else {
                screen.textContent = "Ati Pierdut!";
                buttonsPlace.style.visibility = 'hidden';
                game.style.backgroundColor = "red";
                phase3();
            }
            break;
        case 'black':
            if (blackcount === 1) {
                screen.textContent = "Ati Castigat!";
                buttonsPlace.style.visibility = 'hidden';
                game.style.backgroundColor = "green";
                phase3();
            }
            else {
                screen.textContent = "Ati Pierdut!";
                buttonsPlace.style.visibility = 'hidden';
                game.style.backgroundColor = "red";
                phase3();
            }
            break;
    }
}
//The last phase -We create the restarting function
let restartButton;
function phase3() {
    //Creating the restart button
    const gameOver = document.getElementById('gameOver');
    restartButton = document.createElement('button');
    restartButton.textContent = "Restart game";
    restartButton.className = "btn btn-lg btn-primary";
    gameOver.appendChild(restartButton);
    restartButton.addEventListener('click', resetGame);
}
//Function in which we return to the previous stage for 
function resetGame() {
    screen.textContent = "Alege o culoare!";
    game.style.backgroundColor = "white";
    buttonsPlace.style.visibility = 'visible';
    restartButton.remove();
    redcount = 0;
    greencount = 0;
    blackcount = 0;
}
