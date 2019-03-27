import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  constructor() { }

  round4(value: number, exp: number): number {
    return Math.round(value * Math.pow(10, exp)) / Math.pow(10, exp);
  }
}
