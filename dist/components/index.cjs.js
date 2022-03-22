'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Typography = require('@mui/material/Typography');
var styles$1 = require('@mui/styles');
var material = require('@mui/material');
var BeatLoader = require('react-spinners/BeatLoader');
var Tooltip = require('@mui/material/Tooltip/Tooltip');
var List = require('@mui/material/List/List');
var Grid = require('@mui/material/Grid/Grid');
var ListItem = require('@mui/material/ListItem/ListItem');
var reactRouterDom = require('react-router-dom');
var Paper = require('@mui/material/Paper');
var Chip = require('@mui/material/Chip');
var Moment = require('moment');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);
var BeatLoader__default = /*#__PURE__*/_interopDefaultLegacy(BeatLoader);
var Tooltip__default = /*#__PURE__*/_interopDefaultLegacy(Tooltip);
var List__default = /*#__PURE__*/_interopDefaultLegacy(List);
var Grid__default = /*#__PURE__*/_interopDefaultLegacy(Grid);
var ListItem__default = /*#__PURE__*/_interopDefaultLegacy(ListItem);
var Paper__default = /*#__PURE__*/_interopDefaultLegacy(Paper);
var Chip__default = /*#__PURE__*/_interopDefaultLegacy(Chip);
var Moment__default = /*#__PURE__*/_interopDefaultLegacy(Moment);

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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var styles = function styles(theme) {
  return {
    container: {
      minHeight: '100vh',
      backgroundColor: '#eeeeee',
      padding: '10px'
    },
    searchResult: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      color: 'black',
      textAlign: 'left',
      margin: '10px'
    },
    paragraph: {
      margin: '15px 0'
    },
    link: {
      paddingRight: '10px'
    }
  };
};

