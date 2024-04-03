/* Para fixar
Suponha que você está modelando os personagens do jogo de luta multijogadores Super Smash Bros. No jogo, há personagens de alcances variados e movimentos especiais variados. Vence a pessoa que acumulou mais pontos na partida.
*/

// 1 - Crie uma classe abstrata Character que tenha os métodos abstratos talk(): void e specialMove(): void.
abstract class Character {
  constructor(public name: string) {};

  abstract talk(): void;
  abstract specialMove(): void;
};

// 2 - Crie a classe concreta MeleeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe. A lógica da função em si pode ser simulada - retorne um console.log() dizendo o que ela faz!
class MeleeCharacter extends Character {
  constructor(public name: string) { super(name) };

  talk() { console.log(`${this.name} diz: "Me chamo ${this.name} e sou terrivelmente forte!`) };
  specialMove() { console.log(`${this.name} desfere um soco poderoso`) };
};

// 3 - Crie a classe concreta LongRangeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe.
class LongRangeCharacter extends Character {
  constructor(public name: string) { super(name) };

  talk() { console.log(`${this.name} diz: "Ninguém se esconde das flechas de ${this.name}.`) };
  specialMove() { console.log(`${this.name} atira uma chuva de flechas` )};
};

// 4 - Agora instancie as classes filhas com os personagens Yoshi e Samus, com seus respectivos specialMoveName e chame os métodos talk e specialMove para apresentar o personagem e seus respectivos ataques especiais.
const yoshi = new MeleeCharacter('Yoshi');
yoshi.talk();
yoshi.specialMove();

const samus = new LongRangeCharacter('Samus');
samus.talk();
samus.specialMove();