const task3Element = document.getElementById("task-3");

function showAlert() {
  alert("Smile, you are alive.");
}

function outputName(name) {
  alert(name);
}

showAlert();
outputName("Max");

task3Element.addEventListener("click", showAlert());

function combineStrings(string1, string2, string3) {
  return string1 + " " + string2 + " " + string3;
}

const combinedStrings = combineStrings("Why", "Hello", "There");
alert(combinedStrings);
