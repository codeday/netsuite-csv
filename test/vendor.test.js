const { Vendor } = require('../src');

const testCsv = new Vendor();
testCsv.addRow(
  {
    name: 'foo',
    subsidiary: 'Parent Company : Subsidiary',
  },
  {
    name: 'foo',
    subsidiary: 'Parent Company : Subsidiary',
  }
);
const expectedOut = `Company Name,Vendor ID,External ID,Primary Subsidiary
foo,foo,foo,Parent Company : Subsidiary
`;

test('', () => {
  expect(testCsv.toCsv()).toBe(expectedOut);
});
