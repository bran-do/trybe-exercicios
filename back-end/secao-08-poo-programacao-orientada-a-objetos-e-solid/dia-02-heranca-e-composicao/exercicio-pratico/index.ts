class Student {
  registration: string;
  name: string;
  testGrades: [number, number, number, number];
  workGrades: [number, number];

  constructor(
    registration: string,
    name: string,
    testGrades: [number, number, number, number],
    workGrades: [number, number]
  ) {
    this.registration = registration;
    this.name = name;
    this.testGrades = testGrades;
    this.workGrades = workGrades;
  }

  gradeSum() {
    const testGradesSum = this.testGrades.reduce((acc, curr) => acc + curr);
    const workGradesSum = this.workGrades.reduce((acc, curr) => acc + curr);
    return testGradesSum + workGradesSum;
  }

  averageGrade() {
    const gradesSum = this.gradeSum();
    return gradesSum / 6;
  }
};

// 1. Crie uma nova classe cujos objetos representarão uma pessoa no sistema
class Person {
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

class Costumer {
  name: string;
}

class Product {
  name: string;
  price: number;
}

class Order {
  costumer: Costumer;
  products: Product[];
  paymentMethod: string;
  discount?: number;

  getTotal() {
    const productPrices = this.products.map((product) => product.price);
    const totalAmount = productPrices.reduce((acc, curr) => acc + curr);
    return totalAmount;
  }

  getTotalWithDiscount() {
    if (this.discount) {
      const totalAmount = this.getTotal();
      const discountToApply = this.discount * totalAmount;
      return totalAmount - discountToApply;
    }

    return this.getTotal();
  }
}