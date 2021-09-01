const { expect } = require('@jest/globals');
const { getUsers } = require('./server');
const { getTodos } = require('./server');


test("Should output JSON Data", () => {
    const JSON = getUsers({JSON: true});
    expect(JSON)
})

test("Should output JSON Data", () => {
    const JSON = getTodos({JSON: true});
    expect(JSON)
})