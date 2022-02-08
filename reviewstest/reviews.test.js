const request = require('supertest');
const app = require('../server/index.js');

describe('test example', () => {
  test('get /', (done) => {
    request(app)
    .get('/reviews')
    // .expect('Content-Type', /json/)
    .expect(200)
    .expect((res) => {
      res.text = 'reviews get';
    })
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
  });
});

