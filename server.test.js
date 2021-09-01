const { expect } = require('@jest/globals');
const { getUsers } = require('./server');
const { getTodos } = require('./server');

// Test for the getUsers function
test("Should output JSON Data", () => {
    const JSON = getUsers({JSON: true});
    expect(JSON)
})

//Test for the getTodos function
test("Should output JSON Data", () => {
    const JSON = getTodos({JSON: true});
    expect(JSON)
})