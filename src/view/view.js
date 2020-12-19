import { makeElement } from "../common/html-utility.js";
import { HTML_TAG, ORDER_REGISTER } from "../common/shared-const.js";

export default class View {
  constructor(containerID) {
    this._containerID = containerID;
  }
  appendChildsByID(id, elements = []) {
    const container = document.getElementById(id);
    elements.forEach((element) => {
      container.appendChild(element);
    });
  }
  setContainerByID(id, contents) {
    const container = document.getElementById(id);
    container.innerHTML = contents;
  }
  makeTitle(innerText) {
    return makeElement({
      tag: HTML_TAG.SMALL_TITLE,
      innerHTML: innerText,
    });
  }
  makeSpan(innerText) {
    return makeElement({
      tag: HTML_TAG.SPAN,
      innerHTML: innerText,
    });
  }
  makeDeleteButton({ innerText, datasetValue }) {
    return makeElement({
      tag: HTML_TAG.BUTTON,
      innerHTML: innerText,
      classList: [ORDER_REGISTER.DELETE_BUTTON_CLASS],
      dataset: ["name", datasetValue],
    });
  }
  clearMyContainer() {
    this.setContainerByID(this._containerID, "");
  }
}
