


class Dog {
    constructor(){
        this.spriteWidth = 220;
        this.spriteHeight = 180;
        this.width = this.spriteWidth/5;
        this.height = this.spriteHeight/5;
        this.x = canvas.width/24 - this.width/2;
        this.y = canvas.height - this.height - 140;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
        this.playerState= 'idle';
    }
    run(){ 
        this.playerState = 'run';
        gameSpeed = 15;
    } 
    fly(){
        this.playerState = 'fly';
        this.y = 100;
        gameSpeed = 50;
     }  
    idle(){
        this.playerState = 'idle';
        gameSpeed = 0;
        this.y = canvas.height - this.height - 140;
     }  
}
const dog = new Dog();