//Dog animation states
const staggerFrames = 10;
const spriteAnimations = [];
let gameFrame = 0;
const animationStates = [
    {
        name: 'run',
        frames: 6,
    },
    {
        name: 'idle',
        frames: 4,
    },
    {
        name: 'fly',
        frames: 4,
    } 
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for(let j = 0; j < state.frames; j++){
        let positionX = j * dog.spriteWidth;
        let positionY = index * dog.spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});
//End Dog animation states

//comet
const numberOfComets = 2;
const cometArray = []; 
const comet = new Comet();

function animate(){
    //background
    gameObjects.forEach(object => {
        object.update();
        object.draw();
        })

    //dog
    dog.draw();
    
    //comet
    //ctx4.drawImage(comet.x, comet.y, comet.width, comet.height);
    cometArray.forEach(comet => {
       comet.update();
       comet.draw();  
    });

    //score
    ScoreBoard();
    requestAnimationFrame(animate);
    
    
    
};



animate();

//Event listeners
window.addEventListener('keydown', function(e){
    keys = [];
    keys[e.keyCode] = true;
    if(keys[39]){
    dog.run(); 
    }
    else if(keys[38])
    dog.fly();
    else{
    dog.idle();
    }
});

window.addEventListener('keyup', function(e){
    delete keys[e.wich];
    keys[e.keyCode] = false;
    dog.idle()
});

function ScoreBoard(){
    ctx4.fillStyle = 'green';
    ctx4.strokeStyle = 'green';
    ctx4.fillText('Shield:', 10,40);
    ctx4.font = '20px Courier New';
    ctx4.fillText(shield + '%', 95, 40);
    ctx4.font = '20px Courier New';
}

 function hit(first, second){
   return !(   first.x > second.x + second.width ||
               first.x + first.width < second.x  ||
               first.y > second.y + second.height||
               first.y + first.height < second.y); 
};


if(hit(dog.width, comet.width)){
    console.log('hit');
    shield--;
};

for(let i = 0; i < numberOfComets; i++){
    cometArray.push(new Comet());
    
  
};