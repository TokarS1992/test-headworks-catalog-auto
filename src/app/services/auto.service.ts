import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';

import { Car } from '../interfaces/car';

const delayLoad = 400;

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor(
      private http: HttpClient
  ) {}

  public getAutos(): Observable<any> {
      return this.http.get('/api/autos').pipe(
          delay(delayLoad),
          map(data => data)
      );
  }

  public getAutoBySlug(slug?: string): Observable<Car> {
      const localCurrentAuto = localStorage.getItem('currentAuto');

      if (!localCurrentAuto) {
          return this.http.get(`/api/autos?title=${slug}`).pipe(
              delay(delayLoad),
              map((data: Car) => {
                  localStorage.setItem('currentAuto', JSON.stringify(data));
                  return data;
              })
          );
      }
      return of(JSON.parse(localCurrentAuto));
  }
}
