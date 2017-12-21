module.exports.normalizeText = (input, cutAt) =>
  input
    .slice(cutAt)
    .replace(/ /g, '-')
    .toLowerCase();
