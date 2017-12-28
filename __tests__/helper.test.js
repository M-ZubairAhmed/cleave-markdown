const normalizeText = require('../utils/helper').normalizeText;

test('It should convert the text to lower case with -/s for spaces', () => {
  const text = 'Random Text here';
  expect(normalizeText(text)).toBe('random-text-here');
});
