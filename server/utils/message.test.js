var expect = require('expect');
var {generateMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var obj = generateMessage('Bruno', 'This is a message');
    expect(obj.from).toBe('Bruno');
    expect(obj.text).toBe('This is a message');
    expect(obj.createdAt).toBeA('number');
  });
});
