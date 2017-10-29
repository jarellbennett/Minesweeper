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
    //place bomb at spot from random indices
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
    //important note: The code in this while loop has the potential to place
    //bombs on top of already existing bombs.
  }
  return board;
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