
const backgroundLayer1 = new Image();
backgroundLayer1.src = 'assets/background/pngs/layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'assets/background/pngs/layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'assets/background/pngs/layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'assets/background/pngs/layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'assets/background/pngs/layer-5.png';

class Layer {
    constructor(image, speedModifier){
        this.x = 0;
        this.y = 0
        this.width = 2400;
        this.height = 700;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update(){
        this.speed = gameSpeed * this.speedModifier;
        if(this.x <= -this.width){
            this.x=0;
        }
        this.x = this.x - this.speed;
        }
    draw(){
        ctx2.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx2.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }    
}
const layer1 = new Layer(backgroundLayer1, 0.2)
const layer2 = new Layer(backgroundLayer2, 0.1)
const layer3 = new Layer(backgroundLayer3, 0.2)
const layer4 = new Layer(backgroundLayer4, 0.3)
const layer5 = new Layer(backgroundLayer5, 0.5)

const gameObjects = [layer1, layer2, layer3, layer4, layer5];




