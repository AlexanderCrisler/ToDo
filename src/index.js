import './style.css';

const createPage = () => {
	let page = document.createElement('div');
	page.id = 'mainPage';
	page.textContent= 'Hello World!';

	document.body.appendChild(page);
	document.body.appendChild(projectsList());
};

const projectsList = () => {
	let projects = document.createElement('div');
	projects.id = 'projectsList';

	// Add list of projects
	
	// Add new project button
	let addButton = document.createElement('div');
	addButton.textContent = '+';
	addButton.addEventListener(onclick, createProject());

	projects.appendChild(addButton);

	return projects;
};

// TODO: create Project class
// This should be a class method under the ProjectDisplay
const createProject = () => {
	let project = document.createElement('div');
	project.class = 'project';
	
	return project;
}

// Create Project and Todo DOM classes to construct html for objects
// ProjectDisplay
// TodoDisplay

// Add get function
class Project {
	constructor(name) {
		this.name = name;
		this.items = [];
	}

	// setName()
	// addItem()
	// deleteItem()
	// getName()
	// getItems()
}

// Add get function
class Todo {
	constructor(title, description="", dueDate=null, priority=null) {
		this.title = title;
		this.status = "unchecked";
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
	}

	// setStatus()
	// getStatus()
	// setPriority()
	// setDescription()
	// setTitle()
	// setDueDate()
}

createPage();
