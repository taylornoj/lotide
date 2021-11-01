const assert = require('chai').assert;
const tail = require('../tail');



describe("#tail removes the first item of the array", () => {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => { 
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("returns ['Lighthouse, Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  
});
