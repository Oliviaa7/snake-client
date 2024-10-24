const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
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