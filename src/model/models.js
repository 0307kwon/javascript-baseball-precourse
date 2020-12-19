import MenusModel from "./menus-model.js";
import SeatsModel from "./seats-model.js";

export default class Models {
  constructor() {
    this.menusModel = new MenusModel();
    this.seatsModel = new SeatsModel(9);
  }
}
