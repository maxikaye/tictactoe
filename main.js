// TicTacToe by Maxi Kaye 2022

const createPlayer = (name, mark, AI=false ) => {
    const score = 0;
    return { name, mark, AI, score};
};


const gameCtrl = (() => {
    // DOM Cache
    const gameArea = document.querySelector('.game-area');

    // game state
    let round = 0;
    const init = () => {
        const playerOne = createPlayer('max', 'x');
        const playerTwo = createPlayer('marta', 'o');
        gameBoard.render();
        return { playerOne, playerTwo };
    }
    return { gameArea, round, init }
})();


const gameBoard = (() => {
    let _board = ['', '', '', '', '', '', '', '', ''];
    // DOM Cache
    const boardDom = document.createElement('div');
    boardDom.classList.add('game-board')
    gameCtrl.gameArea.appendChild(boardDom);

    const setPlayerMark = (e) => {
        const space = Number(e.target.id);
        if (_board[space] === '') {
            gameCtrl.round += 1;
            if (gameCtrl.round % 2 !== 0) {
                _board[space] = 'x';
                e.target.innerHTML = 'x';
            } else {
                _board[space] = 'o';
                e.target.innerHTML = 'o';
            }
            if (gameCtrl.round >= 3) { 
                console.log(checkWin());
            }
        }
    }

    const render = () => {
        for (let i = 0; i < _board.length; i++) {
                const boardSpace = document.createElement('div');
                boardSpace.classList.add('board-space');
                boardSpace.id = i;
                boardDom.appendChild(boardSpace);
                boardSpace.addEventListener('click', setPlayerMark);
        }
    };

    const reset = () => {
        const _spaces = document.querySelectorAll('.board-space');
        _spaces.forEach(space => space.innerHTML = '');
        _board.forEach(el => el = '');
    }

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
    return { render, reset, checkWin };
})();


// Initialize Game ==================================
gameCtrl.init();