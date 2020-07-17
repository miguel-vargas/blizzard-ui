import { CopperToGoldPipe } from './copper-to-gold.pipe';

describe('CopperToGoldPipe', () => {
  it('create an instance', () => {
    const pipe = new CopperToGoldPipe();
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    let pipe: CopperToGoldPipe;
    
    beforeEach(() => {
      pipe = new CopperToGoldPipe();
    });

    it('transform a string of copper to a number of gold', () => {
      const copperValue = 590000;
      const expectedGold = copperValue / 10000;

      const actualGold = pipe.transform(copperValue.toString());

      expect(actualGold).toEqual(expectedGold);
    });

    it('return NaN for non-number string input', () => {
      const returnValue = pipe.transform("TEST");

      expect(returnValue).toEqual(NaN);
    });
  });
});
