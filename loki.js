const currentDirectory = '~';
const commandList = ["ls", "echo"];

const echo = function (args) {
  console.log(args.join(''));
};

const ls = function () {
  
}

const execute = function (command, args) {
  const commandFunctions = [ls, echo];

  const functionToCall = commandList.findIndex(function (commands) {
    return commands === command;
  });

  commandFunctions[functionToCall](args);
};

const validCommand = function (command) {
  const isValidCommand = commandList.find(function (inBuiltCommand) {
    return inBuiltCommand === command;
  });

  return isValidCommand !== undefined;
};

const runCommand = function (commandArguments) {
  const [command, ...args] = commandArguments.split(' ');

  if (validCommand(command)) {
    execute(command, args);
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