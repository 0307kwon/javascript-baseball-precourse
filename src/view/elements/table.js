import { makeElement } from "../../common/html-utility.js";
import { ERROR_MESSAGE, HTML_TAG } from "../../common/shared-const.js";

export default class Table {
  constructor(tableHeader = [], border = 1) {
    this._numberOfColumn = tableHeader.length;
    this._tableElement = makeElement({
      tag: HTML_TAG.TABLE,
      border: border,
    });
    this._setHeader(tableHeader);
    console.log(this._tableElement);
  }
  appendNewRow(newRow = []) {
    if (newRow.length !== this._numberOfColumn) {
      throw ERROR_MESSAGE.NOT_EQUAL_TO_NUMBER_OF_COLUMN;
    }
    const newRowElement = document.createElement("tr");
    newRow.forEach((element) => {
      const newColumnElement = document.createElement("td");
      newColumnElement.appendChild(element);
      newRowElement.appendChild(newColumnElement);
    });
    this._tableElement.appendChild(newRowElement);
  }
  getTableElement() {
    return this._tableElement;
  }

  _setHeader(tableHeader) {
    tableHeader.forEach((element) => {
      const newHeader = document.createElement("th");
      newHeader.innerHTML = element;
      this._tableElement.appendChild(newHeader);
    });
  }
}
