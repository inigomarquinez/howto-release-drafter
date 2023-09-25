/**
 * Function to say hello
 * @param {string} name Name of the person to say hello
 */
const sayHello = (name, surname) => {
  console.log(`Hello ${name} ${surname}! How are you today?`);
}

/**
 * Funcion to say goodbye
 * @param {string} name Name of the person to say goodbye
 */
const sayGodbye = (name) => {
  console.log(`Bye bye ${name} 👋`);
}

sayHello('World', 'Wide');
sayGodbye('World');

module.exports = {
  sayHello,
  sayGodbye
};
