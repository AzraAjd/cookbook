'use strict';

describe('cookBookApp.version module', function() {
  beforeEach(module('cookBookApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
