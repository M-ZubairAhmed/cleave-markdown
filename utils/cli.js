const program = require('commander');
const colors = require('colors');
const path = require('path');

program
  .version('1.00')
  .description(
    'A simple tool to chunk large markdown coderplex learning guide to small files based on custom identifier',
  )
  .option('-f, --file <required>', 'path to guide')
  .option('-b, --verbose', 'show generated folder structure')
  .parse(process.argv);

colors.setTheme({
  input: 'grey',
  info: ['green', 'bold'],
  unitColor: 'cyan',
  chapterColor: 'magenta',
  content: 'blue',
  error: 'red',
  infoBack: ['white', 'bold', 'bgGreen'],
});

module.exports.filepath = program.file;

module.exports.isVerbose = program.verbose;

module.exports.checkValidPath = path => {
  return !path;
};

module.exports.checkValidFileType = guideLocation => {
  if (path.extname(path.basename(guideLocation)) !== '.md') {
    console.log('>> Please specify only markdown files'.error);
    throw new Error('invalid filetype');
  }
};
