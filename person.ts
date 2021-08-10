export class Person {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  bdayPassed: boolean;

  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    age: number,
    bdayPassed: boolean
  ) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.age = age;
    this.bdayPassed = bdayPassed;
  }

  getFullName() {
    return `Nome completo: ${this.firstName} ${this.middleName} ${
      this.lastName
    }`;
  }

  getAge() {
    return this.age;
  }

  getBirthdayYear() {
    if (this.bdayPassed == true) {
      return new Date().getFullYear() - this.age;
    } else {
      return new Date().getFullYear() - (this.age + 1);
    }
  }
}
