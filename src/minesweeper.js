const printBoard = (board) =>{
  console.log('Current Board: ')
  console.log(board[0].join('|'));  //turns index into single string
  console.log(board[1].join('|'));  //connected by '|'
  console.log(board[2].join('|'));
};
const board = [                     //grid for the game board
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
printBoard(board);
board[0][1] = '1';
board[2][2] = 'B';
printBoard(board);
