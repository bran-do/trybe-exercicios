export default class Subject {
  constructor(private _name: string) {
    this.name = _name;
  }

  get name(): string { return this._name };
  set name(newName:string) {
    newName.length >= 3 && (this._name = newName);
  }
};