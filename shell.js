const shell = function () {
  while (true) {
    const command = prompt('You are inside Loki');
    console.log('You entered: ', command);
  }
};

shell();