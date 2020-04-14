const moment = require('moment');
const { CreditCardCharge } = require('../src');

const testCsv = new CreditCardCharge();
testCsv.addRow(
  {
    id: 'myid',
    date: moment('1970-01-01'),
    amount: 100.00,
    vendor: 'vendor',
    account: '100 Test',
    subsidiary: 'Parent Company : Subsidiary',
    paymentAccount: '200 American Express',
  }
);
const expectedOut = `External ID,Date,Vendor,Expenses Amount,Account,Item Account,Subsidiary,Memo,Reference
myid,01/01/1970,vendor,100.00,200 American Express,100 Test,Parent Company : Subsidiary,,
`;

test('', () => {
  expect(testCsv.toCsv()).toBe(expectedOut);
});
