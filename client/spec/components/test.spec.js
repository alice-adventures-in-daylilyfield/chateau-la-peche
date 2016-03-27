const assert = require('power-assert');
const test = require('../../src/components/test');

describe('test', function() {

  describe('#foo', function() {

    it('should add 1', function() {
      const x = 1;
      const y = test.foo(x);
      assert(y === 2);
    });
  });
});

