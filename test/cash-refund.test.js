const moment = require('moment');
const { CashSale } = require('../src');

const testCsv = new CashSale();
testCsv.addRow(
  {
    id: 'myid',
    date: moment('1970-01-01'),
    customer: 'random person',
    depositAccount: '200 Cash',
    item: 'Balloon',
    quantity: 2,
    amount: 10000,
    memo: 'hi there',
  }
);
const expectedOut = `External ID,Date,Customer,Item ID,Item Quantity,Item Amount,Deposit Account,Memo
myid,01/01/1970,random person,Balloon,2,10000.00,200 Cash,hi there
`;

test('', () => {
  expect(testCsv.toCsv()).toBe(expectedOut);
});
