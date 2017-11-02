'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = []; //will represent the game board

  for (i = 0; i < numberOfRows; i++) {
    var _row = []; //row for game board

    for (j = 0; j < numberOfColumns; j++) {
      _row.push('  ');
    }
    board.push(_row); //adds newly formed row to game board
  }
  return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  board = []; //will represent the game board

  for (i = 0; i < numberOfRows; i++) {
    row = []; //row for game board

    for (j = 0; j < numberOfColumns; j++) {
      row.push('  ');
    }
    board.push(row); //adds newly formed row to game board
  }

  var numberOfBombsPlaced = 0; //bomb counter

  //while loop that places bombs randomlly on game board
  while (numberOfBombsPlaced < numberOfBombs) {
    //random number generator for row index
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    //random number generator for the colums
    var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    //makes sure bombs arent placed already place bomb at spot
    if (board[randomRowIndex][randomColumnIndex] != 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
    }
  }
  return board;
};

//calculate number of bombs adjacent to indicated spot
var getNumberOfNeighborBombs = function getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex) {
  var neighborOffsets = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, -1], [-1, 1], [-1, -1], [1, 1]];
  var numberOfRows = bombBoard.length;
  var numberOfColumns = bombBoard[0].length;
  var numberOfBombs = 0;

  neighborOffsets.forEach(function (offset) {
    var neighborRowIndex = rowIndex + offset[0];
    var neighborColumnIndex = columnIndex + offset[1];
    //if statement checks if spots to be checked are within range of board
    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
      //cheks if bombs located at current index
      if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
        numberOfBombs++;
      }
    }
  });
  return numberOfBombs;
};

//checks if tiles have been flipped or contain a bomb
var flipTile = function flipTile(playerBoard, bombBoard, rowIndex, columnIndex) {
  if (playerBoard[rowIndex][columnIndex] === '') {
    console.log('This tile has already been flipped!');
    return;
  } else if (bombBoard[rowIndex][columnIndex] === 'B') {
    playerBoard[rowIndex][columnIndex] = 'B';
  } else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
  }
};

var printBoard = function printBoard(board) {
  //joins individual rows as one and connects all rows
  console.log(board.map(function (row) {
    return row.join('|');
  }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board:');
printBoard(playerBoard);