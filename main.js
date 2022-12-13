// TicTacToe by Maxi Kaye 2022
const gameCtrl = (() => {
    // DOM Cache
    const gameArea = document.querySelector('.game-area');

    let round = 0;
    // game state

    return { gameArea }
})();


const gameBoard = (() => {
    // let _board = [['', '', ''], ['', '', ''], ['', '', '']];
    let _board = [['x', 'o', 'o'], ['o', 'x', 'x'], ['x', 'o', 'x']];
    const boardDom = document.createElement('div');
    boardDom.classList.add('game-board')
    gameCtrl.gameArea.appendChild(boardDom);

    const render = () => {
        for (const row of _board) {
            for (const space of row) {
                // create div with id and class and append
                let boardSpace = document.createElement('div');
                boardSpace.classList.add('board-space');
                boardSpace.innerHTML = space.toUpperCase();
                boardDom.appendChild(boardSpace);
            }
        }
    };
    // if all game board spaces are filled
    const checkWin = () => {
        if (_board[0][0] && _board[0][1] === _board[0][2]) {
            return _board[0][0]; // first row
        } else if (_board[1][0] && _board[1][1] === _board[1][2]) {
            return _board[1][0]; // second row
        } else if (_board[2][0] && _board[2][1] === _board[2][2]) {
            return _board[2][0]; // third row
        } else if (_board[0][0] && _board[1][0] === _board[2][0]) {
            return _board[0][0]; // first col
        } else if (_board[0][1] && _board[1][1] === _board[2][1]) {
            return _board[0][1]; // second col
        } else if (_board[0][2] && _board[1][2] === _board[2][2]) {
            return _board[0][2]; // third col
        } else if (_board[0][0] && _board[1][1] === _board[2][2]) {
            return _board[0][0]; // top left to bottom right diagonal
        } else if (_board[0][2] && _board[1][1] === _board[2][0]) {
            return _board[0][1]; // top right to bottom left diagonal
        } else {
            return "tie";
        }
    };
    return { render, checkWin };
})();


const Events = (() => {
    let _events = {};
    
    const listen = (event, callback) => {

    };

    const cancel = (event) => {

    };

    const emit = (event, ...data) => {

    };

    return { listen, cancel, emit };
})();


const Player = () => {
    // human or AI
    // symbol
    // score
    // name
    return {};
}

// Initialize Game ==================================
// player select screen > game start
gameBoard.render();