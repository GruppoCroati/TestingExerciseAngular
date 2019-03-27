import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ReverseService {

  constructor() { }

  transform(value: string): string {

    if(isNullOrUndefined(value))
        throw new Error("It's not a string! The value is null or undefined!")

    return value.split("").reverse().join("");
  }

}
