const Manager = require('../lib/Manager');

test('create an Manager object', () => {
    const manager = new Manager('Ray', 0, 'ray@mail.com', '(816)777-7729');

    expect(manager.name).toBe('Ray');
    expect(manager.id).toBe(0);
    expect(manager.email).toBe('ray@mail.com');
    expect(manager.officeNumber).toBe('(816)777-7729');
    expect(manager.getEmail()).toBe('mailto:ray@mail.com');
    expect(manager.getRole()).toBe('Manager');
});