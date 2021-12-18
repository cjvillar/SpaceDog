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

function animate(){
    gameObjects.forEach(object => {
        object.update();
        object.draw();
        })
    
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[dog.playerState].loc.length;
    let frameX = dog.spriteWidth * position;
    let frameY = spriteAnimations[dog.playerState].loc[position].y;
    ctx3.drawImage(dogSprite, frameX, frameY, dog.spriteWidth, dog.spriteHeight, 
        dog.x, dog.y, dog.spriteWidth, dog.spriteHeight);
    gameFrame++;
    requestAnimationFrame(animate);
};
animate();

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