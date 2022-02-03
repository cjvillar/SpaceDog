
let gameOver = false;
//comet
const numberOfComets = 2;
const cometArray = []; 
const comet = new Comet();

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
    //background
    gameObjects.forEach(object => {
        object.update();
        object.draw();
        })

        //hit detection and gameOver screen
        comet.update();
        comet.draw();
        dog.draw();
        if(shield == 0){
            gameOver = true;
            ctx2.textAlign = 'center';
            ctx2.fillStyle = 'green';
            ctx2.font = '50px Courier New';
            ctx2.fillText('GAME OVER!', canvas4.width/2, 250)
        };

    //score
    ScoreBoard();
    if (!gameOver) requestAnimationFrame(animate);
}

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
};


for(let i = 0; i < numberOfComets; i++){
    cometArray.push(new Comet());     
}
