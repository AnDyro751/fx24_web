/* eslint-disable import/prefer-default-export */
export function validateName(name) {
  return /^[a-zA-ZáéíóúñÁÉÍÓÚ]+(([a-zA-ZáéíóúñÁÉÍÓÚ ])?[a-zA-ZáéíóúñÁÉÍÓÚ]*)*$/.test(name);
}

export function validateUsername(username) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(username);
}

export function validateEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
}
