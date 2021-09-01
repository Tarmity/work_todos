const { expect } = require('@jest/globals');
const { getUsers } = require('./server');

test("Should out put JSON Data", () => {
    const JSON = getUsers({JSON: true});
    expect(JSON)
})