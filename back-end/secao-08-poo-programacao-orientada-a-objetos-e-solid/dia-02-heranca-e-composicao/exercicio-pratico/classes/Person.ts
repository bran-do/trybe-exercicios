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
    if (newName.length < 3) throw new Error('Person name must be at least 3 characters long');
    this._name = newName;
  }

  get birthDate() {
    return this._birthDate;
  }

  set birthDate(date: Date) {
    const now = new Date();
    if (date > now && (now.getFullYear() - date.getFullYear() > 120)) throw new Error(
      "Date can't be in the future"
    );

    this._birthDate = date;
  }
};