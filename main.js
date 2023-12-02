const Game = (function () {
    let gameboard = [];
    let players = [];
    let gameFlow = {};
    let turn = 1;
    let gameplay = true;
    let playerOne = [];
    let playerTwo =[];

    //DOM Query
    let board = document.querySelector(".board");

    function Player(name) {
        let playerName = name;
        let score = 0;
        const addScore = () => ++score;
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
                console.log("Player one wins")
            }
            if (winCombo[i].every(elem => playerTwo.includes(elem))) {
                console.log("Player two wins")
            }
        }
    }
    board.addEventListener("click", (e) => {
        if (gameplay) {
        if (e.target.classList.contains("cell") & e.target.textContent == "") {
           if (turn==1) {
            e.target.textContent = "X";
            playerOne.push(parseInt(e.target.classList[1]))
            console.log(e.target.classList[1])
            turn=2
            winCheck();
           }
           else {
            e.target.textContent= "O";
            playerTwo.push(parseInt(e.target.classList[1]))
            console.log(e.target.classList[1])
            turn=1
            winCheck();
           }
        }}});
    return {players, Player, addPlayer};
})();