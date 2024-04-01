// 1. Crie uma interface 'Logger'
interface Logger {
  // 2. 'Logger' deve possuir um método 'log' que recebe um parâmetro do tipo string e não retorna nada
  log(param: string): void;
};

// 3. Cria uma classe 'ConsoleLogger' que implementa 'Logger' e implemente o método 'log'
class ConsoleLogger implements Logger {
  log(param: string) {
    console.log(`Logger1: ${param}`)
  }
};

// 4. Cria uma classe 'ConsoleLogger2' idêntica à classe anterior
class ConsoleLogger2 implements Logger {
  log(param: string) {
    // 5. Diferencie os métodos 'log' de 'ConsoleLogger2' e 'ConsoleLogger'
    console.log(`Logger2: ${param}`)
  }
};

// 6. Crie uma interface 'Database'
interface Database {
  // 7. 'Database' deve possuir um atributo do tipo 'Logger'
  logger: Logger;
  // 8. 'Database' deve possuir um método 'save', que recebe 'key' e 'value', ambos do tipo string; e não retorna nada
  save(key: string, value: string): void;
};

// 9. Crie uma classe 'ExampleDatabase' que implementa 'Database'
class ExampleDatabase implements Database {

  // 10. 'ExampleDatabase' deve receber o 'Logger' como parâmetro construtor, que terá como valor padrão 'ConsoleLogger'
  constructor(public logger: Logger = new ConsoleLogger()) {};

  // 11. Dentro do método 'save', chame a função 'log' do 'Logger' do 'Database' para fazer o log dos parâmetros passados para o 'save'
  save(key: string, value: string) {
    this.logger.log(`SAVING Key: ${key} -- Value: ${value}`);
  }
};

// 12. Crie um objeto para cada um dos Loggers
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

// 13. Crie três objetos de 'ExampleDatabase': os dois primeiros recebem os Loggers; o último não recebe nada
const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

// 14. Utilize todos eles para salvar um conteúdo fictício
database1.save('1', 'Abacaxi');
database2.save('1', 'Banana');
database3.save('2', 'Ameixa');