var expect = require('expect');
var {Users} = require('./users');

describe('Users', () => {

  var users;
  beforeEach(() => {
    users = new Users();

    users.users = [
      {
        id: '1',
        name: 'Mike',
        room: 'Node course'
      },
      {
        id: '2',
        name: 'Jen',
        room: 'React course'
      },
      {
        id: '3',
        name: 'Julie',
        room: 'Node course'
      }
    ];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Bruno',
      room: 'Room 1'
    }
    users.addUser('123', 'Bruno', 'Room 1');

    expect(users.users.length).toBe(1);
    expect(users.users).toEqual([user]);
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node course');
    expect(userList.length).toBe(2);
    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for React course', () => {
    var userList = users.getUserList('React course');
    expect(userList.length).toBe(1);
    expect(userList).toEqual(['Jen']);
  });

  it('should remove a user', () => {
    var user = users.users[0];
    users.removeUser(user.id);
    expect(users.users.length).toBe(2);
    expect(users.users).toNotInclude(user);
  });

  it('should not remove a user', () => {
    var userId = '4';
    var user = users.removeUser(userId);
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '4';
    var user = users.getUser(userId);
    expect(user).toNotExist();
  });

});
