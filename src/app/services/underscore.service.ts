import { Injectable } from '@angular/core';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class UnderscoreService {

  constructor() {
    return _;
  }
}
