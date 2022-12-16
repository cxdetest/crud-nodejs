const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../index').app;

/* describe('test suite e2e', () => {
  it('swaiting a hello world', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        console.log('A');
        chai.assert.equal(res.text, 'hello world');
        done();
      });
    console.log('B');
  });
}); */

const url = 'http://localhost:3001';

describe('insert name and price', () => {
  it('waiting a name and price', (done) => {
    chai
      .request(url)
      .post('/api/v1/products')
      .send({ name: 'any', price: 10 })
      .end((err, res) => {
        console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
});
