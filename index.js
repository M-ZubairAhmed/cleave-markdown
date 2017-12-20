const LineByLineReader = require('line-by-line');
const fsextra = require('fs-extra');
const norfs = require('nor-fs');
const colors = require('colors');
const program = require('commander');
const path = require('path');
const startTime = new Date();
let endTime = '';

program
  .version('1.00')
  .description(
    'A simple tool to chunk large markdown coderplex learning guide to small files based on custom identifier',
  )
  .option('-d, --dir <required>', 'path to guide')
  .parse(process.argv);

colors.setTheme({
  input: 'grey',
  info: 'green',
  data: 'yellow',
  error: 'red',
});

process.stdout.write('\x1Bc');

if (program.dir === undefined) {
  console.log('>> Enter correct path of learn guide to split'.error);
  throw new Error('directory name not defined');
}
if (path.extname(path.basename(program.dir)) !== '.md') {
  console.log('>> Please specify only markdown files'.error);
  throw new Error('invalid filetype');
}
const guideLocation = program.dir;
const guideName = path.basename(guideLocation, '.md');

console.log(program.dir, guideName);
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
