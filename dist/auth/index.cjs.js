'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactRouterDom = require('react-router-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var AuthStore = {
  user: 'username',
  token: 'token',
  role: 'role'
};
var UserRoles = {
  Admin: "admin",
  Editor: "editor",
  Crawler: "crawler",
  Reader: "reader"
};

var authStorage = localStorage;
function getAuthUser() {
  return authStorage.getItem(AuthStore.user);
}
function setAuthUser(user) {
  authStorage.setItem(AuthStore.user, user);
}
function getUserRole() {
  return authStorage.getItem(AuthStore.role);
}
function setUserRole(role) {
  authStorage.setItem(AuthStore.role, role);
}
function getAuthToken() {
  return authStorage.getItem(AuthStore.token);
}
function setAuthToken(token) {
  authStorage.setItem(AuthStore.token, token);
}
function logout(setUserState) {
  if (!setUserState) {
    console.log("user set state function is undefined. This might cause the App to not function properly.");
  }

  setUserState("");

  for (var _i = 0, _Object$entries = Object.entries(AuthStore); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    console.log("removing auth data:", key);
    authStorage.removeItem(value);
  }
}

var app = require("../../../../../src/routes"); //parent project root directory


var AppRoutes = app.AppRoutes;
var ApiRoutes = {
  images: 'images',
  tokenValidation: 'api/token/validate',
  login: 'api/user/login',
  status: 'api/status/',
  search: 'api/search?query=',
  entity: 'api/get/',
  links: 'api/links/',
  relations: 'api/relations/',
  add: '/api/add',
  addBatch: '/api/add-batch',
  delete: 'api/delete',
  update: 'api/update',
  terminate: '/api/terminate',
  upload: '/api/upload',
  normalizeLocation: '/api/normalize/location',
  normalizeName: '/api/normalize/name',
  normalize: '/api/normalize',
  userRegister: '/api/user/register',
  readerRegister: '/api/reader/register',
  publishTwitter: '/api/publish/twitter'
};
function getServerUrl$1(url) {
  return process.env.REACT_APP_SERVER_URL + url;
}

function getAuthHeaders() {
  var token = getAuthToken();
  return {
    'Authorization': 'Bearer ' + (token ? token : ''),
    'Content-Type': 'application/json'
  };
}
function userIsEditAuthorized() {
  var currentUserRole = getUserRole();
  return currentUserRole === UserRoles.Admin || currentUserRole === UserRoles.Editor;
}
function validateToken(setUserState) {
  console.log("validating token");
  var loginUrl = getServerUrl$1(ApiRoutes.tokenValidation);
  var requestOptions = {
    headers: getAuthHeaders(),
    method: 'GET'
  };
  fetch(loginUrl, requestOptions).then(function (results) {
    return results.json();
  }, function (error) {
    console.log("error connecting to server");
    return {
      error: "server error!",
      result: false
    };
  }).then(function (data) {
    if (data.status === 200) {
      console.log("token is valid.");
      return {
        error: null,
        result: true
      };
    } else {
      logout(setUserState);
      console.log("token validation error! logging out.");
      return {
        error: "token validation error! logging out.",
        result: false
      };
    }
  });
}

function userLogin(_x, _x2) {
  return _userLogin.apply(this, arguments);
}

function _userLogin() {
  _userLogin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(username, password) {
    var loginUrl, requestOptions, response, result, _result$payload, _result$payload2, _result$payload3;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(username === "" || password === "")) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", {
              error: "username/password required!"
            });

          case 2:
            loginUrl = getServerUrl(ApiRoutes.login);
            requestOptions = {
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify({
                username: username,
                password: password
              })
            };
            _context.next = 6;
            return fetch(loginUrl, requestOptions);

          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();

          case 9:
            result = _context.sent;

            if (!((result === null || result === void 0 ? void 0 : result.status) === 200)) {
              _context.next = 15;
              break;
            }

            setAuthUser(result === null || result === void 0 ? void 0 : (_result$payload = result.payload) === null || _result$payload === void 0 ? void 0 : _result$payload.name);
            setAuthToken(result === null || result === void 0 ? void 0 : (_result$payload2 = result.payload) === null || _result$payload2 === void 0 ? void 0 : _result$payload2.token);
            setUserRole(result === null || result === void 0 ? void 0 : (_result$payload3 = result.payload) === null || _result$payload3 === void 0 ? void 0 : _result$payload3.role);
            return _context.abrupt("return", {
              error: null,
              result: "success"
            });

          case 15:
            return _context.abrupt("return", {
              error: "Login failed!",
              result: "error"
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _userLogin.apply(this, arguments);
}

function ProtectedRoute(_ref) {
  var children = _ref.children;
  var location = reactRouterDom.useLocation();

  if (!userIsEditAuthorized()) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Navigate, {
      to: AppRoutes.login,
      state: {
        from: location
      },
      replace: true
    });
  }

  return children;
}

exports.AuthStore = AuthStore;
exports.ProtectedRoute = ProtectedRoute;
exports.UserRoles = UserRoles;
exports.getAuthHeaders = getAuthHeaders;
exports.getAuthToken = getAuthToken;
exports.getAuthUser = getAuthUser;
exports.getUserRole = getUserRole;
exports.logout = logout;
exports.setAuthToken = setAuthToken;
exports.setAuthUser = setAuthUser;
exports.setUserRole = setUserRole;
exports.userIsEditAuthorized = userIsEditAuthorized;
exports.userLogin = userLogin;
exports.validateToken = validateToken;
