import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';

import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(
        private http: HttpClient
    ) {}

    getUserInfo(): Observable<IUser> {
        return this.http.get('/api/user-info').pipe(
            map((data: IUser) => data[0])
        );
    }

    getCities(): Observable<any> {
        return this.http.get('/api/cities');
    }

    updateUserInfo(dataInfo: IUser|any): Observable<IUser> {
        return this.http.put(`/api/user-info/${dataInfo.id}`, dataInfo).pipe(
            delay(500),
            map((data: IUser) => data)
        );
    }
}
