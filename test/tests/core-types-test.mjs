import coreTypes from '../../src/index.js';

describe('CoreTypes', function() {

  it('should do something', function() {
    expect(coreTypes.is('').string()).toBe(true);
    expect(coreTypes.is(1).number()).toBe(true);
    expect(coreTypes.is([]).array()).toBe(true);
    expect(coreTypes.is({}).object()).toBe(true);
    expect(coreTypes.is(()=>{}).function()).toBe(true);
  });
});
