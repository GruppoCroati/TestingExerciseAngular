import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AtmosphereService {

  forces: number[];

  constructor() {
    this.forces = [20, 50, 70, 80, 100, 120, 160, 220];
  }

  getDataSync() : number[]{
    return this.forces;
  }

  getDataAsync() : Observable<number>{
    return from(this.forces).pipe(delay(500));
  }
}
