const moment = require('moment');
const { Bill } = require('../src');

const testCsv = new Bill();
testCsv.addRow(
  {
    id: 'myid',
    date: moment('1970-01-01'),
    amount: 100.00,
    vendor: 'vendor',
    account: '100 Test',
    subsidiary: 'Parent Company : Subsidiary',
    memo: 'hi there',
    reference: '10000',
  }
);
const expectedOut = `External ID,Date,Vendor,Expenses Amount,Account,Subsidiary,Memo,Reference
myid,01/01/1970,vendor,100.00,100 Test,Parent Company : Subsidiary,hi there,10000
`;

test('', () => {
  expect(testCsv.toCsv()).toBe(expectedOut);
});
