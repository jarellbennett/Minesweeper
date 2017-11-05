'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Game);

    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  _createClass(Game, [{
    key: 'playMove',
    value: function playMove(rowIndex, columnIndex) {
      this._board.flipTile(rowIndex, columnIndex);
      if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
        Console.log('Game Over!');
        this._board.print();
      } else if (this.board.hasSafeTiles()) {
        Console.log('Winner!!');
      } else {
        console.log('Current Board: ');
        this._board.print();
      }
    }
  }]);

  return Game;
}();

var Board = function () {
  function Board(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Board);

    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  _createClass(Board, [{
    key: 'flipTile',


    //checks if tiles have been flipped or contain a bomb
    value: function flipTile(rowIndex, columnIndex) {
      if (this._playerBoard[rowIndex][columnIndex] === '') {
        console.log('This tile has already been flipped!');
        return;
      } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
        this._playerBoard[rowIndex][columnIndex] = 'B';
      } else {
        this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
      }
      this._numberOfTiles--;
    }

    //calculate number of bombs adjacent to indicated spot

  }, {
    key: 'getNumberOfNeighborBombs',
    value: function getNumberOfNeighborBombs(rowIndex, columnIndex) {
      var neighborOffsets = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, -1], [-1, 1], [-1, -1], [1, 1]];
      var numberOfRows = this._bombBoard.length;
      var numberOfColumns = this._bombBoard[0].length;
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
    }
  }, {
    key: 'hasSafeTiles',
    value: function hasSafeTiles() {
      return this._numberOfTiles !== this._numberOfBombs;
    }
  }, {
    key: 'print',
    value: function print(board) {
      //joins individual rows as one and connects all rows
      console.log(this._playerBoard.map(function (row) {
        return row.join('|');
      }).join('\n'));
    }
  }, {
    key: 'playerBoard',
    get: function get() {
      return this._playerBoard;
    }
  }], [{
    key: 'generatePlayerBoard',
    value: function generatePlayerBoard(numberOfRows, numberOfColumns) {
      var board = []; //will represent the game board

      for (i = 0; i < numberOfRows; i++) {
        var _row = []; //row for game board

        for (j = 0; j < numberOfColumns; j++) {
          _row.push('  ');
        }
        board.push(_row); //adds newly formed row to game board
      }
      return board;
    }
  }, {
    key: 'generateBombBoard',
    value: function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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
    }
  }]);

  return Board;
}();

var g = new Game(3, 3, 3);
g.playMove(0, 0);