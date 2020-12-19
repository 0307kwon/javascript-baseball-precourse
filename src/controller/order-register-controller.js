import { ORDER_REGISTER } from "../common/shared-const.js";
import Controller from "./controller.js";

export default class OrderRegisterController extends Controller {
  constructor(view, models) {
    super(view, models);
    const seats = this._models.seatsModel.getSeats();
    this._seatsNumber = null;
    this._view.setInitialView();
    this._view.setSelectTableView(seats);
    this.addClickEventByID(
      ORDER_REGISTER.SELECT_TABLE_CONTAINER_ID,
      this._callbackOfDeleteButton
    );
  }

  _callbackOfDeleteButton(event) {
    if (event.target.className !== ORDER_REGISTER.DELETE_BUTTON_CLASS) {
      return;
    }
    this._seatsNumber = event.target.dataset.name;
    this._view.setSelectMenuView(this._seatsNumber);
  }
}
