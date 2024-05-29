import * as assert from "../../helpers/asserts";
import * as route from "../../helpers/routes";
import * as utils from "../../helpers/utils";
import * as viewport from "../../helpers/viewport";

import { ROUTES } from "../../const/routes";
import { loginCustomer } from "../common/login";

import * as page from "../../page-elements/dashboard/dashboard.page";

describe("Dashboard", () => {
  before(() => {
    utils.clearLocalStorage();
    loginCustomer();
  });

  beforeEach(() => {
    utils.restoreLocalStorage();
    viewport.setViewport(1920, 1080);
    route.visitSmartfarm(ROUTES.customer.dashboard);
  });

  afterEach(() => {
    utils.saveLocalStorage();
  });

  it("C2: Ensure user customer successfully access Dashboard", () => {
    assert.shouldBeVisible(page.SET_POINT_TEMPERATURE_INPUT);
  });
});
