import { Person } from './person';

let person = new Person('Felipe', 'Santos', 'Silva', 19);
const appParagraph: HTMLElement = document.getElementById('app.fullname');
appParagraph.innerHTML = person.getFullName();

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
