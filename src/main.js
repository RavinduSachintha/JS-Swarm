import { init, Sprite, GameLoop } from 'kontra';
import { config } from './config.js';
import { map1 } from './maps.js';
import { createBoxSprite } from './box.js';
import { 
  getBoardCounts, createBoardMatrix, mapBoard, 
  drawBoard, actionFullBoard } from './board.js';

// canvas initialization
const { canvas } = init();

// set config for board width & height
config.board.width = canvas.width;
config.board.height = canvas.height;

// initialize board
const board = new Array();
// get X & Y boxes' counts for the board
const boardCounts = getBoardCounts(config.board, config.box);

// create empty board matrix
createBoardMatrix(board, boardCounts);

// create mapped board
mapBoard(board, map1, config.board.divider);

// initial drawing of the board
drawBoard(board, config.box, boardCounts, createBoxSprite, Sprite);

// initialize game loop
const gameLoop = new GameLoop({
  update: function (dt) {
  },
  render: function() {
    actionFullBoard(board, boardCounts, function(box) {
      box.render();
    });
  }
});

// start game loop
gameLoop.start();
