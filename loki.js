const currentDirectory = '~';
const supportedCommands = ["ls", "echo"];

const echo = function (args) {
  console.log(args.join(''));
};

const ls = function () {
  
}

const executeCommand = function (command, args) {
  const commandFunctions = [ls, echo];

  const functionToCall = supportedCommands.findIndex(function (commands) {
    return commands === command;
  });

  commandFunctions[functionToCall](args);
};

const isValidCommand = function (command) {
  const isCommandExist = supportedCommands.find(function (inBuiltCommand) {
    return inBuiltCommand === command;
  });

  return isCommandExist !== undefined;
};

const runCommand = function (commandArguments) {
  const [command, ...args] = commandArguments.split(' ');

  if (isValidCommand(command)) {
    executeCommand(command, args);
  }
};

const shell = function () {
  console.log('You are inside Loki');
  while (true) {
    const command = prompt('Loki `' + currentDirectory + '`:');

    runCommand(command);
  }
};

shell();