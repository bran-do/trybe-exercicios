import { ModelResponse } from "./ModelResponseType";

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
  create(character: Character): ModelResponse<DbCharacter>;
  getAll(): ModelResponse<DbCharacter[]>;
  getById(id: number): ModelResponse<DbCharacter>;
  update(id: number, data: Character): ModelResponse<DbCharacter>;
  exclude(id: number): ModelResponse<void>;
};

// 2 - Crie uma classe LocalDbModel que implemente a interface IModel.
class LocalDbModel implements IModel {
  private static lastId = 0;

  private static newId() { return this.lastId++ };
  private static notFoundResponse = { status: 404, data: { message: 'Character not found.' } };

  create(character: Character) {
    const newCharacter: DbCharacter = {
      id: LocalDbModel.newId(),
      name: character.name,
      specialMove: character.specialMove,
    };

    db.push(newCharacter);
    return { status: 201, data: newCharacter };
  }

  getAll() { return { status: 200, data: db } };

  getById(id: number) {
    const character = db.find((char) => char.id === id);
    if (!character) return LocalDbModel.notFoundResponse;

    return { status: 200, data: character };
  }

  update(id: number, data: Character) {
    const charIndex = db.findIndex((char) => char.id === id);
    const character = db[charIndex];
    if (!character) return LocalDbModel.notFoundResponse;

    character.name = data.name;
    character.specialMove = data.specialMove;
    return { status: 200, data: character };
  }

  exclude(id: number) {
    const charIndex = db.findIndex((char) => char.id === id);
    if (db[charIndex] === undefined) return LocalDbModel.notFoundResponse;

    db.splice(charIndex, 1);
    return { status: 200, data: { message: `Character of id ${id} deleted.` }};
  }
};

