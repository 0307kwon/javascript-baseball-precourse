export default class Controller {
  constructor(view, models) {
    this._view = view;
    this._models = models;
  }
  addClickEventByID(id, event) {
    const button = document.getElementById(id);
    button.addEventListener("click", event.bind(this));
  }
}
