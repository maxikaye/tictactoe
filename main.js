// TicTacToe by Maxi Kaye 2022
const gameCtrl = (() => {
    // DOM Cache
    const gameArea = document.querySelector('.game-area');

    // game state
    let round = 0;

    return { gameArea, round }
})();


const gameBoard = (() => {
    let _board = ['', '', '', '', '', '', '', '', ''];
    // DOM Cache
    const boardDom = document.createElement('div');
    boardDom.classList.add('game-board')
    gameCtrl.gameArea.appendChild(boardDom);

    const setPlayerMark = (e) => {
        gameCtrl.round += 1;
        const space = Number(e.target.id);
        _board[space] = 'x';
        e.target.innerHTML = 'X';
    }

    const render = () => {
        for (let i = 0; i < _board.length; i++) {
                let boardSpace = document.createElement('div');
                boardSpace.classList.add('board-space');
                boardSpace.id = i;
                boardDom.appendChild(boardSpace);
                boardSpace.addEventListener('click', setPlayerMark);
        }
    };

    const checkWin = () => {
        if (_board[0] && _board[1] === _board[2]) {
            return _board[0]; // first row
        } else if (_board[3] && _board[4] === _board[5]) {
            return _board[3]; // second row
        } else if (_board[6] && _board[7] === _board[8]) {
            return _board[6]; // third row
        } else if (_board[0] && _board[3] === _board[6]) {
            return _board[0]; // first col
        } else if (_board[1] && _board[4] === _board[7]) {
            return _board[1]; // second col
        } else if (_board[2] && _board[5] === _board[8]) {
            return _board[2]; // third col
        } else if (_board[0] && _board[4] === _board[8]) {
            return _board[0]; // top left to bottom right diagonal
        } else if (_board[2] && _board[4] === _board[6]) {
            return _board[2]; // top right to bottom left diagonal
        } else {
            return "draw";
        }
    };
    return { render, checkWin };
})();


// const Events = (() => {
//     let _events = {};
    
//     const listen = (event, callback) => {

//     };

//     const cancel = (event) => {

//     };

//     const emit = (event, ...data) => {

//     };

//     return { listen, cancel, emit };
// })();


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