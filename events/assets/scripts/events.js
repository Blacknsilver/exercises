const button = document.querySelector("button");

// button.onclick = function () {}; // A different way to do things

const buttonClickHandler = () => {
  alert("Button was clicked");
};

// button.onclick = buttonClickHandler; // Yet another way to do things

button.addEventListener("click", buttonClickHandler); // This allows us to add multiple event listeners and there's also a .removeEventListener() function available.

setTimeout(() => {
  button.removeEventListener("click", buttonClickHandler);
}, 2000);
