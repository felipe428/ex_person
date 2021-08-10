import { Person } from './person';

let person = new Person('Felipe', 'Santos', 'Silva', 20, true);

const fullName: HTMLElement = document.getElementById('fullname');
fullName.innerHTML = person.getFullName();

const firstName: HTMLElement = document.getElementById('firstname');
firstName.innerHTML = 'Primeiro nome: ' + person.getFirstName();

const middleName: HTMLElement = document.getElementById('middlename');
middleName.innerHTML = 'Nome do meio: ' + person.getMiddleName();

const lastName: HTMLElement = document.getElementById('lastname');
lastName.innerHTML = 'Último nome: ' + person.getLastName();

const age: HTMLElement = document.getElementById('age');
age.innerHTML = 'Idade: ' + person.getAge();

const year: HTMLElement = document.getElementById('year');
year.innerHTML = 'Ano de nascimento: ' + person.getBirthdayYear();
