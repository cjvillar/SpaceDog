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

       cometArray.forEach(comet => {
         const dx = dog.x - this.x;
         const dy = dog.y - this.y;
         const dist = Math.sqrt(dx * dx + dy * dy);
         if (dist < dog.width/2 + this.width/2){
             console.log('hit');
             shield--;
         }
         
     });
     
    }
    draw(){
       ctx4.drawImage(this.image, this.x, this.y, this.width, this.height);
       //ctx4.strokeRect(this.x, this.y, this.width, this.height);
       ctx4.beginPath()
       ctx4.arc(this.x + this.width/2, this.y + this.height/2 , this.width/3, 0, Math.PI * 2);
       ctx4.stroke() 
    }

 }
 
