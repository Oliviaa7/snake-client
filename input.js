let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input

  stdin.on("data", handleUserInput);
  // return stdin;   // return the stdin object so we can use it elsewhere in the program
};

const handleUserInput = function (key) {
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