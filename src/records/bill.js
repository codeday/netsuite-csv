const Csv = require('../csv');

module.exports = class extends Csv {
  constructor() {
    super();
    this.sort = (a, b) => a.moment.diff(b.moment);
    this.fields = [
      { key: 'id', header: 'External ID', required: true },
      { key: 'date', header: 'Date', required: true },
      { key: 'vendor', header: 'Vendor', required: true },
      { key: 'amount', header: 'Expenses Amount', required: true },
      { key: 'account', header: 'Account', required: true },
      { key: 'subsidiary', header: 'Subsidiary', required: true },
      { key: 'memo', header: 'Memo' },
      { key: 'reference', header: 'Reference' },
    ];
  }

  addRow(originalRow) {
    const row = JSON.parse(JSON.stringify(originalRow));

    if (row.date) {
      row.moment = originalRow.date;
      row.date = originalRow.date.format('MM/DD/YYYY');
    }
    if (row.amount) row.amount = String(row.amount.toFixed(2));

    super.addRow(row);
  }
};
