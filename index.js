#!/usr/bin/env node

const path = require('path');
const LineByLineReader = require('line-by-line');
const fsjetpack = require('fs-jetpack');
const cli = require('./utils/cli.js');
const messages = require('./utils/messages.js');
const helper = require('./utils/helper.js');

const guideLocation = cli.filepath;
const guideName = path.basename(guideLocation, '.md');
const isVerboseMode = cli.isVerbose;
const startTime = new Date();
lineReader = new LineByLineReader(guideLocation);

messages.clearScreen();

messages.errorMessages(
  cli.checkValidPath(guideLocation),
  '>> Enter correct path of learn guide to split',
);

messages.errorMessages(
  cli.checkValidFileType(guideLocation),
  '>> Please specify only markdown files',
);

messages.userMessage(
  true,
  '>> Cleave Markdown running on'.info + guideLocation.input,
);

lineReader.on('error', err => {
  messages.errorMessages(true, err);
});

messages.userMessage(isVerboseMode, 'Folder structure:\n'.info);

let currentUnit = '',
  currentChapter = '',
  currentFolderDir = '',
  currentFileDir = '',
  topicName = '';

lineReader.on('line', line => {
  if (line.split(' ')[0] === '#') {
    currentUnit = helper.normalizeText(line, 2);
    currentChapter = '';
    currentFolderDir = './' + guideName + '/' + currentUnit;
    currentFileDir = '';
    messages.userMessage(isVerboseMode, currentUnit.unitColor);
  } else if (line.split(' ')[0] === '##') {
    // For sorting Chapter name
    currentChapter = helper.normalizeText(line, 3);
    currentFileDir = currentFolderDir + '/' + currentChapter + '.md';
    messages.userMessage(isVerboseMode, '  ' + currentChapter.chapterColor);
  } else if (currentFolderDir !== '' && currentFileDir !== '') {
    if (line.split(' ')[0] === '###' && isVerboseMode) {
      // For sorting content inside chapter
      topicName = helper.normalizeText(line, 4);
      messages.userMessage(isVerboseMode, '    ' + topicName.content);
    }
    fsjetpack.append(currentFileDir, line + '\n', { mode: '744' });
  }
});

lineReader.on('end', () => {
  const endTime = new Date();
  const completedTime = Math.abs(endTime.getTime() - startTime.getTime());
  messages.successMessage(guideName, completedTime);
});
