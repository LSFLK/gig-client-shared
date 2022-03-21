var api = require("../../../../src/server");

var app = require("../../../../src/routes");

var AppRoutes = app.AppRoutes;
var ApiRoutes = api.ApiRoutes;

function deleteEntity(entity, navigate) {
  var isConfirmed = window.confirm("Are you sure you want to delete this entity?");

  if (isConfirmed) {
    var deleteUrl = getServerUrl(ApiRoutes.delete);
    var requestOptions = {
      headers: this.props.getHeaders(),
      method: 'POST',
      body: JSON.stringify({
        title: entity.title
      })
    };
    fetch(deleteUrl, requestOptions).then(function (results) {
      return results.json();
    }, function (error) {
      alert("error connecting to server");
    }).then(function (data) {
      if (data) {
        if (data.status === 200) {
          navigate('/');
        } else {
          alert("login error! " + data.status);
        }
      }
    });
  }
}

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

function getResults(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
  return _getResults.apply(this, arguments);
}

function _getResults() {
  _getResults = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(searchUrl, newSearch, result, page, setResults, setPage, limit) {
    var response, json;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            searchUrl += '&limit=' + limit + '&page=' + (newSearch ? 1 : page + 1);
            _context.next = 3;
            return fetch(searchUrl, {
              method: 'GET'
            });

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            json = _context.sent;

            if (!json) {
              _context.next = 18;
              break;
            }

            if (!(response.status === 200)) {
              _context.next = 18;
              break;
            }

            if (!(newSearch || result == null)) {
              _context.next = 15;
              break;
            }

            setResults(json);
            setPage(1);
            return _context.abrupt("return", json);

          case 15:
            setResults(result.concat(json));
            setPage(page + 1);
            return _context.abrupt("return", json);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getResults.apply(this, arguments);
}

function getEntity(entityTitle, callback) {
  fetch(getServerUrl(ApiRoutes.entity) + entityTitle, {
    method: 'GET'
  }).then(function (results) {
    if (results.status === 200) {
      return results.json();
    }

    return null;
  }).then(function (data) {
    callback(data);
  });
  return true;
}

function getGraphStats() {
  return _getGraphStats.apply(this, arguments);
}

function _getGraphStats() {
  _getGraphStats = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(getServerUrl(ApiRoutes.status), {
              method: 'GET'
            });

          case 2:
            result = _context.sent;

            if (!(result.status === 200)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", result.json());

          case 7:
            return _context.abrupt("return", null);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getGraphStats.apply(this, arguments);
}

var AuthStore = {
  user: 'username',
  token: 'token',
  role: 'role'
};

var authStorage = localStorage;
function getAuthToken() {
  return authStorage.getItem(AuthStore.token);
}

function getAuthHeaders() {
  var token = getAuthToken();
  return {
    'Authorization': 'Bearer ' + (token ? token : ''),
    'Content-Type': 'application/json'
  };
}

function saveEntity(entity, modifiedEntityObj, navigate) {
  var updateUrl = getServerUrl(ApiRoutes.update);
  var modifiedEntity = modifiedEntityObj['jsObject'];
  var requestOptions = {
    headers: getAuthHeaders(),
    method: 'POST',
    body: JSON.stringify({
      title: entity.title,
      entity: modifiedEntity
    })
  };
  fetch(updateUrl, requestOptions).then(function (results) {
    return results.json();
  }, function (error) {
    alert("error connecting to server");
  }).then(function (data) {
    if (data) {
      if (data.status === 200) {
        alert("updated successfully!");

        if (entity.title !== modifiedEntity.title) {
          navigate(AppRoutes.edit + modifiedEntity.title);
        }
      } else {
        alert("Server error: error saving entity!");
      }
    }
  });
}

function generateSearchQuery(searchParam) {
  var searchUrl = getServerUrl(ApiRoutes.search);

  if (searchParam.includes(":")) {
    var searchArray = searchParam.split(":", 2);
    searchUrl += searchArray[1] + '&categories=' + searchArray[0];
  } else {
    searchUrl += searchParam;
  }

  return searchUrl;
}

function getServerUrl(url) {
  console.log(process.env.REACT_APP_SERVER_URL);
  return process.env.REACT_APP_SERVER_URL + url;
}

export { deleteEntity, generateSearchQuery, getEntity, getGraphStats, getResults, getServerUrl, saveEntity };
