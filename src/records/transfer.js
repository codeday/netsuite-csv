const Csv = require('../csv');

module.exports = class extends Csv {
  constructor() {
    super();
    this.fields = [
      { key: 'id', header: 'External ID', required: true },
      { key: 'date', header: 'Date', required: true },
      { key: 'amount', header: 'Item Amount', required: true },
      { key: 'fromAccount', header: 'From Account' },
      { key: 'toAccount', header: 'To Account' },
      { key: 'memo', header: 'Memo' },
    ];
  }

  addRow(originalRow) {
    const row = JSON.parse(JSON.stringify(originalRow));

    if (row.date) {
      row.moment = originalRow.date;
      row.date = originalRow.date.format('MM/DD/YYYY');
    }
    if (row.amount) row.amount = Number.parseFloat(row.amount).toFixed(2);

    super.addRow(row);
  }
};
