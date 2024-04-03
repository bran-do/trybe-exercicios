// Utilize a estrutura a seguir nos exercícios dessa seção:
interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

// 1 - Crie uma interface chamada IModel que defina as operações básicas de um CRUD para a entidade Character.
interface IModel {
  create(character: Character): DbCharacter;
  getAll(): DbCharacter[];
  getById(id: number): DbCharacter | void;
  update(id: number, data: Character): DbCharacter | void;
  exclude(id: number): void;
};

// 2 - Crie uma classe LocalDbModel que implemente a interface IModel.
class LocalDbModel implements IModel {
  private static lastId = 0;

  private static newId() { return this.lastId++ };
  private static notFoundError() { throw new Error('Character not found.') };

  create(character: Character) {
    const newCharacter: DbCharacter = {
      id: LocalDbModel.newId(),
      name: character.name,
      specialMove: character.specialMove,
    };

    db.push(newCharacter);
    return newCharacter;
  }

  getAll() { return db }

  getById(id: number) {
    const character = db.find((char) => char.id === id);
    if (!character) { LocalDbModel.notFoundError() };
    return character;
  }

  update(id: number, data: Character) {
    const charIndex = db.findIndex((char) => char.id === id);
    const character = db[charIndex];
    if (!character) { LocalDbModel.notFoundError() };

    character.name = data.name;
    character.specialMove = data.specialMove;
    return character;
  }

  exclude(id: number) {
    const charIndex = db.findIndex((char) => char.id === id);
    if (db[charIndex] === undefined) { LocalDbModel.notFoundError() };

    db.splice(charIndex, 1);
    console.log('Character succesfully deleted.')
  }
};

