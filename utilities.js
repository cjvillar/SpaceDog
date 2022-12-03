//comet
const numberOfComets = 1;
const cometArray = [];
const comet = new Comet();

//health
const numberOfHealth = 1;
const healthArray = [];
const health = new Health();

//Dog animation states
const staggerFrames = 10;
const spriteAnimations = [];
let gameFrame = 0;

const animationStates = [
  {
    name: "run",
    frames: 6,
  },
  {
    name: "idle",
    frames: 4,
  },
  {
    name: "fly",
    frames: 4,
  },
];

animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * dog.spriteWidth;
    let positionY = index * dog.spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});
//End Dog animation states

function animate() {
  //background
  gameObjects.forEach((object) => {
    object.update();
    object.draw();
  });

  //hit detection and gameOver screen
  health.update();
  health.draw();
  comet.update();
  comet.draw();
  dog.draw();
  if (shield == 0) {
    gameOver = true;
    ctx2.textAlign = "center";
    ctx2.fillStyle = "green";
    ctx2.font = "25px Courier New";
    ctx2.fillText("GAME OVER!", canvas4.width / 2, 250);
    ctx2.fillText("Press Spacebar To Continue!", canvas4.width / 2, 280);
  }

  //score
  ScoreBoard();
  if (!gameOver) requestAnimationFrame(animate);
  ResetGame();
}

animate();

//Movement Event listeners
window.addEventListener("keydown", function (e) {
  keys = [];
  keys[e.keyCode] = true;
  if (keys[39]) {
    dog.run();
  } else if (keys[38]) dog.fly();
  else {
    dog.idle();
  }
});

window.addEventListener("keyup", function (e) {
  delete keys[e.wich];
  keys[e.keyCode] = false;
  dog.idle();
});

//Mobile controls
touchY = "";
touchTreshold = 100;
window.addEventListener("touchstart", (e) => {
  if ((touchY = e.changedTouches[0].pageY)) dog.run();
});

window.addEventListener("touchmove", (e) => {
  if (gameOver) {
    window.location.reload();
  } else dog.fly();
});

window.addEventListener("touchend", (e) => {
  dog.idle();
});

function ScoreBoard() {
  ctx2.fillStyle = "green";
  ctx2.strokeStyle = "green";
  ctx2.fillText("Shield:", 10, 40);
  ctx2.font = "20px Courier New";
  ctx2.fillText(shield + "%", 95, 40);
  //ctx2.font = "20px Courier New";
}

function ResetGame() {
  if (gameOver) {
    window.addEventListener("keydown", function (e) {
      keys = [];
      keys[e.keyCode] = true;
      if (keys[32]) {
        gameOver = false;
        window.location.reload();
      }
    });
  }
}

for (let i = 0; i < numberOfComets; i++) {
  cometArray.push(new Comet());
}

for (let i = 0; i < numberOfHealth; i++) {
  healthArray.push(new Health());
}
