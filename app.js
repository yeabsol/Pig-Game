var scores=[0,0];
var roundScore = 0;
var activePlayer=0;

newGame();

function newGame(){
    scores[0]=0;
    scores[1]=0;
    roundScore = 0;
    activePlayer=0;

    document.querySelector('img.dice').src='dice-'+Math.floor(Math.random()*6+1)+'.png';

    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

//Roll Dice Button Click
document.querySelector('.btn-roll').addEventListener('click',function (){

    var diceValue = Math.floor(Math.random()*6+1);

    var diceImg=document.querySelector('img.dice');
    diceImg.style.display='block';
    diceImg.src= 'dice-'+diceValue+'.png';

    if(diceValue!==1){
        roundScore+=diceValue;
        document.querySelector('#current-'+activePlayer).textContent = roundScore; 
    }
    else{

         activePlayer===0 ? activePlayer=1 : activePlayer=0;      
         roundScore=0;
         
         document.getElementById('current-0').textContent = '0';
         document.getElementById('current-1').textContent = '0';

         document.querySelector('.player-0-panel').classList.toggle('active');
         document.querySelector('.player-1-panel').classList.toggle('active');

         document.querySelector('img.dice').style.display='none';

    }
})

//Hold Button Click
document.querySelector('.btn-hold').addEventListener('click', function(){

    scores[activePlayer]=scores[activePlayer] + roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 100){
        alert('Player '+ (activePlayer+1) +' Wins');
        newGame();
        
    }
    else{
        activePlayer===0 ? activePlayer=1 : activePlayer=0;
         roundScore=0;
         
         document.getElementById('current-0').textContent = '0';
         document.getElementById('current-1').textContent = '0';

         document.querySelector('.player-0-panel').classList.toggle('active');
         document.querySelector('.player-1-panel').classList.toggle('active');

         document.querySelector('img.dice').style.display='none';
    }


})

//NEW GAME button click
document.querySelector('.btn-new').addEventListener('click', function(){
    newGame();
})


















