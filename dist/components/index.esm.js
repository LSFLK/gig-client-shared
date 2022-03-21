import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';
import { Button, Typography as Typography$1 } from '@mui/material';
import BeatLoader from 'react-spinners/BeatLoader';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import List from '@mui/material/List/List';
import Grid from '@mui/material/Grid/Grid';
import ListItem from '@mui/material/ListItem/ListItem';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Moment from 'moment';

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
          return /*#__PURE__*/React.createElement(Typography, {
            key: value.value_string + value.date
          }, value.value_string.split('\n').map(function (item) {
            return /*#__PURE__*/React.createElement("span", {
              key: item
            }, item, /*#__PURE__*/React.createElement("br", null));
          }), " ", value.date);
      }
    }
  }, {
    key: "formatDate",
    value: function formatDate(dateString) {
      return /*#__PURE__*/React.createElement(Typography, {
        key: dateString
      }, new Date(dateString).toDateString());
    }
  }, {
    key: "formatWikiText",
    value: function formatWikiText(textString) {
      var _this2 = this;

      return textString.split('\n').map(function (item, i) {
        if ((item.match(/=/g) || []).length === 4) {
          return /*#__PURE__*/React.createElement(Typography, {
            variant: "h5",
            component: "h5",
            key: i
          }, item.replace(/=/g, ''));
        } else if ((item.match(/=/g) || []).length === 6) {
          return /*#__PURE__*/React.createElement(Typography, {
            variant: "h6",
            component: "h6",
            key: i
          }, item.replace(/=/g, ''));
        } else {
          return /*#__PURE__*/React.createElement(Typography, {
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
      return /*#__PURE__*/React.createElement(Typography, {
        key: "html",
        dangerouslySetInnerHTML: {
          __html: htmlString
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var content = this.props.content;
      return /*#__PURE__*/React.createElement("tr", {
        key: content.name
      }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Typography, null, content.name !== "" ? content.name + ": " : "")), /*#__PURE__*/React.createElement("td", null, this.formatValues(content.values)));
    }
  }]);

  return FormattedContentViewer;
}(Component);

FormattedContentViewer.propTypes = {
  classes: PropTypes.object.isRequired
};
var FormattedContentViewer$1 = withStyles(styles)(FormattedContentViewer);

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
      return /*#__PURE__*/React.createElement("div", null, list, Array.isArray(listItems) && /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'center'
        }
      }, isLoading && /*#__PURE__*/React.createElement(BeatLoader, {
        sizeUnit: "px",
        size: 14,
        color: '#36D7B7',
        loading: this.props.loading
      }), !(isLoading || listEnded) ? /*#__PURE__*/React.createElement(Tooltip, {
        title: 'view more',
        "aria-label": "add"
      }, /*#__PURE__*/React.createElement(Button, {
        style: {
          width: "100%"
        },
        onClick: function onClick() {
          return _this2.loadResults();
        }
      }, /*#__PURE__*/React.createElement("img", {
        alt: "view more",
        width: "15px",
        src: "./resources/down.png"
      }))) : /*#__PURE__*/React.createElement(Button, {
        style: {
          width: "100%"
        }
      }, " ")));
    }
  }]);

  return InfiniteList;
}(Component);

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

var api = require("../../../src/server");

var app = require("../../../src/routes");

var AppRoutes = app.AppRoutes;
api.ApiRoutes;

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
      return /*#__PURE__*/React.createElement(Paper, {
        className: classes.paper
      }, /*#__PURE__*/React.createElement(ListItem, {
        alignItems: "flex-start"
      }, /*#__PURE__*/React.createElement(Grid, {
        container: true,
        width: 1
      }, /*#__PURE__*/React.createElement(Grid, {
        item: true,
        lg: 5
      }, /*#__PURE__*/React.createElement(Link, {
        className: classes.itemLink,
        to: AppRoutes.entity + title
      }, /*#__PURE__*/React.createElement("img", {
        alt: title,
        src: imageUrl === "" ? "avatar.png" : imageUrl,
        className: classes.searchAvatar
      }))), /*#__PURE__*/React.createElement(Grid, {
        item: true,
        lg: 7
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '20px'
        }
      }, /*#__PURE__*/React.createElement(Link, {
        className: classes.itemLink,
        to: AppRoutes.entity + title
      }, /*#__PURE__*/React.createElement(Typography, {
        className: classes.mainContentItemTitle,
        variant: "h4"
      }, /*#__PURE__*/React.createElement("span", {
        className: "news-title"
      }, title)), /*#__PURE__*/React.createElement(Typography, {
        variant: "body2",
        color: "textSecondary"
      }, Moment(subtitle, 'DD  MMM YYYY h:mm A').fromNow()), /*#__PURE__*/React.createElement(Typography, {
        className: "news-description",
        style: {
          marginBottom: '10px'
        },
        variant: "body2",
        color: "textSecondary"
      }, description.substring(0, 400))), /*#__PURE__*/React.createElement("div", null, categories ? categories.map(function (category) {
        return ignoreCategories.includes(category) ? null : /*#__PURE__*/React.createElement(Link, {
          key: category,
          className: classes.link,
          to: AppRoutes.search + category + ":"
        }, /*#__PURE__*/React.createElement(Chip, {
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
}(Component);

var MainContentItem$1 = withStyles(Styles)(MainContentItem);

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
        return /*#__PURE__*/React.createElement(List, {
          className: classes.listContainer
        }, Array.isArray(listItems) ? listItems.map(function (entity) {
          return /*#__PURE__*/React.createElement(MainContentItem$1, {
            key: entity.title,
            imageUrl: entity.image_url,
            title: entity.title,
            subtitle: entity.source_date !== "0001-01-01T00:00:00Z" ? Moment(entity.source_date).format('DD  MMM YYYY h:mm A') : Moment(entity.updated_at).format('DD  MMM YYYY h:mm A'),
            description: entity.snippet,
            links: entity.links.slice(0, 20),
            categories: entity.categories,
            vertical: vertical
          });
        }) : /*#__PURE__*/React.createElement(Typography$1, {
          component: "p",
          style: {
            textAlign: 'center'
          }
        }, "No Results Found"));
      }

      return /*#__PURE__*/React.createElement(Typography$1, {
        component: "p",
        style: {
          textAlign: 'center'
        }
      }, "Loading Results...");
    }
  }]);

  return MainContentList;
}(Component);

var MainContentList$1 = withStyles(Styles)(MainContentList);

export { FormattedContentViewer$1 as FormattedContentViewer, InfiniteList, MainContentList$1 as MainContentList };
