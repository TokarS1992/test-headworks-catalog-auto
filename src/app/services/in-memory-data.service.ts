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

const randomUrlCar = (randomNumber) => {
    return `https://source.unsplash.com/collection/${collectionID}/?sig=${randomNumber}`;
};

const callBackLoadAllPhotos = (photos) => {
    const autos = [];
    const generateAuto = generateObjectCar();

    for (let a = 0; a < photos.length; a++) {
        autos.push(generateAuto(photos[a].url));
    }

    return autos;
};

const generateObjectCar = () => {
    const auto = {};
    let callFunc = 0;

    return function (url) {
        for (const p in autoParams) {
            if (autoParams.hasOwnProperty(p)) {
                const keys = autoParams[p];
                auto[p.replace(/s$/ig, '')] = keys[Random(0, keys.length - 1)];
            }
        }

        callFunc++;

        return {
            ...auto,
            mileage: Random(0, maxMileage),
            id: callFunc,
            url: url,
            title:  `${auto['mark']} ${RandomStr()}`
        };
    };
};

export class InMemoryDataService implements InMemoryDbService {

  constructor() {}

  createDb() {
      const photos = [];

      for (let f = 0; f < autosLength; f++) {
          const currentRandomNumber = Math.floor(Math.random() * numImagesAvailable);

          // while (randomNumbersColection.indexOf(currentRandomNumber) > 0) {
          //     currentRandomNumber = Math.floor(Math.random() * numImagesAvailable);
          // }
          // randomNumbersColection.push(currentRandomNumber);
          photos.push(fetch(randomUrlCar(currentRandomNumber)));
      }

      return Promise.all(photos).then(dataPhotos => callBackLoadAllPhotos(dataPhotos)).then(dataAutos => {
          return {
              autos: dataAutos,
              'user-info': [{
                  id: 1,
                  email: 'sergey.tokar1992@gmail.com',
                  city: 'Днепр',
                  address: 'проспект Поля, дом 135, кв. 13',
                  avatarUrl: '',
                  name: 'Sergey',
                  surname: 'Tokar'
              }],
              cities: [
                  {name: 'Днепр', id: 1},
                  {name: 'Киев', id: 2},
                  {name: 'Львов', id: 3},
                  {name: 'Харьков', id: 4},
                  {name: 'Винницы', id: 5},
                  {name: 'Другой', id: 6}
              ]
          };
      });
  }
}
