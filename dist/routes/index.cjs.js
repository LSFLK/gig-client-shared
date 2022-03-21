'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var app = require("../../../../../src/routes"); //parent project root directory


var AppRoutes = app.AppRoutes;
var ApiRoutes = {
  tokenValidation: 'api/token/validate',
  images: 'images',
  login: 'api/user/login',
  delete: 'api/delete',
  update: 'api/update',
  search: 'api/search?query=',
  entity: 'api/get/',
  status: 'api/status/',
  links: 'api/links/',
  relations: 'api/relations/'
};
function getServerUrl(url) {
  return process.env.REACT_APP_SERVER_URL + url;
}

exports.ApiRoutes = ApiRoutes;
exports.AppRoutes = AppRoutes;
exports.getServerUrl = getServerUrl;
