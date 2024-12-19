let currentDirectory = '~';
const supportedCommands = ["pwd", "cd", "echo"];

const echo = function (args) {
  console.log(args.join(''));
};

const cd = function (args) {
  currentDirectory = args.join('');
};

const pwd = function () {
  console.log(currentDirectory);
};

const executeCommand = function (command, args) {
  const commandFunctions = [pwd, cd, echo];

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

const launchShell = function () {
  console.log('You are inside Loki');
  while (true) {
    const command = prompt('Loki `' + currentDirectory + '`:');

    runCommand(command);
  }
};

launchShell();