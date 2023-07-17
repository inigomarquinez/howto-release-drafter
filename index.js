const sayHello = (name) => {
  console.log(`Hello ${name}!`);
}

const sayGodbye = (name) => {
  console.log(`Bye bye ${name} 👋`);
}

sayHello('World');
sayGodbye('World');

module.exports = {
  sayHello,
  sayGodbye
};
