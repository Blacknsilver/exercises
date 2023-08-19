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
