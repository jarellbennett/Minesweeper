'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = []; //will represent the game board

  for (i = 0; i < numberOfRows; i++) {
    var row = []; //row for game board

    for (j = 0; j < numberOfColumns; j++) {
      row.push(null);
    }
    board.push(row); //adds newly formed row to game board
  }
  return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  var board = []; //will represent the game board

  for (i = 0; i < numberOfRows; i++) {
    var row = []; //row for game board

    for (j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    }
    board.push(row); //adds newly formed row to game board
  }

  var numberOfBombsPlaced = 0; //bomb counter

  //while loop that places bombs randomlly on game board
  while (numberOfBombsPlaced < numberOfBombs) {
    //random number generator for row index
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    //random number generator fot the colums
    var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    //place bomb at spot from random indices
    board[(randomRowIndex, randomColumnIndex)] = 'B';
    numberOfBombsPlaced++;
    //important note: The code in this while loop has the potential to place 
    //bombs on top of already existing bombs.
  }
  return board;
};

var printBoard = function printBoard(board) {
  console.log('Current Board: ');
  console.log(board[0].join('|')); //turns index into single string
  console.log(board[1].join('|')); //connected by '|'
  console.log(board[2].join('|'));
};

console.log(generatePlayerBoard(4, 3));