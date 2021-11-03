var chai = require('chai');
var chaiHttp = require('chai-http');
var server = 'https://crudxempleados.herokuapp.com/';
var should = chai.should();
chai.use(chaiHttp);
describe('empleados', function() {
  it('empleados en / GET');
  
});
it('empleados en / GET', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });