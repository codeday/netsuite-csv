const { Customer } = require('../src');

const testCsv = new Customer();
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
const expectedOut = `Company Name,Customer ID,External ID,Primary Subsidiary
foo,foo,foo,Parent Company : Subsidiary
`;

test('', () => {
  expect(testCsv.toCsv()).toBe(expectedOut);
});
