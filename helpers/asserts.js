import { TWENTY_SECOND, THIRTY_SECOND } from "../const/common";

/******** Visibilty ********/
export function shouldBeVisible(selector, timeout = TWENTY_SECOND) {
  cy.get(selector, { timeout }).should("be.visible");
}
