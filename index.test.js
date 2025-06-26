const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it("Handles o'clock - 7:00", () => {
    const timeInWords = convertTimeToWords('7:00');
    expect(timeInWords).toBe("seven o'clock");
  });

  it('Handles times before 30 mins - 5:15', () => {
    const timeInWords = convertTimeToWords('5:15');
    expect(timeInWords).toBe("quarter past five");
  });

  it('Handles times before 30 mins - 9:23', () => {
    const timeInWords = convertTimeToWords('9:23');
    expect(timeInWords).toBe("twenty three past nine");
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles times after 30 mins - 4:52', () => {
    const timeInWords = convertTimeToWords('4:52');
    expect(timeInWords).toBe("eight to five");
  });
});
