const Csv = require('../csv');

module.exports = class extends Csv {
  constructor() {
    super();
    this.fields = [
      { key: 'name', header: 'Company Name', required: true },
      { key: 'name', header: 'Customer ID', required: true },
      { key: 'name', header: 'External ID', required: true },
      { key: 'subsidiary', header: 'Primary Subsidiary', required: true },
    ];
  }

  toCsv() {
    const seenNames = [];
    this.filter((row) => {
      if (seenNames.includes(row.name)) return false;
      seenNames.push(row.name);
      return true;
    });
    return super.toCsv();
  }
};
