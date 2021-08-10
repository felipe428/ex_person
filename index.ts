import { Person } from './person';

let person = new Person('Felipe', 'Santos', 'Silva', 20, true);

const fullname: HTMLElement = document.getElementById('fullname');
fullname.innerHTML = person.getFullName();

const age: HTMLElement = document.getElementById('age');
age.innerHTML = 'Idade: ' + person.getAge();

const year: HTMLElement = document.getElementById('year');
year.innerHTML = 'Ano de nascimento: ' + person.getBirthdayYear();
