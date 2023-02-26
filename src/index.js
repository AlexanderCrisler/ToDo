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
// This should be a class method
const createProject = () => {
	let project = document.createElement('div');
	project.class = 'project';
	
	return project;
}

createPage();