var FormattedContentViewer = /*#__PURE__*/function (_Component) {
  _inherits(FormattedContentViewer, _Component);

  var _super = _createSuper(FormattedContentViewer);

  function FormattedContentViewer() {
    _classCallCheck(this, FormattedContentViewer);

    return _super.apply(this, arguments);
  }

  _createClass(FormattedContentViewer, [{
    key: "formatValues",
    value: function formatValues(values) {
      var _this = this;

      return values.map(function (value) {
        return _this.formatValue(value);
      });
    }
  }, {
    key: "formatValue",
    value: function formatValue(value) {
      switch (value.value_type) {
        case "date":
          return this.formatDate(value.value_string);

        case "wikiText":
          return this.formatWikiText(value.value_string);

        case "html":
          return this.viewAsHTML(value.value_string);

        default:
          return /*#__PURE__*/React__default["default"].createElement(Typography__default["default"], {
            key: value.value_string + value.date
          }, value.value_string.split('\n').map(function (item) {
            return /*#__PURE__*/React__default["default"].createElement("span", {
              key: item
            }, item, /*#__PURE__*/React__default["default"].createElement("br", null));
          }), " ", value.date);
      }
    }
  }, {
    key: "formatDate",
    value: function formatDate(dateString) {
      return /*#__PURE__*/React__default["default"].createElement(Typography__default["default"], {
        key: dateString
      }, new Date(dateString).toDateString());
    }
  }, {
    key: "formatWikiText",
    value: function formatWikiText(textString) {
      var _this2 = this;

      return textString.split('\n').map(function (item, i) {
        if ((item.match(/=/g) || []).length === 4) {
          return /*#__PURE__*/React__default["default"].createElement(Typography__default["default"], {
            variant: "h5",
            component: "h5",
            key: i
          }, item.replace(/=/g, ''));
        } else if ((item.match(/=/g) || []).length === 6) {
          return /*#__PURE__*/React__default["default"].createElement(Typography__default["default"], {
            variant: "h6",
            component: "h6",
            key: i
          }, item.replace(/=/g, ''));
        } else {
          return /*#__PURE__*/React__default["default"].createElement(Typography__default["default"], {
            component: "p",
            className: _this2.props.classes.paragraph,
            key: i
          }, item.replace(/=/g, ''));
        }
      });
    }
  }, {
    key: "viewAsHTML",
    value: function viewAsHTML(htmlString) {
      return /*#__PURE__*/React__default["default"].createElement(Typography__default["default"], {
        key: "html",
        dangerouslySetInnerHTML: {
          __html: htmlString
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          content = _this$props.content,
          key = _this$props.key;
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: "mainContent",
        key: key
      }, this.formatValues(content));
    }
  }]);

  return FormattedContentViewer;
}(React.Component);

var FormattedContentViewer$1 = styles$1.withStyles(styles)(FormattedContentViewer);

var downArrow = "data:image/png;base64,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";

var InfiniteList = /*#__PURE__*/function (_Component) {
  _inherits(InfiniteList, _Component);

  var _super = _createSuper(InfiniteList);

  function InfiniteList(props) {
    var _this;

    _classCallCheck(this, InfiniteList);

    _this = _super.call(this, props);
    _this.state = {
      isLoading: false,
      listEnded: false
    };
    _this.loadResults = _this.loadResults.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InfiniteList, [{
    key: "loadResults",
    value: function () {
      var _loadResults = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var results;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  isLoading: true
                });
                _context.next = 3;
                return this.props.getResultItems();

              case 3:
                results = _context.sent;

                if (!results) {
                  this.setState({
                    isLoading: false,
                    listEnded: true
                  });
                } else {
                  this.setState({
                    isLoading: false
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadResults() {
        return _loadResults.apply(this, arguments);
      }

      return loadResults;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          listItems = _this$props.listItems,
          list = _this$props.list;
      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          listEnded = _this$state.listEnded;
      return /*#__PURE__*/React__default["default"].createElement("div", null, list, Array.isArray(listItems) && /*#__PURE__*/React__default["default"].createElement("div", {
        style: {
          textAlign: 'center'
        }
      }, isLoading && /*#__PURE__*/React__default["default"].createElement(BeatLoader__default["default"], {
        sizeUnit: "px",
        size: 14,
        color: '#36D7B7',
        loading: this.props.loading
      }), !(isLoading || listEnded) ? /*#__PURE__*/React__default["default"].createElement(Tooltip__default["default"], {
        title: 'view more',
        "aria-label": "add"
      }, /*#__PURE__*/React__default["default"].createElement(material.Button, {
        style: {
          width: "100%"
        },
        onClick: function onClick() {
          return _this2.loadResults();
        }
      }, /*#__PURE__*/React__default["default"].createElement("img", {
        alt: "view more",
        width: "15px",
        src: downArrow
      }))) : /*#__PURE__*/React__default["default"].createElement(material.Button, {
        style: {
          width: "100%"
        }
      }, " ")));
    }
  }]);

  return InfiniteList;
}(React.Component);

var Styles = function Styles(theme) {
  return {
    appBar: {
      backgroundColor: '#282c34',
      padding: theme.spacing(1)
    },
    headerColumn: {
      paddingTop: theme.spacing(0.5)
    },
    loaderColumn: {
      paddingTop: theme.spacing(1.5)
    },
    container: {
      backgroundColor: '#eeeeee',
      padding: theme.spacing(2),
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      minHeight: '100vh'
    },
    footer: {
      backgroundColor: '#eeeeee',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2)
    },
    paper: {
      margin: theme.spacing(2),
      padding: 0,
      textAlign: 'left',
      color: theme.palette.text.primary,
      boxShadow: '0px 3px 6px #00000029',
      borderRadius: 16
    },
    profilePaper: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.primary,
      boxShadow: '0px 3px 6px #00000029',
      borderRadius: 16,
      minHeight: '100vh'
    },
    headerText: {
      color: '#000000DE',
      marginLeft: theme.spacing(2),
      fontSize: '18px'
    },
    trendingContainer: {
      margin: 10,
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.primary,
      backgroundColor: '#ddd'
    },
    trendingListContainer: {
      width: '100%'
    },
    listContainer: {
      width: '100%'
    },
    inline: {
      display: 'inline'
    },
    link: {
      paddingRight: theme.spacing(0.5),
      textDecoration: 'none'
    },
    collapsible: {
      maxHeight: "300px",
      overflow: "hidden"
    },
    itemLink: {
      display: 'inline',
      textDecoration: 'none'
    },
    search: _defineProperty({
      position: 'relative',
      borderRadius: '20px',
      backgroundColor: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.common.white
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      marginLeft: theme.spacing(2),
      width: 'auto'
    }),
    searchIcon: {
      width: theme.spacing(9),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    bigAvatar: {
      margin: 10,
      width: 100,
      height: 100
    },
    searchAvatar: {
      height: 210,
      width: '100%',
      float: 'right',
      objectFit: 'contain',
      borderRadius: 16
    },
    searchAvatarVertical: {
      height: 140,
      width: '100%',
      float: 'center',
      objectFit: 'cover',
      borderRadius: 16
    },
    profileAvatar: {
      height: 180,
      width: '100%',
      float: 'right',
      objectFit: 'cover',
      borderRadius: 16
    },
    mainContentItemTitle: {
      fontSize: 18,
      color: '#000000DE',
      marginBottom: theme.spacing(1)
    },
    trendingItemTitle: {
      fontSize: 16,
      color: '#000000DE'
    },
    leftContentColumn: {
      width: '100%',
      textAlign: 'left',
      position: 'fixed',
      top: '70px',
      left: '0',
      bottom: '0',
      overflow: 'auto'
    },
    rightContentColumn: {
      width: '100%',
      textAlign: 'left',
      position: 'fixed',
      top: '70px',
      right: '0',
      bottom: '0',
      overflow: 'auto'
    },
    mainContentColumn: {
      textAlign: 'left'
    }
  };
};

var app = require("../../../../../src/routes"); //parent project root directory


var AppRoutes = app.AppRoutes;

var MainContentItem = /*#__PURE__*/function (_Component) {
  _inherits(MainContentItem, _Component);

  var _super = _createSuper(MainContentItem);

  function MainContentItem() {
    _classCallCheck(this, MainContentItem);

    return _super.apply(this, arguments);
  }

  _createClass(MainContentItem, [{
    key: "render",
    value: function render() {
      var ignoreCategories = ["News", "PERSON", "ORGANIZATION", "LOCATION", "arbitrary-entities", "OrgChart-Level1"];
      var _this$props = this.props,
          classes = _this$props.classes,
          imageUrl = _this$props.imageUrl,
          title = _this$props.title,
          subtitle = _this$props.subtitle,
          description = _this$props.description,
          categories = _this$props.categories;
      return /*#__PURE__*/React__default["default"].createElement(Paper__default["default"], {
        className: classes.paper
      }, /*#__PURE__*/React__default["default"].createElement(ListItem__default["default"], {
        alignItems: "flex-start"
      }, /*#__PURE__*/React__default["default"].createElement(Grid__default["default"], {
        container: true,
        width: 1
      }, /*#__PURE__*/React__default["default"].createElement(Grid__default["default"], {
        item: true,
        lg: 5
      }, /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Link, {
        className: classes.itemLink,
        to: AppRoutes.entity + title
      }, /*#__PURE__*/React__default["default"].createElement("img", {
        alt: title,
        src: imageUrl === "" ? "avatar.png" : imageUrl,
        className: classes.searchAvatar
      }))), /*#__PURE__*/React__default["default"].createElement(Grid__default["default"], {
        item: true,
        lg: 7
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        style: {
          padding: '20px'
        }
      }, /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Link, {
        className: classes.itemLink,
        to: AppRoutes.entity + title
      }, /*#__PURE__*/React__default["default"].createElement(Typography__default["default"], {
        className: classes.mainContentItemTitle,
        variant: "h4"
      }, /*#__PURE__*/React__default["default"].createElement("span", {
        className: "news-title"
      }, title)), /*#__PURE__*/React__default["default"].createElement(Typography__default["default"], {
        variant: "body2",
        color: "textSecondary"
      }, Moment__default["default"](subtitle, 'DD  MMM YYYY h:mm A').fromNow()), /*#__PURE__*/React__default["default"].createElement(Typography__default["default"], {
        className: "news-description",
        style: {
          marginBottom: '10px'
        },
        variant: "body2",
        color: "textSecondary"
      }, description.substring(0, 400))), /*#__PURE__*/React__default["default"].createElement("div", null, categories ? categories.map(function (category) {
        return ignoreCategories.includes(category) ? null : /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Link, {
          key: category,
          className: classes.link,
          to: AppRoutes.search + category + ":"
        }, /*#__PURE__*/React__default["default"].createElement(Chip__default["default"], {
          style: {
            cursor: 'pointer'
          },
          size: "small",
          label: category,
          variant: "outlined"
        }));
      }) : null))))));
    }
  }]);

  return MainContentItem;
}(React.Component);

