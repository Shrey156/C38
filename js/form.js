class Form{
    constructor(){
        this.title =createElement('h2');
        this.input =createInput("Name");
        this.button = createButton('Play');
        this.greeting =createElement('h3');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        
        this.title.html("Multiplayer Car Racing Game");
        this.title.position(400,100);
    
        this.input.position(400,200);
      
        this.button.position(400,250);

        this.button.mousePressed(()=>{
        player.name =this.input.value();
        this.input.hide();
        this.button.hide();

        playerCount = playerCount + 1;
        player.update(player.name);
        player.updateCount(playerCount);
           
        this.greeting.html("Hello"+ player.name);
        this.greeting.position(400,400);

        });
    }
}