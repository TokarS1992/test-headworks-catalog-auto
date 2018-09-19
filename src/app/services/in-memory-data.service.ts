import { InMemoryDbService } from 'angular-in-memory-web-api';
import Random from '../utils/randomInt';
import RandomStr from '../utils/randomStr';

const autosLength = 45;
const maxMileage = 100000;
const collectionID = 492901;
const numImagesAvailable = 258;

export const autoParams = {
    typeCarcases: ['Седан', 'Минивэн', 'Хэтчбек', 'Купе', 'Пикап'],
    typeOils: ['Бензин', 'Дизель', 'Другой', 'Гибрид', 'Электро'],
    colors: ['Белый', 'Черный', 'Синий', 'Серый', 'Зеленый', 'Жетлый', 'Крысный', 'Коричневый', 'Асфальт'],
    statusCars: ['Не бит', 'Не крашен', 'Не на ходу', 'Гаражное хранение'],
    transmissions: ['Механическая', 'Автоматическая', 'Адаптивная', 'Вариатор'],
    marks: ['BMW', 'Lexus', 'Opel', 'Acura', 'Dacia', 'Chevrolet', 'Citroen', 'Dodge', 'Kia', 'Jeep', 'Pontiac', 'Volvo', 'Toyota', 'Tesla']
};

function randomUrlCar(randomNumber) {
    return `https://source.unsplash.com/collection/${collectionID}/?sig=${randomNumber}`;
}

export class InMemoryDataService implements InMemoryDbService {

  constructor() {}

  createDb() {
      const photos = [];
      const autos = [];
      // const randomNumbersColection = [];

      for (let f = 0; f < autosLength; f++) {
          const currentRandomNumber = Math.floor(Math.random() * numImagesAvailable);

          // while (randomNumbersColection.indexOf(currentRandomNumber) > 0) {
          //     currentRandomNumber = Math.floor(Math.random() * numImagesAvailable);
          // }
          // randomNumbersColection.push(currentRandomNumber);
          photos.push(fetch(randomUrlCar(currentRandomNumber)));
      }

      return Promise.all(photos).then(res => {
          for (let a = 0; a < res.length; a++) {
              const auto = {};

              for (const p in autoParams) {
                  if (autoParams.hasOwnProperty(p)) {
                      const keys = autoParams[p];
                      auto[p.replace(/s$/ig, '')] = keys[Random(0, keys.length - 1)];
                  }
              }

              auto['mileage'] = Random(0, maxMileage);
              auto['id'] = a;
              auto['url'] = res[a].url;
              auto['title'] = `${auto['mark']} ${RandomStr()}`;

              autos.push(auto);
          }

          return {
              autos: autos
          };
      });
  }
}
