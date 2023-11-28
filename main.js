const Game = (function () {
    let gameboard = [];
    let players = [];
    let gameFlow = {};

    //DOM Query
    let board = document.querySelector(".board");
    let tl = document.querySelector("#tl");
    let tm = document.querySelector("#tm");
    let tr = document.querySelector("#tr");
    let ml = document.querySelector("#ml");
    let mm = document.querySelector("#mm");
    let mr = document.querySelector("#mr");
    let bl = document.querySelector("#bl");
    let bm = document.querySelector("#bm");
    let br = document.querySelector("#br");

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
    board.addEventListener("click", (e) => {
        if (e.target.classList.contains("cell") & e.target.textContent == "") {
            e.target.textContent = "X";
        }});
    return {players, Player, addPlayer};
})();