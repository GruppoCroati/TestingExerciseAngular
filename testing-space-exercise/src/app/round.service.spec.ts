import { RoundService } from './round.service';

describe('RoundService', () => {
  let service: RoundService;
  let result: number;

  beforeEach(() => {
    service = new RoundService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should transform 22.241108 to 22.2411', () => {
    result = service.round4(22.241108, 4);
    expect(result).toBe(22.2411);
  });

  it('should transform 22.24115 to 22.2412', () => {
    result = service.round4(22.24115, 4);
    expect(result).toBe(22.2412);
  });

  it('should transform 22 to 22', () => {
    result = service.round4(22, 4);
    expect(result).toBe(22);
  });

  it('should transform 22,21334 to 22,2133', () => {
    result = service.round4(22.21334, 4);
    expect(result).toBe(22.2133);
  });

  
  it('should transform 0.00001 to 0.0000', () => {
    result = service.round4(22, 4);
    expect(result).toBe(22);
  });

  
  it('should transform 123214,99999 to 123215,0000', () => {
    result = service.round4(123214.99999, 4);
    expect(result).toBe(123215.0000);
  });

  
  it('should transform -22 to -22', () => {
    result = service.round4(-22, 4);
    expect(result).toBe(-22);
  });

});
