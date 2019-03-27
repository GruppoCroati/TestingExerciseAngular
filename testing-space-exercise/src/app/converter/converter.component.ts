import { Component, OnInit } from '@angular/core';
import { isNull } from 'util';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.sass']
})
export class ConverterComponent implements OnInit {

  CONVERSION_COEFFICIENT : number;

  constructor() {
    this.CONVERSION_COEFFICIENT = 4.4482216;
  }

  ngOnInit() { }

  convertToNewton(poundsForce : number) {
    if (isNull(poundsForce))
      throw new Error("poundsForce is null!");
      
    if (poundsForce < 0)
      throw new Error("poundsForce can't be negative!");

    return poundsForce * this.CONVERSION_COEFFICIENT;
  }

}
