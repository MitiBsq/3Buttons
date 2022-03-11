
  //Initializez valorile 
let ecran=document.getElementById('Ecran');
let joc=document.getElementById('Joc');
let userSubmitButton=document.getElementById('startGame');
let gamePage=document.getElementById('gamePage');
let ecranNou=document.getElementById('ecranNou');
let butoane=document.getElementById('butoane');
let gameOver=document.getElementById('gameOver');

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

        //Creez noua interfata
        ecranNou.textContent='Alege o culoare!';
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
        redButton.addEventListener('click', (redButtonFunction) =>    {redcount=1; phase1();});
        greenButton.addEventListener('click',(greenButtonFunction) =>{greencount=1; phase1();});
        blackButton.addEventListener('click',(blackButtonFunction) =>{blackcount=1; phase1();});
}

        //Prima parte a jocului-alegerea butonului si decizia daca ai castigat
     function phase1(){
             let randomButtons = generateRandomMove();
             calculateWinner(randomButtons);
             
            }
            //Generez o culoare pentru butonul castigator
     function generateRandomMove() {
             let availableButtons = ['red','green','black'];
             let randomNumber = Math.floor(Math.random() * availableButtons.length);
             let whatbutton = availableButtons[randomNumber];
            return whatbutton;}
            //Verificam daca butonul ales este cel castigator
     function calculateWinner(randomButton) {
            switch(randomButton){
                case 'red':
                    if(redcount===1)
                        {ecranNou.textContent="Ati Castigat!";
                         butoane.style.visibility='hidden';
                         joc.style.backgroundColor="green";
                         phase2();} 
                    else {ecranNou.textContent="Ati Pierdut!";
                         butoane.style.visibility='hidden';
                         joc.style.backgroundColor="red";
                         phase2();}
                  break;       
                case 'green':
                    if(greencount===1)  
                        {ecranNou.textContent="Ati Castigat!";
                        butoane.style.visibility='hidden';
                        joc.style.backgroundColor="green";
                        phase2(); } 
                        else {ecranNou.textContent="Ati Pierdut!";
                        butoane.style.visibility='hidden';
                        joc.style.backgroundColor="red";
                        phase2(); }
                        break;      
                case 'black':
                     if(blackcount===1)  
                        {ecranNou.textContent="Ati Castigat!";
                        butoane.style.visibility='hidden';
                        joc.style.backgroundColor="green";
                        phase2(); } 
                        else {ecranNou.textContent="Ati Pierdut!";
                        butoane.style.visibility='hidden';
                        joc.style.backgroundColor="red";
                        phase2();}   
                        break;      
                }
            }


            
            //Partea a doua -- partea de resetare joc
function phase2(){
    // Creez buton restart joc
    resetButton=document.createElement('button');
    resetButton.textContent="Restart Joc";
    resetButton.className="btn btn-lg btn-primary";
    gameOver.appendChild(resetButton);
    // ii adaug un event
    resetButton.addEventListener('click', resetJoc);
}
//faza de revenire la partea 1
function resetJoc(){
    ecranNou.textContent="Alege o culoare!";
    joc.style.backgroundColor="white";
    butoane.style.visibility='visible';
    resetButton.remove();
    redcount=0;
    greencount=0;
    blackcount=0;
    }
  