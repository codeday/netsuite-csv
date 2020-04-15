const moment = require('moment');
const { Transfer } = require('../src');

const testCsv = new Transfer();
testCsv.addRow(
  {
    id: 'myid',
    date: moment('1970-01-01'),
    amount: 100.00,
    fromAccount: '1000 Stripe',
    toAccount: '1001 Bank',
    memo: 'hi there',
  }
);
console.log(testCsv.toCsv());
const expectedOut = `External ID,Date,Item Amount,From Account,To Account,Memo
myid,01/01/1970,100.00,1000 Stripe,1001 Bank,hi there
`;

test('', () => {
  expect(testCsv.toCsv()).toBe(expectedOut);
});
