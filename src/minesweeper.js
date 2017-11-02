const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];    //will represent the game board

for(i = 0; i<numberOfRows; i++ ){
    let row = [];    //row for game board

    for(j=0; j< numberOfColumns; j++){
      row.push('  ');
    }
    board.push(row);   //adds newly formed row to game board
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) =>{
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
};

//calculate number of bombs adjacent to indicated spot
const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  const neighborOffsets = [[0,1], [0,-1],[1,0],[-1,0],[1,-1],[-1,1],[-1,-1],
  [1,1]];
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
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
};

//checks if tiles have been flipped or contain a bomb
const flipTile = (playerBoard,bombBoard,rowIndex,columnIndex) => {
  if(playerBoard[rowIndex][columnIndex] === ''){
    console.log('This tile has already been flipped!');
    return;
  }
  else if(bombBoard[rowIndex][columnIndex] === 'B'){
    playerBoard[rowIndex][columnIndex] = 'B';
  } else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard,
      rowIndex,columnIndex);
  }
};

const printBoard = (board) =>{
  //joins individual rows as one and connects all rows
  console.log(board.map(row => row.join('|')).join('\n'));
};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);

flipTile(playerBoard,bombBoard,0,0);
console.log('Updated Player Board:');
printBoard(playerBoard);
