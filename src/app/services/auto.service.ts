import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';

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
          map(data => {
              return data;
          })
      );
  }

  public getAutoBySlug(slug?: string) {
      const localCurrentAuto = localStorage.getItem('currentAuto');

      if (!localCurrentAuto) {
          return this.http.get(`/api/autos?title=${slug}`).pipe(
              delay(delayLoad),
              map(data => {
                  localStorage.setItem('currentAuto', JSON.stringify(data));
                  return data;
              })
          );
      }
      return of(JSON.parse(localCurrentAuto));
  }
}
