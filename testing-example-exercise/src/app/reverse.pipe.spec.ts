import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  
  let pipe: ReversePipe;

  beforeEach(() => {
    pipe = new ReversePipe();
  });

  it('create an instance', () => {

    expect(pipe).toBeTruthy();
  });

  it('qwerty become ytrewq', () => {

    expect(pipe.transform("qwerty")).toBe("ytrewq");
  });

  it('ytrewq not become ytrssewq', () => {

    expect(pipe.transform("ytrewq")).not.toBe("ytrssewq");
  });

  it('buondi not become idnoubb', () => {

    expect(pipe.transform("buondi")).not.toBe("idnoubb");
  });

  it('void string is still void string', () => {

    expect(pipe.transform("")).toBe("");
  });

  it('void string is not a equal a space', () => {

    expect(pipe.transform("")).not.toBe(" ");
  });

});
