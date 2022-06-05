const MockAdapter = require('axios-mock-adapter');
const axios = require('axios');

let delayResponse = 2000;
if (process.env.NODE_ENV === 'test') {
    delayResponse = 0; // Set delay response as zero for tdd
}
const mock = new MockAdapter(axios, { delayResponse });
export default mock;
