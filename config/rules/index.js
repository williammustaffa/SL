const jsRule = require('./jsRule');
const sassRule = require('./sassRule');
const cssRule = require('./cssRule');
const imageRule = require('./imageRule');

module.exports = function () {
  const rules = [];

  rules.push(jsRule);
  rules.push(sassRule);
  rules.push(cssRule);
  rules.push(imageRule);

  return rules;
};
