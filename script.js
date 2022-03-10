
  //Initializez valorile 
let ecran=document.getElementById('Ecran');
let joc=document.getElementById('Joc');
let userSubmitButton=document.getElementById('startGame');
let gamePage=document.getElementById('gamePage');
let ecranNou=document.getElementById('ecranNou');
let butoane=document.getElementById('butoane');
let gameOver=document.getElementById('gameOver');
let altecran = document.getElementById('altecran');
let resetButton;
let redcount;
let greencount;
let blackcount;



// Buton Start Game
userSubmitButton.addEventListener('click', startJoc);

function startJoc() {
        //dupa apasarea butonului scot "meniul"
        ecran.remove();
        document.getElementById('startGame').remove();


        ecranNou.textContent='Alege o culoare!'
        // Creez cele 3 butoane
        let redButton= document.createElement('button');
        let greenButton= document.createElement('button');
        let blackButton= document.createElement('button');
        redButton.textContent="Red";
        redButton.className="btn btn-lg btn-danger";
        greenButton.textContent="Green";
        greenButton.className="btn btn-lg btn-success";
        blackButton.textContent="Black";
        blackButton.className="btn btn-lg btn-dark";
        butoane.appendChild(redButton);
        butoane.appendChild(greenButton);
        butoane.appendChild(blackButton);

        // Le adaug event
        redButton.addEventListener('click', (redButtonFunction) =>{redcount=1; phase1()});
        greenButton.addEventListener('click',(greenButtonFunction) =>{greencount=1; phase1()}); 
        blackButton.addEventListener('click',(blackButtonFunction) =>{blackcount=1; phase1()});
}

     function phase1(){
             let randomButtons = generateRandomMove();
             calculateWinner(randomButtons)
            }

     function generateRandomMove() {
             let availableButtons = ['red','green','black'];
             let randomNumber = Math.floor(Math.random() * availableButtons.length);
             let whatbutton = availableButtons[randomNumber];
            return whatbutton;}

     function calculateWinner(randomButton) {
            switch(randomButton){
                case 'red':
                    if(redcount===1)
                        {ecranNou.textContent="Ati Castigat!";
                         butoane.style.visibility='hidden';
                        joc.style.backgroundColor="green";
                         gameOverMenu();} 
                    else {ecranNou.textContent="Ati Pierdut!";
                         butoane.style.visibility='hidden'
                        joc.style.backgroundColor="red"
                         gameOverMenu();}
                case 'green':
                    if(greencount===1)  
                        {ecranNou.textContent="Ati Castigat!";
                        butoane.style.visibility='hidden';
                        joc.style.backgroundColor="green";
                        gameOverMenu(); } 
                        else {ecranNou.textContent="Ati Pierdut!";
                        butoane.style.visibility='hidden'
                        joc.style.backgroundColor="red"
                        gameOverMenu(); }
                case 'black':
                     if(blackcount===1)  
                        {ecranNou.textContent="Ati Castigat!";
                        butoane.style.visibility='hidden';
                        joc.style.backgroundColor="green";
                        gameOverMenu(); } 
                        else {ecranNou.textContent="Ati Pierdut!";
                        butoane.style.visibility='hidden'
                        joc.style.backgroundColor="red"
                        gameOverMenu();}    
                }
            }


function gameOverMenu(){
    // Creez buton restart joc
    resetButton=document.createElement('button');
    resetButton.textContent="Restart Joc";
    resetButton.className="btn btn-lg btn-primary";
    gameOver.appendChild(resetButton);
    // Buton reset joc
    resetButton.addEventListener('click', resetJoc)
}
function resetJoc(){
    ecranNou.textContent="Alege o culoare!"
    joc.style.backgroundColor="white"
    butoane.style.visibility='visible'
    gameOver.visibility='hidden'
    resetButton.remove();
    }
  