const currentDirectory = '~';

const runCommand = function (commandArguments) {
  const [command, ...args] = commandArguments.split(' ');

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