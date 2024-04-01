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