import { TestBed } from '@angular/core/testing';

import { ReverseService } from './reverse.service';

describe('ReverseService', () => {

  let service: ReverseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(ReverseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('qwerty become ytrewq', () => {
    expect(service.transform("qwerty")).toBe("ytrewq");
  });

  it('ytrewq not become ytrssewq', () => {
    expect(service.transform("ytrewq")).not.toBe("ytrssewq");
  });

  it('buondi not become idnoubb', () => {
    expect(service.transform("buondi")).not.toBe("idnoubb");
  });

  it('void string is still void string', () => {
    expect(service.transform("")).toBe("");
  });

  it('void string is not a equal a space', () => {
    expect(service.transform("")).not.toBe(" ");
  });

  it('thow error if null or undefined', () => {
    expect(function () { service.transform(null) }).toThrowError("It's not a string! The value is null or undefined!");
  });
});
