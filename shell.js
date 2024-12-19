const currentDirectory = '~';

const shell = function () {
  console.log('You are inside Loki');
  while (true) {
    const command = prompt('You are currently in:', currentDirectory);
    console.log('You entered: ', command);
  }
};

shell();