import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

import { Car } from '../interfaces/car';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(autos: any, parameters?: any): Car[]|Car|any[] {
        if (_.compact(_.values(parameters)).length === 0) return autos;

        let results: Car[] = autos;

        for (const key in parameters) {
            if (parameters.hasOwnProperty(key)) {
                if (parameters[key]) {
                    results = results.filter((car: Car) => {
                        if (key === 'title' &&
                            car.title.toLowerCase().includes(parameters[key].toLowerCase().trim())
                        ) {
                            return car;
                        }
                        return car[key] === parameters[key];
                    });
                }
            }
        }

        if ( results.length === 0 ) return [-1];

        return results;
    }
}
