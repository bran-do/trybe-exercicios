/*
1. Crie uma variável chamada “weekDay” que receba a string “quarta-feira”.

2. Utilizando if/else, implemente as seguintes condicionais:

    - Se a variável “weekDay” for “segunda-feira”, “terça-feira”, “quarta-feira”, “quinta-feira” ou “sexta-feira”, imprima “Oba, mais um dia de aprendizado na Trybe >:D”.

    - Se a variável for algum dia de fim de semana, imprima “FINALMENTE, descanso merecido! UwU!”.

Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. 
*/

let weekDay = "domingo";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else if (weekDay === "sábado" || weekDay === "domingo") {
    console.log("FINALMENTE, descanso merecido! UwU!");
}