function sayHello(name) {
  console.log("Hi " + name);
}

const sayHello0 = (name = "User") => {
  const message = "Hi " + name;
  console.log(message);
};

const sayHello1 = (phrase, name) => {
  const message = phrase + name;
  console.log(message);
};

const sayHello2 = () => {
  console.log("Hello, User!");
};

const sayHello3 = (phrase, name) => {
  const message = phrase + name;
  return message;
};

sayHello();
sayHello0();
