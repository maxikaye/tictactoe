// TicTacToe by Maxi Kaye 2022 @maxikaye

const createPlayer = (name, player, AI=false ) => {
    const score = 0;
    let mark = null;
    if (player === 'one') mark = 'x';
    else if (player === 'two') mark = 'o';
    return { name, mark, AI, score};
};

function createEnum(values) {
    const enumObj = {};
    for (const val of values) {
        enumObj[val] = val;
    }
    return Object.freeze(enumObj);
}

const gameCtrl = (() => {
    // DOM Cache
    const gameArea = document.querySelector('.game-area');
    const startMenu = document.querySelector('.start-menu');
    const startBtn = document.getElementById('btn-start-game');
    // menu input
    const inputPlayerOneName = document.getElementById('player-one-name');
    const inputPlayerOneHuman = document.getElementById('player-one-human');
    const inputPlayerOneAI = document.getElementById('player-one-ai');

    
    // game state
    const gameStates = createEnum(['Menu', 'Start', 'Play', 'GameOver']);
    let currentState = gameStates.Menu;
    let round = 0;
    let players = [];
    let currentPlayer;

    function startGame(e) {
        e.preventDefault();
        console.log(inputPlayerOneHuman.value, inputPlayerOneName.value)
        // const playerOne = createPlayer(
        //     inputPlayerOneName.value,
        //     'one',
        //     inputPlayerOneHuman
        // );
    }
    
    const setup = () => {
        // menu
        if (currentState === gameStates.Menu) {
            startMenu.setAttribute('style', 'display: flex');
            startBtn.addEventListener('click', startGame);
        }
        // game
        if (currentState === gameStates.Start) {
            startMenu.setAttribute('style', 'display: none');
            gameBoard.render();
            currentState = gameStates.Play;
        }
        
    }

    const update = () => {
        // call each move
        // update board array
        // check for win
        // if play new game gameBoard.reset()
    }

    const render = () => {
        // called from update
    }

    return { gameArea, setup, update }
})();


const gameBoard = (() => {
    let _board = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    // DOM Cache
    const boardDom = document.createElement('div');
    boardDom.classList.add('game-board')
    gameCtrl.gameArea.appendChild(boardDom);

    const setPlayerMark = (e) => {
        const space = Number(e.target.id);
        if (!Object.hasOwn(_board[space], 'player')) {
            gameCtrl.round += 1;
            if (gameCtrl.round % 2 !== 0) {
                _board[space]['player'] = 'x';
                e.target.innerHTML = 'x';
            } else {
                _board[space]['player'] = 'o';
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
        _board.forEach(el => el = {});
    }

    const checkWin = () => {
        const winStates = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let state of winStates) {
            if (state.every(space => {
                // refactor to use player obj
                return Object.hasOwn(_board[space], 'player') && _board[space]['player'] === 'x';
            })) {
                return `player wins`;
            }
        }
    };

    return { render, reset, checkWin };
})();

// if player obj do not exist 
// Initialize Game ==================================
gameCtrl.setup();
// else
// Play Game ========================================