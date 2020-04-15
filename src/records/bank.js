const Csv = require('../csv');

module.exports = class extends Csv {
  constructor() {
    super();
    this.sort = (a, b) => a.moment.diff(b.moment);
    this.fields = [
      { key: 'date', header: 'Date (MM/DD/YYYY)', required: true },
      { key: 'payee', header: 'Payer/Payee Name', required: true },
      { key: 'id', header: 'Transaction Id', required: true },
      { key: 'type', header: 'Transaction Type', required: true },
      { key: 'amount', header: 'Amount', required: true },
      { key: 'memo', header: 'Memo' },
      { key: 'customerId', header: 'NS Internal Customer Id' },
      { key: 'customerName', header: 'NS Customer Name' },
      { key: 'invoiceNumbers', header: 'Invoice Number(s)' },
    ];
  }

  addRow(originalRow) {
    const row = JSON.parse(JSON.stringify(originalRow));

    if (row.payer) row.payee = row.payer;
    if (row.date) {
      row.moment = originalRow.date;
      row.date = originalRow.date.format('MM/DD/YYYY');
    }
    if (row.type) {
      row.type = row.type.toUpperCase();
      if (!['DEBIT', 'CREDIT'].includes(row.type)) throw new Error('type must be DEBIT or CREDIT.');
    }
    if (row.amount) row.amount = Number.parseFloat(row.amount).toFixed(2);

    super.addRow(row);
  }
};
