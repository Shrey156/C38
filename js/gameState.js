class Gamestate{
constructor(){

}
//this function is for reading from database
getState(){
var gameStateRef = database.ref('gameState')
gameStateRef.on("value",function(data){
    gameState = data.val();
})
}
//getState is updated by update function
update(state){
database.ref('/').update({
    gameState:state
});
}

async start(){
if(gameState===0){
player = new Player();

var playerCountRef=await database.ref('playerCount').once("value");

if(playerCountRef.exsists){
playerCount = playerCountRef.val();
player.getCount();
}

form = new Form();
form.display();
}  
}

play(){
    form.hide();
    text("Game Start",200,250);
}

}

