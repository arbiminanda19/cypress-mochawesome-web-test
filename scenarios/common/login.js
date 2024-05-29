import * as route from "../../helpers/routes";
import * as data from "../../data/guest/login.data";
import * as request from "../../helpers/request";

import { API_ENDPOINT } from "../../const/api";

const { email: dataEmail, password: dataPassword } =
  data.VALID_CUSTOMER_LOGIN_DATA;

export function loginCustomer(email = dataEmail, password = dataPassword) {
  request
    .request({
      method: "POST",
      url:
        route.API_BASE_URLS.SMARTFARM + API_ENDPOINT.smartfarm_api.user.login,
      body: {
        umail: email,
        password: password,
      },
    })
    .then(function (resp) {
      window.localStorage.setItem("jwtToken", resp.body.jwt_token);
      window.localStorage.setItem("level", resp.body.level);
      window.localStorage.setItem("token", resp.body.token);
    });
}
