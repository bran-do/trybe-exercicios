// Cálculo de salário líquido com descontos do INSS e do Imposto de Renda

let salarioBruto = 3000;
let salarioBase = 0;
let IR = 0;
let salarioLiquido = 0;

// Cálculo do salário-base:
if (salarioBruto <= 1556.94) {
    salarioBase = salarioBruto - (0.08 * salarioBruto);

}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioBase = salarioBruto - (0.09 * salarioBruto);

}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioBase = salarioBruto - (0.11 * salarioBruto);

}
else if (salarioBruto > 5189.82) {
    salarioBase = salarioBruto + 570.88;

}

// Cálculo do imposto de renda:
if (salarioBase <= 1903.88) {
    IR = 0;

}
else if (salarioBase >= 1903.89 && salarioBase <= 2826.65) {
    IR = (0.075 * salarioBase) - 142.8;

}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    IR = (0.15 * salarioBase) - 354.8;

}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    IR = (0.225 * salarioBase) - 636.13;

}
else if (salarioBase > 4664.68) {
    IR = (0.275 * salarioBase) - 869.36;

}

// Càlculo do salário líquido:
salarioLiquido = salarioBase - IR;

console.log("Com os descontos do INSS e do Imposto de Renda, seu salário ficara em R$", salarioLiquido);