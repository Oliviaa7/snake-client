let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
};

const handleUserInput = function(key) {
  switch (key) {
  case 'w':
    connection.write("Move: up");
    break;
  case 'a':
    connection.write("Move: left");
    break;
  case "s":
    connection.write("Move: down");
    break;
  case "d":
    connection.write("Move: right");
    break;
  case "i":
    connection.write("Say: I dunno");
    break;
  case "g":
    connection.write("Say: GOTCHA");
    break;
  case "h":
    connection.write("Say: HA!");
    break;
  case "t":
    connection.write("Say: Time to go!");
    break;
  case "b":
    connection.write("Say: Goodbye now!");
    break;
  case "\u0003":
    process.exit();
  }
};

module.exports = setupInput;