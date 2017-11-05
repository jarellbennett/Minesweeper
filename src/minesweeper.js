class Game {
  constructor(numberOfRows,numberOfColumns,numberOfBombs){
    this._board = new Board(numberOfRows,numberOfColumns,numberOfBombs);
  }

  playMove(rowIndex,columnIndex){
    this._board.flipTile(rowIndex,columnIndex);
    if(this._board.playerBoard[rowIndex][columnIndex] === 'B'){
      Console.log('Game Over!');
      this._board.print();
    }
    else if(this.board.hasSafeTiles()){
      Console.log('Winner!!');
    }
    else {
      console.log('Current Board: ');
      this._board.print();
    }
  }
}


class Board {
  constructor(numberOfRows,numberOfColumns,numberOfBombs){
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = generatePlayerBoard(numberOfRows,numberOfColumns);
    this._bombBoard = generateBombBoard(numberOfRows,numberOfColumns,
      numberOfBombs);

  }

  get playerBoard(){
    return this._playerBoard;
  }

  //checks if tiles have been flipped or contain a bomb
   flipTile (rowIndex,columnIndex){
    if(this._playerBoard[rowIndex][columnIndex] === ''){
      console.log('This tile has already been flipped!');
      return;
    }
    else if(this._bombBoard[rowIndex][columnIndex] === 'B'){
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(
        rowIndex,columnIndex);
    }
    this._numberOfTiles--;
  }

  //calculate number of bombs adjacent to indicated spot
  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    const neighborOffsets = [[0,1], [0,-1],[1,0],[-1,0],[1,-1],[-1,1],[-1,-1],
    [1,1]];
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;

    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      //if statement checks if spots to be checked are within range of board
      if(neighborRowIndex >= 0 && neighborRowIndex < numberOfRows &&
        neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns ){
          //cheks if bombs located at current index
          if(bombBoard[neighborRowIndex][neighborColumnIndex] === 'B'){
              numberOfBombs++;
          }
        }
    });
    return numberOfBombs;
  }

  hasSafeTiles(){
    return this._numberOfTiles !== this._numberOfBombs;
  }

  print(board){
    //joins individual rows as one and connects all rows
    console.log(this._playerBoard.map(row => row.join('|')).join('\n'));
  }

  static generatePlayerBoard(numberOfRows, numberOfColumns) {
    let board = [];    //will represent the game board

  for(i = 0; i<numberOfRows; i++ ){
      let row = [];    //row for game board

      for(j=0; j< numberOfColumns; j++){
        row.push('  ');
      }
      board.push(row);   //adds newly formed row to game board
    }
    return board;
  }

  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    board = [];    //will represent the game board

  for(i = 0; i<numberOfRows; i++ ){
       row = [];    //row for game board

      for(j=0; j< numberOfColumns; j++){
        row.push('  ');
      }
      board.push(row);   //adds newly formed row to game board
    }

    let numberOfBombsPlaced = 0;    //bomb counter

  //while loop that places bombs randomlly on game board
    while(numberOfBombsPlaced < numberOfBombs){
      //random number generator for row index
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      //random number generator for the colums
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
       //makes sure bombs arent placed already place bomb at spot
      if(board[randomRowIndex][randomColumnIndex] != 'B'){
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
      }
    }
    return board;
  }
}


const g = new Game(3,3,3);
g.playMove(0,0);
