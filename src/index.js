import './style.css';

const createPage = () => {
	let page = document.createElement('div');
	page.id = 'mainPage';
	page.textContent= 'Hello World!';

	document.body.appendChild(page);
};

createPage();
