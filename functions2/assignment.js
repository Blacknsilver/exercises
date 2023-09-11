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

function CheckInput(callback, ...strings) {
  let textIsEmpty = false;
  for (const string of strings) {
    if (!string) {
      textIsEmpty = true;
      break;
    }
  }
  if (!textIsEmpty) {
    callback();
  }
}

sayHello();
sayHello0();
CheckInput(() => {
  console.log("Not empty"), "String1", "String2";
});
