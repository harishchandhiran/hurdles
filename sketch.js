var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var runners, runner1, runner2, runner3, runner4;

//Load for images.
var track, ground, runner_img;

function preload(){
  track = loadImage("images/track.jpg");
  ground = loadImage("images/ground.png");

  runner_img = loadAnimation("images/runner.gif");
}

function setup(){
  //console.log();
  canvas = createCanvas(displayWidth-50, displayHeight-150);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  //console.log();
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

  strokeWeight(10);
  /*line();
  line();
  line();
  line();*/

}
