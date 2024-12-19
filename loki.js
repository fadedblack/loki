const currentDirectory = '~';

const validCommand = function (command) {
  const commandList = ["ls", "echo"];

  const isValidCommand = commandList.find(function (inBuiltCommand) {
    return inBuiltCommand === command;
  });

  return isValidCommand !== undefined;
};

const runCommand = function (commandArguments) {
  const [command, ...args] = commandArguments.split(' ');

  if (validCommand(command)) {
    execute(command);
  }

  return [command, args];
};

const shell = function () {
  console.log('You are inside Loki');
  while (true) {
    const command = prompt('You are currently in ' + currentDirectory + ':');
    console.log('You entered: ', command);

    console.log(runCommand(command));
  }
};

shell();