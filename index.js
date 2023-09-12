/**
 * Function to say hello
 * @param {string} name Name of the person to say hello
 */
const sayHello = (name) => {
  console.log(`Hello ${name}!`);
}

/**
 * Funcion to say goodbye
 * @param {string} name Name of the person to say goodbye
 */
const sayGodbye = (name) => {
  console.log(`Bye bye ${name} 👋`);
}

sayHello('World');
sayGodbye('World');

module.exports = {
  sayHello,
  sayGodbye
};
