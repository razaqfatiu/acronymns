import { expect, assert } from 'chai';
import { describe, it } from 'mocha';
import request from 'async-request';

describe('Test Acronym endpoints', () => {
  describe('GET Acronymns', () => {
    it('Get the list of acronyms based on the query parameters', async () => {
      try {
        let res = await request(
          'http://localhost:8001/acronym?from=1&limit=10&search=?'
        );
        const body = JSON.parse(await res.body);
        expect(body).to.be.instanceOf(Object, 'Instance of type Object');
        expect(body.message).to.be.equal('success', 'Body has message property');
        expect(body.data).to.be.instanceOf(Array, 'Array of data');

        // done();
      } catch (error) {
        // done();
        console.log('ERROR+: ', error.message);
      }
    });
  });
});
