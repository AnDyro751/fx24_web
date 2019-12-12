/* eslint-disable import/prefer-default-export */
export function validateName(name) {
  return /^[a-zA-ZáéíóúñÁÉÍÓÚ]+(([a-zA-ZáéíóúñÁÉÍÓÚ ])?[a-zA-ZáéíóúñÁÉÍÓÚ]*)*$/.test(name);
}

export function validateUsername(username) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(username);
}
