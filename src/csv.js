const csvStringify = require('csv-stringify/lib/sync');

const ROWS = Symbol('rows');
const FIELDS = Symbol('fields');
const SORT_FN = Symbol('sort_fn');

module.exports = class {
  constructor(rows = [], fields = null, sortFn = null) {
    this[ROWS] = rows || [];
    this[FIELDS] = fields;
    this[SORT_FN] = sortFn;
  }

  set fields(newMap) {
    this[FIELDS] = newMap;
  }

  set sort(newSortFn) {
    this[SORT_FN] = newSortFn;
  }

  addField(keyOrObj, header, required = false) {
    if (typeof keyOrObj === 'object') this[FIELDS].push(keyOrObj);
    else this[FIELDS].push({ keyOrObj, header, required });
  }

  addRow(row) {
    this[FIELDS]
      .filter((field) => field.required)
      .forEach((field) => {
        if (!row[field.key]) throw new Error(`The field ${field.key} is required.`);
      });
    this[ROWS].push(row);
  }

  addRows(rows) {
    rows.forEach((row) => this.addRow(row));
  }

  map(fn) {
    this[ROWS] = this[ROWS].map(fn);
    return this;
  }

  reduce(fn) {
    this[ROWS] = this[ROWS].reduce(fn);
    return this;
  }

  filter(fn) {
    this[ROWS] = this[ROWS].filter(fn);
    return this;
  }

  get hasRows() {
    return this[ROWS] && this[ROWS].length > 0;
  }

  toCsv() {
    let rows = this[ROWS];
    if (this[SORT_FN]) rows = rows.sort(this[SORT_FN]);
    return csvStringify(rows, { header: true, columns: this[FIELDS] });
  }
};
