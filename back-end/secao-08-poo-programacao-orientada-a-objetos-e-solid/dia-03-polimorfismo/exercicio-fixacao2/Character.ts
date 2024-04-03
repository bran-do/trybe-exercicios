import { ServiceResponse } from "./ServiceResponseType";

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
  exclude(id: number): string | void;
};

// 2 - Crie uma classe LocalDbModel que implemente a interface IModel.
class LocalDbModel implements IModel {
  private static lastId = 0;

  private static newId() { return this.lastId++ };

  create(character: Character) {
    const newCharacter: DbCharacter = {
      id: LocalDbModel.newId(),
      name: character.name,
      specialMove: character.specialMove,
    };

    db.push(newCharacter);
    return newCharacter;
  }

  getAll() { return db };

  getById(id: number) {
    const character = db.find((char) => char.id === id);
    if (!character) return undefined;
    return character;
  }

  update(id: number, data: Character) {
    const charIndex = db.findIndex((char) => char.id === id);
    const character = db[charIndex];
    if (!character) return undefined;

    character.name = data.name;
    character.specialMove = data.specialMove;
    return character;
  }

  exclude(id: number) {
    const charIndex = db.findIndex((char) => char.id === id);
    if (db[charIndex] === undefined) return undefined;

    db.splice(charIndex, 1);
    return '';
  }
};

// 3 - Crie uma classe CharacterService que recebe como dependência em seu construtor uma instância do tipo LocalDbModel e a utilize em sua lógica de negócio.
// 4 - Refatore CharacterService para que possa receber uma instância de qualquer classe que implemente a interface IModel.
interface IService {
  create(character: Character): ServiceResponse<DbCharacter>;
  getAll(): ServiceResponse<DbCharacter[]>;
  getById(id: string): ServiceResponse<DbCharacter>;
  update(id: string, data: Character): ServiceResponse<DbCharacter>;
  exclude(id: string): ServiceResponse<string>;
}

class CharacterService implements IService {
  constructor(public model: IModel) {}

  private static notFoundError = { status: 'NOT_FOUND', data: { message: 'Character not found.' }};

  create(character: Character) {
    const newCharacter = this.model.create(character);
    if (!newCharacter) return CharacterService.notFoundError;
    return { status: 'CREATED', data: newCharacter };
  };

  getAll() {
    const characters = this.model.getAll();
    return { status: 'SUCCESSFUL', data: characters };
  };

  getById(id: string) {
    const character = this.model.getById(Number(id));
    if (!character) return CharacterService.notFoundError;
    return { status: 'SUCCESSFUL', data: character };
  };

  update(id: string, data: Character) {
    const updatedCharacter = this.model.update(Number(id), data);
    if (!updatedCharacter) return CharacterService.notFoundError;
    return { status: 'SUCCESSFUL', data: updatedCharacter };
  };

  exclude(id: string) {
    const data = this.model.exclude(Number(id));
    if (!data) return CharacterService.notFoundError;
    return { status: 'SUCCESSFUL', data };
  };
}