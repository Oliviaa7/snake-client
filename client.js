const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Welcome to snek");
    conn.write("Name: OLA");
  });

  // conn.on("connect", () => {

  //   setInterval(() => {
  //     setTimeout(() => {
  //       conn.write("Move: up")}, 50);
  //   }, 150);
  // })

  conn.on("data", (data) => {
    console.log("Data received from the server: ", data);
  })
};

console.log("Connecting ...");

module.exports = connect;