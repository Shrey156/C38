var database,gameState,player,form,game,playerCount;
gameState = 0;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Gamestate();
    game.getState();
    game.start();
    
}

function draw(){
 if(playerCount===4){
game.update(1);
 }
 if(gameState===1){
    clear();
    game.play();
 }
    
}

