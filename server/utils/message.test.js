var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var obj = generateMessage('Bruno', 'This is a message');
    expect(obj.from).toBe('Bruno');
    expect(obj.text).toBe('This is a message');
    expect(obj.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var obj = generateLocationMessage('Bruno', '1', '2');
    expect(obj.url).toBe('https://www.google.com/maps?q=1,2');
    expect(obj.from).toBe('Bruno');
  });
});
