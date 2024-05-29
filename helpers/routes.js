export const WEB_APP_BASE_URLS = {
  SMARTFARM: Cypress.env("base_url"),
};

export const API_BASE_URLS = {
  SMARTFARM: Cypress.env("base_url_api"),
};

/******** Visit per Site ********/
export function visitSmartfarm(routes) {
  cy.visit(WEB_APP_BASE_URLS.SMARTFARM + routes);
}
