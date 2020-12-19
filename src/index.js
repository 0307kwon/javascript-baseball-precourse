import {
  NAVIGATION_BAR,
  ORDER_REGISTER,
  ROOT_CONTAINER,
  TEMPLATE,
} from "./common/shared-const.js";
import OrderRegisterController from "./controller/order-register-controller.js";
import Models from "./model/models.js";
import OrderRegisterView from "./view/order-register-view.js";

const models = new Models();

function initializePage() {
  const navigationBar = document.getElementById(
    ROOT_CONTAINER.NAVIGATION_BAR_ID
  );
  navigationBar.innerHTML = TEMPLATE.NAVIGATION_BAR;
  addClickEventToButtonByID(NAVIGATION_BAR.ORDER_REGISTER_BUTTON_ID, () => {
    new OrderRegisterController(
      new OrderRegisterView(ROOT_CONTAINER.CONTENTS_ID),
      models
    );
  });
}
function addClickEventToButtonByID(id, event) {
  const button = document.getElementById(id);
  button.addEventListener("click", event.bind(this));
}

initializePage();
