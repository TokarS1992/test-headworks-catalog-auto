import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor(
      private http: HttpClient
  ) {}

  public getAutos(): Observable<any> {
      return this.http.get('/api/autos').pipe(
          delay(400),
          map(data => {
              return data;
          })
      );
  }

  public getAutoBySlug(slug?: string) {
      return this.http.get(`/api/autos?title=${slug}`).pipe(
          delay(400),
          map(data => {
              console.log(data);
              return data;
          })
      );
  }
}
