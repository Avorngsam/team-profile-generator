const Intern = require('../lib/Intern');

test('create an Intern object', () => {
    const intern = new Intern('Ray', 0, 'ray@mail.com', 'Rockhurst' );

    expect(intern.name).toBe('Ray');
    expect(intern.id).toBe(0);
    expect(intern.email).toBe('ray@mail.com');
    expect(intern.getEmail()).toBe('mailto:ray@mail.com');
    expect(intern.getSchool()).toBe('Rockhurst');
    expect(intern.getRole()).toBe('Intern');
});