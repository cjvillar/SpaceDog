const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
canvas.width = 600 
canvas.height = 600

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas.getContext('2d');
canvas2.width = 600 
canvas2.height = 600

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas.getContext('2d');
canvas3.width = 600 
canvas3.height = 600

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas.getContext('2d');
canvas4.width = 600 
canvas4.height = 600

//globals
const grid = 80;
let keys = [];
let shield = 100;
let collisionsCount = 0;
let frame = 0;
let gameSpeed = 0;

