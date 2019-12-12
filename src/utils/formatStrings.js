/* eslint-disable import/prefer-default-export */
export function removeExtraWhiteSpaces(text) {
  return text.replace(/\s+/g, ' ').trim();
}
