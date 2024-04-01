import Person from './Person';

// 2. Cria uma classe que represente uma pessoa estudante para que ela herde da classe 'Person'
class Student extends Person {
  private _enrollment: string;
  private _examGrades: [number, number, number, number];
  private _assignmentGrades: [number, number];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment()
  };

  generateEnrollment() {
    return Math.floor(1000 + (9999 - 1000) * Math.random()).toString();
  }

  get enrollment(): string { return this._enrollment }

  get examGrades(): number[] { return this._examGrades }
  set examGrades(grades: [number, number, number, number]) {
    this._examGrades = grades;  
  }

  get assignmentGrades(): number[] { return this._assignmentGrades }
  set assignmentGrades(grades: [number, number]) {
    this._assignmentGrades = grades;
  }

  gradeSum() {
    const examGradesSum = this._examGrades.reduce((acc, curr) => acc + curr);
    const workGradesSum = this._assignmentGrades.reduce((acc, curr) => acc + curr);
    return examGradesSum + workGradesSum;
  }

  averageGrade() {
    const gradesSum = this.gradeSum();
    return gradesSum / 6;
  }
};