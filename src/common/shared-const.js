export const NAVIGATION_BAR = {
  ORDER_REGISTER_BUTTON_ID: "order-register-button",
  PAYMENT_BUTTON_ID: "payment-button",
};

export const ROOT_CONTAINER = {
  NAVIGATION_BAR_ID: "navigation-bar-container",
  CONTENTS_ID: "contents-container",
};

export const ORDER_REGISTER = {
  SELECT_TABLE_CONTAINER_ID: "select-table-container",
  DELETE_BUTTON_CLASS: "select-table-delete-button",

  SELECT_MENU_CONTAINER_ID: "select-menu-container",
  SELECT_COUNT_CONTAINER_ID: "select-count-container",
};

export const TEMPLATE = {
  NAVIGATION_BAR: `
  <button id="${NAVIGATION_BAR.ORDER_REGISTER_BUTTON_ID}">주문 등록</button>
  <button id="${NAVIGATION_BAR.PAYMENT_BUTTON_ID}">결제 하기</button>
  `,

  ORDER_REGISTER_INITIAL_VIEW: `
  <p></p>
  <div id="${ORDER_REGISTER.SELECT_TABLE_CONTAINER_ID}"></div>
  <p></p>
  <div id="${ORDER_REGISTER.SELECT_MENU_CONTAINER_ID}"></div>
  <p></p>
  <div id="${ORDER_REGISTER.SELECT_COUNT_CONTAINER_ID}"></div>
  `,

  SELECT_SEAT_TABLE_HEADER: ["테이블 번호", "선택"],
  SELECT_MENU_TABLE_HEADER: [
    "메뉴종류",
    "메뉴번호",
    "메뉴이름",
    "가격",
    "선택",
  ],
};

export const ERROR_MESSAGE = {
  NOT_EQUAL_TO_NUMBER_OF_COLUMN: `표 헤더의 행 길이와 새로운 요소의 행 길이가 일치하지 않습니다.`,
};

export const HTML_TAG = {
  SPAN: "span",
  BUTTON: "button",
  TABLE: "table",
  DIV: "div",
  SMALL_TITLE: "h2",
};
