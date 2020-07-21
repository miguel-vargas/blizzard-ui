import { EpochToDatePipe } from './epoch-to-date.pipe';

describe('EpochToDatePipe', () => {
  it('create an instance', () => {
    const pipe = new EpochToDatePipe();
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    let pipe: EpochToDatePipe;
    
    beforeEach(() => {
      pipe = new EpochToDatePipe();
    });

    it('transform a date string to a date object', () => {
      const dateValue = 1595301330000;
      const expectedDate = new Date(dateValue);

      const actualDate = pipe.transform(dateValue.toString());

      expect(actualDate.getTime()).toEqual(expectedDate.getTime());
    });

    it('return Date(Invalid Date) for non-number string input', () => {
      const returnValue = pipe.transform("TEST");

      expect(isNaN(returnValue.getTime())).toBeTrue();
    });
  });
});
