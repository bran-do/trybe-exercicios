// Cálculo de lucro + impostos

let valorCusto = 100;
let valorVenda = 150;
let impostoSobreOCusto = valorCusto * 0.2;
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;
let lucroTotal = 1000 * lucro; // Enunciado pede para calcular lucro ao empresa vender mil produtos.

if (valorCusto < 0 || valorVenda < 0) {
    console.log("Erro: os valores inseridos são inváldos.");

}
else {
    console.log("O lucro é de", lucroTotal ,"ao vender um total de 1000 produtos.");
}