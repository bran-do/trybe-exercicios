// 1. Crie uma classe cujos objetos representarão uma pessoa no sistema
export default class Person {
  constructor(
    private _name: string,
    private _birthDate: Date
  ) {};

  get name() {
    return this._name
  }

  set name(newName: string) {
    newName.length >= 3 && (this._name = newName);
  }

  get birthDate() {
    return this._birthDate;
  }

  set birthDate(date: Date) {
    const now = new Date();
    if (date <= now && (now.getFullYear() - date.getFullYear() <= 120)) {
      this._birthDate = date;
    }
  }
};