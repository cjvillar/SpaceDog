class Dog {
    constructor(){
        this.image = new Image();
        this.image.src = 'assets/test_dog_sprite2.png';
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
        this.y = 30
        this.x = 10
        gameSpeed = 50;
     }  
    idle(){
        this.playerState = 'idle';
        gameSpeed = 0;
        this.y = canvas.height - this.height - 140;
        this.x = canvas.width/24 - this.width/2;
     }
    draw(){
        let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[dog.playerState].loc.length;
        let frameX = dog.spriteWidth * position;
        let frameY = spriteAnimations[dog.playerState].loc[position].y;
        ctx4.drawImage(this.image, frameX, frameY, this.spriteWidth, this.spriteHeight, 
        this.x, this.y, this.spriteWidth, this.spriteHeight);
        //ctx4.strokeRect(this.x, this.y, this.spriteWidth, this.spriteHeight)
        ctx4.beginPath()
        ctx4.arc(this.x + this.width * 2.5, this.y + this.height * 2.5, this.width * 0.8, 0, Math.PI * 2);
        ctx4.stroke() //uncomment to see hit box
        gameFrame++;
    }   
}
const dog = new Dog();