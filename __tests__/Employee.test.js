const Employee = require('../lib/Employee');

test('create an Employee object', () => {
    const employee = new Employee('Ray', 0, 'ray@mail.com');

    expect(employee.name).toBe('Ray');
    expect(employee.id).toBe(0);
    expect(employee.email).toBe('ray@mail.com');
    expect(employee.getEmail()).toBe('mailto:ray@mail.com');
    expect(employee.getRole()).toBe('Employee');
});