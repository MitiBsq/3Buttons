
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


function startJoc() {
        //dupa apasarea butoanelor scot "meniul"
        ecran.remove();
        document.getElementById('startGame').remove();


        // Creez cele 3 butoane
        ecranNou.textContent='Alege o culoare!'
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
        redButton.addEventListener('click', redButtonFunction);
        greenButton.addEventListener('click', greenButtonFunction);
        blackButton.addEventListener('click', blackButtonFunction);

        // Creez functiile 
        function redButtonFunction() {
            altecran.textContent="Gresit "
            
            butoane.style.visibility='hidden'
            joc.style.backgroundColor="red"
            
            gameOverMenu();
        }
        function greenButtonFunction() {
            altecran.textContent="Felicitare ati castigat!"
            butoane.style.visibility='hidden'
            joc.style.backgroundColor="green"
            
            
            gameOverMenu();
        }
        function blackButtonFunction() {
            altecran.textContent="Mai incearca!"
            butoane.style.visibility='hidden'
            joc.style.backgroundColor="red"
            
            gameOverMenu();
        }
    
}
// Buton Start Game
userSubmitButton.addEventListener('click', startJoc);


function gameOverMenu(){
    ecranNou.style.display='none'
    
    // Creez buton restart joc
    resetButton=document.createElement('button');
    resetButton.textContent="Restart Joc";
    resetButton.className="btn btn-lg btn-primary";
    gameOver.appendChild(resetButton);
       
    // functie reset joc
 function resetJoc(){
        ecranNou.style.display='initial'
        joc.style.backgroundColor="white"
        altecran.textContent=''
        butoane.style.visibility='visible'
        resetButton.remove();
        }

        // Buton reset joc
     resetButton.addEventListener('click', resetJoc)
}