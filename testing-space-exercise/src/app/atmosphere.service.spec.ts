import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';

import { AtmosphereService } from './atmosphere.service';

describe('AtmosphereService', () => {
  let service: AtmosphereService;
  let forces: number[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(AtmosphereService);
    forces = [];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return forces in Newton', () => {
    forces = service.getDataSync();
    expect(forces.length).toBe(8);
  });

  it('should return forces in Newton through observable', fakeAsync(() => {
    service.getDataAsync()
      .subscribe( value => { forces.push(value) }
    );

    tick(500);

    expect(forces.length).toBe(8);
  }));
});
