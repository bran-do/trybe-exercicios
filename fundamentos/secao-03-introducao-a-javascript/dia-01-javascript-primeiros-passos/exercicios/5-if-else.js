// É isto um triângulo?

let a = 10;
let b = 20;
let c = 149;
let soma = a + b + c

if (soma === 180) {
    console.log(true);
}
else if (a <= 0 || b <= 0 || c <= 0) {
    console.log("O valor de pelo menos um dos ângulos é inválido.")
}
else if (soma !== 180) {
    console.log(false);
}