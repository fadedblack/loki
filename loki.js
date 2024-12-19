let currentPath = '~';

const echo = function (args) {
  console.log(args.join(''));
};

const cd = function (args) {
  currentPath = args.join('');
};

const pwd = function () {
  console.log(currentPath);
};

const mapCommandsAndFunctions = [["pwd", pwd], ["cd", cd], ["echo", echo]];

const executeCommand = function (command, args) {
  return command(args);
};

const isValidCommand = function (command) {
  return command !== undefined;
};

const isCommandExist = function (command) {
  const isCommandExist = mapCommandsAndFunctions.find(function (inBuiltCommand) {
    return inBuiltCommand[0] === command;
  });

  return isCommandExist;
};

const runCommand = function (commandArguments) {
  const [command, ...args] = commandArguments.split(' ');
  const validCommand = isCommandExist(command);

  if (isValidCommand(validCommand)) {
    executeCommand(validCommand[1], args);
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