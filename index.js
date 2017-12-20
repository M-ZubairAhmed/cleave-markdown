const LineByLineReader = require('line-by-line');
const fsextra = require('fs-extra');
const norfs = require('nor-fs');
const colors = require('colors');
const program = require('commander');

const guideName = 'React';
const guideLocation = './sample.md';
const startTime = new Date();
let endTime = '';

process.stdout.write('\x1Bc');
colors.setTheme({
  input: 'grey',
  info: 'green',
  data: 'yellow',
  error: 'red',
});
program
  .version('1.00')
  .description('cmldssas')
  .option('-d, --dir <path>', 'path to guide')
  .option('-n, --name <string>', 'name of the guide')
  .parse(process.argv);

console.log(program.dir, program.name);
const helloMessage = 'Splitting ' + guideName + ' with Cleave Markdown';
console.log(helloMessage.info);

lr = new LineByLineReader(guideLocation);

lr.on('error', err => {
  console.log(err.error);
});

console.log(
  '----------------------------------------------------------------------\n'
    .info,
);

let currentUnit = '',
  currentChapter = '',
  currentTopic = '',
  currentFolderDir = '',
  currentFileDir = '';
lr.on('line', line => {
  if (line.split(' ')[0] === '#') {
    const unitName = line
      .slice(2)
      .replace(/ /g, '-')
      .toLowerCase();
    console.log('|_'.data, unitName.data);

    currentUnit = unitName;
    currentChapter = '';
    currentFolderDir = './' + guideName + '/' + currentUnit;
    currentFileDir = '';
  } else if (line.split(' ')[0] === '##') {
    const chapterName = line
      .slice(3)
      .replace(/ /g, '-')
      .toLowerCase();
    console.log('  |_'.data + chapterName.data);

    currentChapter = chapterName;
    currentFileDir = currentFolderDir + '/' + chapterName + '.md';

    fsextra.ensureFileSync(currentFileDir);
    norfs.sync.chmod(currentFileDir, '744');
  } else if (currentFolderDir !== '' && currentFileDir !== '') {
    if (line.split(' ')[0] === '###') {
      const topicName = line
        .slice(4)
        .replace(/ /g, '-')
        .toLowerCase();
      console.log('    |_'.data, topicName.data);
    }
    norfs.sync.appendFile(currentFileDir, line + '\n', { encoding: 'utf8' });
  }
});

lr.on('end', () => {
  endTime = new Date();
  console.log(
    '\n----------------------------------------------------------------------'
      .info,
  );
  const completedTime = Math.abs(endTime.getTime() - startTime.getTime());
  const finalMessage = `Splitting of ${guideName} done in ${completedTime}ms`;
  console.log(finalMessage.info);
});
