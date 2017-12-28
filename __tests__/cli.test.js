const checkValidFileType = require('../utils/cli').checkValidFileType;

test('It should throw error is other than md files are pointed out', () => {
  const wrongGuideLocation = './path/to/guide.txt';
  expect(() => checkValidFileType(wrongGuideLocation)).toThrow(
    '>> Please specify only markdown files',
  );
});
