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


const withCommands = function (command, commandMap) {
  const isCommandExist = commandMap.find(function (inBuiltCommand) {
    return inBuiltCommand[0] === command;
  });

  return isCommandExist;
};

const runCommand = function (commandArguments, commandMap) {
  const [command, ...args] = commandArguments.split(' ');
  const commandExists = withCommands(command, commandMap);

  if (!commandExists) {
    return "Command Not Found!!";
  }

  const actualCommand = commandExists[1];
  return actualCommand(args);
};

const display = function (string) {
  console.log(string);
};

const launchShell = function (commandMap) {
  console.log('You are inside Loki');
  while (true) {
    const command = prompt('Loki `' + currentPath + '`:');

    display(runCommand(command, commandMap));
  }
};

launchShell(commandMap);

// haven't handled in correct arguments