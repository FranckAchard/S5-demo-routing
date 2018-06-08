import { Injectable } from '@angular/core';
import REAL_DATA from './real-data';


@Injectable({
  providedIn: 'root'
})
export class RealService {

  listreals = REAL_DATA.reals;

  constructor() {
    // console.log(this.listreals);
  }
}
