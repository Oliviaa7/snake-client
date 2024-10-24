const net = require("net");
const {IP, PORT} = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP, 
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Welcome to snek");
    conn.write("Name: OLA");
  });

  conn.on("data", (data) => {
    console.log("Data received from the server: ", data);
  })

  return conn;
};

console.log("Connecting ...");

module.exports = connect;