// const sinon = require('sinon');
const chai = require('chai')
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../server.js');

const expect = chai.expect;

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


before( async() => {
  // Wait for browser to launch
  await sleep(1000);
});

it('should get a html content of provided html/url', (done) => {
  const options = {
    htmlContent: '<html><body><h1>Sample Content</h1></body></html>',
  };

  chai.request(app)
    .post('/export/content')
    .send(options)
    .end(function (err, res) {
      expect(err).to.be.null;
      expect(res).to.have.status(200);

      expect(res.type).to.equal('text/html');
      expect(res.text).to.equal('<html><head></head><body><h1>Sample Content</h1></body></html>');
      done();
    });
});
