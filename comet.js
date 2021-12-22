class Comet{
    constructor(){
     this.image = new Image();
     this.image.src = 'assets/comet_left.png';
     this.speed = Math.random() * 4 + 1;
     this.x = Math.random() * canvas.width;
     this.y = Math.random() * canvas.height;
     this.width =  100; // TODO: use random to get random sizes
     this.height = 100;// TODO: use random to get random sizes
    }
    update(){
       //this.x += Math.random() * 3 + 1.5; //this.speed;
       //this.y += Math.random() * 3 + 1.5; //this.speed;
       //this.x -= this.height/this.x; //cool effect for black hole
       this.x -= this.y/this.width;
       //this.y += this.speed;
       if(this.x + this.width < 0) this.x = canvas.width; //endless horz movment
       if(this.x + this.width < 0) this.x = canvas.width;//endless movement
     
    }
    draw(){
       ctx4.drawImage(this.image, this.x, this.y, this.width, this.height);
       //ctx4.strokeRect(this.x, this.y, this.width, this.height);
       

    }
 }
 
