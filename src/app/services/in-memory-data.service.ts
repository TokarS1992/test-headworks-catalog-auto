import { InMemoryDbService } from 'angular-in-memory-web-api';
import Random from '../utils/randomInt';

const autosLength = 45;
const maxMileage = 100000;

const autoParams: object = {
    typeCarcases: ['Седан', 'Минивэн', 'Хэтчбек', 'Купе', 'Пикап'],
    typeOils: ['Седан', 'Минивэн', 'Хэтчбек', 'Купе', 'Пикап'],
    colors: ['Белый', 'Черный', 'Синий', 'Серый', 'Зеленый', 'Жетлый', 'Крысный', 'Коричневый', 'Асфальт'],
    statusCars: ['Не бит', 'Не крашен', 'Не на ходу', 'Гаражное хранение'],
    transmissions: ['Механическая', 'Автоматическая', 'Адаптивная', 'Вариатор'],
    marks: ['BMW', 'Lexus', 'Opel', 'Acura', 'Dacia', 'Chevrolet', 'Citroen', 'Dodge', 'Kia', 'Jeep', 'Pontiac', 'Volvo', 'Toyota', 'Tesla']
};

export class InMemoryDataService implements InMemoryDbService {

  constructor() {}

  createDb() {
      const autos = [];

      for (let a = 0; a < autosLength; a++) {
          const auto = {};

          for (const p in autoParams) {
              if (autoParams.hasOwnProperty(p)) {
                  const keys = autoParams[p];
                  auto[p.replace(/s$/ig, '')] = keys[Random(0, keys.length - 1)];
              }
          }

          auto['mileage'] = Random(0, maxMileage);
          auto['id'] = a;

          autos.push(auto);
      }

      return {
          autos: autos
      };
  }
}
