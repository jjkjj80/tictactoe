const Game = (function () {
    let gameboard = [];
    let players = [];
    let gameFlow = {};
    let qdom = {}
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
    return {players, Player, addPlayer}
})();