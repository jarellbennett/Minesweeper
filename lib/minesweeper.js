'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = []; //will represent the game board

  for (i = 0; i < numberOfRows; i++) {
    var row = []; //row for game board

    for (j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    }
    board.push(row); //adds newly formed row to game board
  }
  return board;
};

var printBoard = function printBoard(board) {
  console.log('Current Board: ');
  console.log(board[0].join('|')); //turns index into single string
  console.log(board[1].join('|')); //connected by '|'
  console.log(board[2].join('|'));
};

generatePlayerBoard(4, 3);