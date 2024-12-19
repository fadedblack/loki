const E404 = "Command Not Found!!";

let currentPath = '~';

const echo = function (args) {
  return args.join(' ');
};

const cd = function (args) {
  currentPath = args.join('');
  return currentPath;
};

const pwd = function () {
  return currentPath;
};

const commandMap = [
  ["pwd", pwd],
  ["cd", cd],
  ["echo", echo]
];


const findCommand = function (command, commandMap) {
  const isCommandExist = commandMap.find(function (inBuiltCommand) {
    return inBuiltCommand[0] === command;
  });

  return isCommandExist;
};

const runCommand = function (commandArguments, commandMap) {
  const [command, ...args] = commandArguments.split(' ');
  const commandExists = findCommand(command, commandMap);

  if (!commandExists) {
    return 404;
  }

  const actualCommand = commandExists[1];
  return actualCommand(args);
};

const display = function (code) {
  switch (code) {
    case 404:
      return console.log(E404);
    default:
      return console.log(code);
  }
};

const launchShell = function (commandMap) {
  console.log('You are inside Loki');
  while (true) {
    const command = prompt('Loki `' + currentPath + '`:');

    const runStatus = runCommand(command, commandMap);

    display(runStatus);
  }
};

launchShell(commandMap);

// haven't handled in correct arguments
// should change the name of home based on current users name