// get board counts for X & Y
function getBoardCounts(boardConf, boxConf) {
  let x = boardConf.width / boxConf.width;
  let y = boardConf.height / boxConf.height;
  return {x, y};
}

// create board matrix
function createBoardMatrix(board, bc) {
  for (let i = 0; i < bc.x; i++) {
    board[i] = new Array(bc.y);
  }
}

// create mapped board
function mapBoard(board, map, divider) {
  for (let i = 0; i < divider; i++) {
    for (let j = 0; j < divider; j++) {
      board[j][i] = map[i * divider + j];
    }
  }
}

// draw board
function drawBoard(board, boxConf, bc, createBox, Sprite) {
  let tempX = 0;
  for (let i = 0; i < bc.x; i++) {
    let tempY = 0;
    for (let j = 0; j < bc.y; j++) {
      board[i][j] = createBox(boxConf, Sprite, tempX, tempY, board[i][j]);
      tempY += boxConf.height;
    }
    tempX += boxConf.width;
  }
}

// action execute on whole board
function actionFullBoard(board, bc, action) {
  for (let i = 0; i < bc.x; i++) {
    for (let j = 0; j < bc.y; j++) {
      action(board[i][j]);
    }
  }
}

module.exports = {
  getBoardCounts, 
  createBoardMatrix, 
  mapBoard, 
  drawBoard, 
  actionFullBoard
}
