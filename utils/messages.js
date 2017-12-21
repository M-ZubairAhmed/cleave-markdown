module.exports.userMessage = (showMessage, output) => {
  if (showMessage) {
    console.log(output);
  }
};

module.exports.successMessage = (guideName, completedTime) => {
  console.log(
    '\n>> Splitting of'.info,
    guideName.input,
    'done in'.info,
    (completedTime + 'ms').infoBack,
  );
};

module.exports.errorMessages = (isError, warning) => {
  if (isError) {
    console.log(warning.error);
    throw new Error(warning);
  }
};

module.exports.clearScreen = () => {
  process.stdout.write('\x1Bc');
};
