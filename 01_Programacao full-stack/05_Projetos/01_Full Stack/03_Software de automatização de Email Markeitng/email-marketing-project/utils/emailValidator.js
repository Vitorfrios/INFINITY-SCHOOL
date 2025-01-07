// Valida se o formato do email é válido
function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  }
  
  module.exports = { isValidEmail };
  