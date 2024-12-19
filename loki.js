let currentPath = '~';
const supportedCommands = ["pwd", "cd", "echo"];

const echo = function (args) {
  console.log(args.join(''));
};

const cd = function (args) {
  currentPath = args.join('');
};

const pwd = function () {
  console.log(currentPath);
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
    const command = prompt('Loki `' + currentPath + '`:');

    runCommand(command);
  }
};

launchShell();

// Space is not incorporated in echo function
// haven't handled in correct commands
// haven't handled in correct arguments