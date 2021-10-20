// Game Imports
const Player = require('../game/player')

// Triggers when a client connects to the socket
// and makes a new player
module.exports = (io, socket, GameEngine) => {
  const createPlayer = (data) => {
    console.log(`Creating new player:\n ${data}`)
    const newPlayer = new Player(data, socket.id, 50, 50)

    GameEngine.playerList = [
      ...GameEngine.playerList,
      newPlayer.returnDataSet()
    ]
  }

  socket.on('player:create', createPlayer)
}
