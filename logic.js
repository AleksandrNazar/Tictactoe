let players = ['x', 'o'];
let activePlayer = 0;
let player;

function startGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  player = players[0];

  renderBoard(board);
}

function click(stringNumber, columnNumber) {
  board[stringNumber][columnNumber] = player;
  
  renderBoard(board);

  if (board[0][0] === player && board[0][1] === player && board[0][2] === player) {
    showWinner(activePlayer);
  }

  if (board[1][0] === player && board[1][1] === player && board[1][2] === player) {
    showWinner(activePlayer);
  }

  if (board[2][0] === player && board[2][1] === player && board[2][2] === player) {
    showWinner(activePlayer);
  }

  if (board[0][0] === player && board[1][0] === player && board[2][0] === player) {
    showWinner(activePlayer);
  }

  if (board[0][1] === player && board[1][1] === player && board[2][1] === player) {
    showWinner(activePlayer);
  }

  if (board[0][2] === player && board[1][2] === player && board[2][2] === player) {
    showWinner(activePlayer);
  }

  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    showWinner(activePlayer);
  }

  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    showWinner(activePlayer);
  }

  if (player === players[0]) {
    player = players[1];
    activePlayer = 1;
  } else {
    player = players[0];
    activePlayer = 0;
  }
}


