var expect = require('expect.js');
var seeker = require('./index');

describe('cursor position', function() {

  it('should set the cursor correctly', function(done) {
    var c = 0;
    var vals = [2, 1];

    var seek = seeker(function(offset) {
      expect(offset).to.be.equal(vals[c]);
      c++;
      if (c >= vals.length) done();
    }, 0);

    seek(1);
    seek(1);
    seek(1);
    seek(-1);

    setTimeout(function() {
      seek(1);
    }, 10);
  });

});
