import {
  ORDER_REGISTER,
  ROOT_CONTAINER,
  TEMPLATE,
} from "../common/shared-const.js";
import Table from "./elements/table.js";
import View from "./view.js";

export default class OrderRegisterView extends View {
  constructor(containerID) {
    super(containerID);
  }
  setInitialView() {
    this._initalizeOrderRegisterContainer();
  }
  setSelectTableView(seats) {
    new SelectTableView(ORDER_REGISTER.SELECT_TABLE_CONTAINER_ID, seats);
  }
  setSelectMenuView(seatNumber) {
    new SelectMenuView(ORDER_REGISTER.SELECT_MENU_CONTAINER_ID, seatNumber);
  }

  _initalizeOrderRegisterContainer() {
    this.setContainerByID(
      ROOT_CONTAINER.CONTENTS_ID,
      TEMPLATE.ORDER_REGISTER_INITIAL_VIEW
    );
  }
}

class SelectTableView extends View {
  constructor(containerID, seats) {
    super(containerID);
    this.clearMyContainer();
    this.setSelectTableContainer(seats);
  }
  setSelectTableContainer(seats) {
    const newTable = new Table(TEMPLATE.SELECT_SEAT_TABLE_HEADER);
    const title = this.makeTitle("🔍 테이블 선택");

    seats.forEach((seat) => {
      newTable.appendNewRow(this._makeSeatTableRow(seat));
    });
    this.appendChildsByID(this._containerID, [
      title,
      newTable.getTableElement(),
    ]);
  }

  _makeSeatTableRow(seat) {
    const spanTag = this.makeSpan(`${seat.number} 테이블`);
    const button = this.makeDeleteButton({
      innerText: "선택",
      datasetValue: seat.number,
    });
    return [spanTag, button];
  }
}

class SelectMenuView extends View {
  constructor(containerID, seatNumber) {
    super(containerID);
    this.setSelectMenuContainer(seatNumber);
  }
  setSelectMenuContainer(seatNumber) {
    const menus = [
      { kindOf: "치킨", number: 1, name: "간장치킨", price: "17000" },
    ];
    const title = this.makeTitle(`📜 메뉴 목록 ( ${seatNumber} 테이블 )`);
    const newTable = new Table(TEMPLATE.SELECT_MENU_TABLE_HEADER);
    this.setContainerByID(ORDER_REGISTER.SELECT_MENU_CONTAINER_ID, "");
    menus.forEach((menu) => {
      newTable.appendNewRow(this._makeMenuTableRow(menu));
    });
    this.appendChildsByID(ORDER_REGISTER.SELECT_MENU_CONTAINER_ID, [
      title,
      newTable.getTableElement(),
    ]);
  }
  _makeMenuTableRow(menu) {
    const kindOf = this.makeSpan(menu.kindOf);
    const number = this.makeSpan(menu.number);
    const name = this.makeSpan(menu.name);
    const price = this.makeSpan(menu.price);
    const button = this.makeDeleteButton({
      innerText: "선택",
      datasetValue: menu.name,
    });
    return [kindOf, number, name, price, button];
  }
}
