const connect = require("./client");
const setupInput = require("./input");

const main = () => {
  const conn = connect();
  setupInput(conn);
};

// establishes a connection with the game server

main();
