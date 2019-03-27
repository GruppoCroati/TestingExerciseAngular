import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterComponent } from './converter.component';

describe('ConverterComponent', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConverterComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('convertToNewton function returns correct value for 5 pounds', () => {
    let newton = component.convertToNewton(5);
    expect(newton).toEqual(22.241108);
  });

  it('convertToNewton function returns 0', () => {
    let newton = component.convertToNewton(0);
    expect(newton).toEqual(0);
  });

  it('convertToNewton function returns an error for null (poundsForce is null!)', () => {
    let newton = function(){component.convertToNewton(null)};    
    expect(newton).toThrowError("poundsForce is null!");
  });

  it('convertToNewton function returns an error (poundsForce can\'t be negative)', () => {
    let newton = function(){component.convertToNewton(-5)};    
    expect(newton).toThrowError("poundsForce can't be negative!");
  });

  it('convertToNewton function returns correct value for 1000 pounds', () => {
    let newton = component.convertToNewton(1000);
    expect(newton).toEqual(4448.2216);
  });

});