var MainContentItem$1 = styles$1.withStyles(Styles)(MainContentItem);

var MainContentList = /*#__PURE__*/function (_Component) {
  _inherits(MainContentList, _Component);

  var _super = _createSuper(MainContentList);

  function MainContentList() {
    _classCallCheck(this, MainContentList);

    return _super.apply(this, arguments);
  }

  _createClass(MainContentList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          listItems = _this$props.listItems,
          vertical = _this$props.vertical;

      if (listItems) {
        return /*#__PURE__*/React__default["default"].createElement(List__default["default"], {
          className: classes.listContainer
        }, Array.isArray(listItems) ? listItems.map(function (entity) {
          return /*#__PURE__*/React__default["default"].createElement(MainContentItem$1, {
            key: entity.title,
            imageUrl: entity.image_url,
            title: entity.title,
            subtitle: entity.source_date !== "0001-01-01T00:00:00Z" ? Moment__default["default"](entity.source_date).format('DD  MMM YYYY h:mm A') : Moment__default["default"](entity.updated_at).format('DD  MMM YYYY h:mm A'),
            description: entity.snippet,
            links: entity.links.slice(0, 20),
            categories: entity.categories,
            vertical: vertical
          });
        }) : /*#__PURE__*/React__default["default"].createElement(material.Typography, {
          component: "p",
          style: {
            textAlign: 'center'
          }
        }, "No Results Found"));
      }

      return /*#__PURE__*/React__default["default"].createElement(material.Typography, {
        component: "p",
        style: {
          textAlign: 'center'
        }
      }, "Loading Results...");
    }
  }]);

  return MainContentList;
}(React.Component);

var MainContentList$1 = styles$1.withStyles(Styles)(MainContentList);

exports.FormattedContentViewer = FormattedContentViewer$1;
exports.InfiniteList = InfiniteList;
exports.MainContentList = MainContentList$1;
