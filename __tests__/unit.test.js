import {
  isPhoneNumber,
  isEmail,
  isStrongPassword, 
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('isPhoneNumber', () => {
  test('valid phone number with area code and dash', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('valid phone number with parentheses', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('invalid phone number with letters', () => {
    expect(isPhoneNumber('abc-def-ghij')).toBe(false);
  });

  test('invalid phone number with too few digits', () => {
    expect(isPhoneNumber('123-45-6789')).toBe(false);
  });
});

describe('isEmail', () => {
  test('valid email with letters and domain', () => {
    expect(isEmail('test@example.com')).toBe(true);
  });

  test('valid email with underscores', () => {
    expect(isEmail('user_name@domain.com')).toBe(true);
  });

  test('invalid email missing "@"', () => {
    expect(isEmail('username.com')).toBe(false);
  });

  test('invalid email with multiple @ symbols', () => {
    expect(isEmail('user@@example.com')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('valid password starting with letter', () => {
    expect(isStrongPassword('a1234')).toBe(true);
  });

  test('valid password with underscores and letters', () => {
    expect(isStrongPassword('Z_abc123')).toBe(true);
  });

  test('invalid password starting with number', () => {
    expect(isStrongPassword('1abc123')).toBe(false);
  });

  test('invalid password with special characters', () => {
    expect(isStrongPassword('abc$123')).toBe(false);
  });
});

describe('isDate', () => {
  test('valid date with single digit month and day', () => {
    expect(isDate('1/1/2020')).toBe(true);
  });

  test('valid date with two-digit month and day', () => {
    expect(isDate('12/31/1999')).toBe(true);
  });

  test('invalid date with wrong separator', () => {
    expect(isDate('12-31-1999')).toBe(false);
  });

  test('invalid date with short year', () => {
    expect(isDate('12/31/99')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('valid 3-digit hex with #', () => {
    expect(isHexColor('#abc')).toBe(true);
  });

  test('valid 6-digit hex without #', () => {
    expect(isHexColor('a1b2c3')).toBe(true);
  });

  test('invalid hex with wrong length', () => {
    expect(isHexColor('#abcd')).toBe(false);
  });

  test('invalid hex with invalid characters', () => {
    expect(isHexColor('#12g45z')).toBe(false);
  });
});
