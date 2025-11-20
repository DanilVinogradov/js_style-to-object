'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const obj = {};
  const lines = sourceString.split(';');

  for (let line of lines) {
    line = line.trim();

    if (!line) {
      continue;
    }

    const index = line.lastIndexOf(':');

    if (index === -1) {
      continue;
    }

    const key = line.slice(0, index).trim();
    let value = line.slice(index + 1).trim();

    if (value.endsWith(';')) {
      value = value.slice(0, -1).trim();
    }
    obj[key] = value;
  }

  return obj;
}

module.exports = convertToObject;
