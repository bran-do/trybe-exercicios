/* 5 - Crie um array de objetos e calcule a média de notas. 
Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes:
*/

// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
const expectedResult = [
 { name: 'Pedro Henrique', average: 7.8 },
 { name: 'Miguel', average: 9.2 },
 { name: 'Maria Clara', average: 8.8 },
];

const studentAverage = (studentsArray, gradesArray) => {
  const allGradesSum = gradesArray
    .map((grades) => grades
      .reduce((acc, curr) => acc + curr)
    );

  const allAverages = allGradesSum.map((sum) => sum / 5);

  const nameAndAverageArray = [];

  studentsArray.forEach((student) => nameAndAverageArray.push(
    {
      name: student,
      average: allAverages[students.indexOf(student)]
    }
  ))
  
  return nameAndAverageArray
}

console.log(`Resultado da função studentAverage: ${JSON.stringify(studentAverage(students, grades))}`);
console.log('');
console.log(`Resultado esperado: ${JSON.stringify(expectedResult)}`);
