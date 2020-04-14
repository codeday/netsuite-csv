const moment = require('moment');
const { Bank } = require('../src');

const testCsv = new Bank();
testCsv.addRows([
  {
    id: 'myid',
    date: moment('1970-01-02'),
    amount: -100.00,
    type: 'CREDIT',
    payee: 'foocorp',
    memo: 'hello, world',
  },
  {
    id: 'myid2',
    date: moment('1970-01-01'),
    amount: 100.00,
    type: 'DEBIT',
    payee: 'foocorp',
    memo: 'hello, world',
  },
]);

// eslint-disable-next-line max-len
const expectedOut = `Date (MM/DD/YYYY),Payer/Payee Name,Transaction Id,Transaction Type,Amount,Memo,NS Internal Customer Id,NS Customer Name,Invoice Number(s)
01/01/1970,foocorp,myid2,DEBIT,100.00,"hello, world",,,
01/02/1970,foocorp,myid,CREDIT,-100.00,"hello, world",,,
`;

test('', () => {
  expect(testCsv.toCsv()).toBe(expectedOut);
});
