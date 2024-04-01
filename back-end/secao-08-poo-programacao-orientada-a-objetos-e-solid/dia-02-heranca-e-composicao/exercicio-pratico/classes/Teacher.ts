import Employee from "../interfaces/Employee";
import Person from "./Person";
import Subject from "./Subject";

export default class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration: string;
  private _admissionDate: Date;

  constructor(
    name: string,
    birthDate: Date,
    private _salary: number,
    subject: Subject
  ) {
    super(name, birthDate);
    this._subject = subject;
    this.salary = _salary;
    this._admissionDate = new Date();
    this.registration = this.generateRegistration();
  };

  get subject(): Subject { return this._subject };
  set subject(newSubject: Subject) { this._subject = newSubject };

  get registration(): string { return this._registration };
  set registration(newRegistration: string) {
    if (newRegistration.length > 3) throw new Error('Registration must be 3 characters long');
    this._registration = newRegistration;
  };

  get salary(): number { return this._salary };
  set salary(newSalary) {
    if (newSalary < 0) throw new Error('Salary must be greater than 0');
    this._salary = newSalary;
  };

  get admissionDate() { return this._admissionDate };
  set admissionDate(date: Date) {
    const now = new Date();
    if (date > now) throw new Error("Date can't be in the future")
    this._admissionDate = date;
  };

  generateRegistration(): string {
    return Math.floor(100 + (999 - 100) * Math.random()).toString()
  };
}