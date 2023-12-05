const Game = (function () {
    let players = [];
    let turn = 1;
    let plays = 0
    let gameplay = true;
    let playerOne = [];
    let playerTwo =[];

    //DOM Query
    let board = document.querySelector(".board");
    let versus = document.querySelector(".versus");
    let cells = document.querySelectorAll(".cell")
    let playerTurn = document.querySelector(".player")
    let scoreOne = document.querySelector(".scoreOne")
    let scoreTwo = document.querySelector(".scoreTwo")
    let rematch = document.querySelector(".rematch")
    let newGame = document.querySelector(".newGame")

    function init() {
        addPlayer(prompt("Who is player one?", ""))
        addPlayer(prompt("Who is player two?", ""))
        turn = 1
        versus.textContent = `${players[0].playerName} VS ${players[1].playerName}`;
        playerTurn.textContent = `It's ${players[0].playerName} Turn!`;
        scoreOne.textContent = `${players[0].playerName} : ${players[0].score}`
        scoreTwo.textContent = `${players[1].playerName} : ${players[1].score}`
    };

    function Player(name) {
        let playerName = name;
        let score = 0;
        const addScore = () => score++;
        const getScore = () => score;
        return {playerName, score, addScore, getScore};
    }
    function addPlayer(name) {
        let newPlayer = Player(name);
        players.push(newPlayer);
    }

    function winCheck() {
        const winCombo = [
            [1,2,3],
            [1,5,9],
            [1,4,7],
            [2,5,8],
            [3,5,7],
            [3,6,9],
            [4,5,6],
            [7,8,9]
        ]
        for (let i=0; i<winCombo.length; i++) {
            if (winCombo[i].every(elem => playerOne.includes(elem))) {
                players[0].score++;
                scoreOne.textContent = `${players[0].playerName} : ${players[0].score}`
                versus.textContent = `${players[0].playerName} Wins!`
                gameplay=false
                console.log("Player one wins")
            }
            if (winCombo[i].every(elem => playerTwo.includes(elem))) {
                players[1].score++;
                scoreTwo.textContent = `${players[1].playerName} : ${players[1].score}`
                versus.textContent = `${players[1].playerName} Wins!`
                gameplay=false
                console.log("Player two wins")
            }
            if (plays == 9) {
                versus.textContent = "Its a Draw!"
            }
        }

    }

    function resetBoard() {
        cells.forEach(cell => {
                    cell.textContent = "";
                })
        playerOne = []
        playerTwo = []
    }

    window.onload = init()

    board.addEventListener("click", (e) => {
        if (gameplay) {
        if (e.target.classList.contains("cell") & e.target.textContent == "") {
           if (turn==1) {
            e.target.textContent = "X";
            playerOne.push(parseInt(e.target.classList[1]))
            console.log(e.target.classList[1])
            turn=2
            plays = plays + 1
            winCheck();
            console.log(plays)
           }
           else {
            e.target.textContent= "O";
            playerTwo.push(parseInt(e.target.classList[1]))
            console.log(e.target.classList[1])
            turn=1
            plays = plays + 1
            winCheck();
            console.log(plays)
           }
        }}});

    newGame.addEventListener("click", () => {
        resetBoard();
        players = [];
        init()
        gameplay = true;
        console.log("done")
    })

    rematch.addEventListener("click", () => {
        resetBoard()
        versus.textContent = `${players[0].playerName} VS ${players[1].playerName}`
        plays = 0
        gameplay = true;
    })
    return {players, Player, addPlayer, resetBoard};
})();