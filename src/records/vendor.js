const Csv = require('../csv');

module.exports = class extends Csv {
  constructor() {
    super();
    this.fields = [
      { key: 'name', header: 'Company Name', required: true },
      { key: 'name', header: 'Vendor ID', required: true },
      { key: 'name', header: 'External ID', required: true },
      { key: 'subsidiary', header: 'Primary Subsidiary', required: true },
    ];
  }
};
