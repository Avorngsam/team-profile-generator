const Engineer = require('../lib/Engineer');

test('create an Engineer object', () => {
    const engineer = new Engineer('Ray', 0, 'ray@mail.com', 'Atvorngsam');

    expect(engineer.name).toBe('Ray');
    expect(engineer.id).toBe(0);
    expect(engineer.email).toBe('ray@mail.com');
    expect(engineer.getEmail()).toBe('mailto:ray@mail.com');
    expect(engineer.getGithub()).toBe('https://github.com/Atvorngsam');
    expect(engineer.getRole()).toBe('Engineer');
});