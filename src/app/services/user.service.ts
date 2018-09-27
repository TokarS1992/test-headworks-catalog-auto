import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';

import { User, IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(
        private http: HttpClient
    ) {}

    getUserInfo(): Observable<User> {
        return this.http.get('/api/user-info').pipe(
            map((data: IUser) => new User(data))
        );
    }

    getCities(): Observable<any> {
        return this.http.get('/api/cities');
    }

    updateUserInfo(): void {

    }
}
