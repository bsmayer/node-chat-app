const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var str = isRealString(1);
    expect(str).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var str = isRealString('     ');
    expect(str).toBe(false);
  });

  it('should allow string with non-space', () => {
    var str = isRealString('  Room  ');
    expect(str).toBe(true);
  });
});
