class DOMHelper {
  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById("elementId");
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element); // This will not be copied, it will be moved
  }
}

class Tooltip {}

class ProjectItem {
  constructor(id, updateProjectListsHandler) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectSwitchButton();
    this.connectMoreInfoButton();
  }
  connectMoreInfoButton() {}
  connectSwitchButton() {
    const projectItemElement = document.getElementById(this.id);
    const switchButton = projectItemElement.querySelector(
      "button:last-of-type" // The last button is the "finish" button.
    );
    switchButton.addEventListener("click", this.updateProjectListsHandler);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this))
      );
    }
    console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
  }

  switchProject() {
    // const projectIndex = this.projects.findIndex((p) => p.id === projectId); // If this returns true, the function executed correctly and this function will return the index in projects[].
    // this.projects.splice(projectIndex, 1);
    this.switchHandler(this.circus.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );
  }
}

App.init();
