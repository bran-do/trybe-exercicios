// Conversor de média numérica em conceito por letra

let percentage = 49;

if (percentage < 0 || percentage > 100) {
    percentage = 'Número inválido.';
}

else if (percentage >= 90) {
    percentage = 'A';

}
else if (percentage >= 80) {
    percentage = 'B';

}
else if (percentage >= 70) {
    percentage = 'C';

}
else if (percentage >= 60) {
    percentage = 'D';

}
else if (percentage >= 50) {
    percentage = 'E';

}
else if (percentage < 50) {
    percentage = 'F';

}

console.log(percentage);