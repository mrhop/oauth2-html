(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Created by Donghui Huo on 2016/4/26.
 */
var data = {
    name: 'dataAuth',
    getName: function getName() {
        return name;
    }
};

module.exports = data;

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _auth = require('../data/auth');

var _auth2 = _interopRequireDefault(_auth);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactIntl = require('react-intl');

var _en = require('react-intl/locale-data/en');

var _en2 = _interopRequireDefault(_en);

var _zh = require('react-intl/locale-data/zh');

var _zh2 = _interopRequireDefault(_zh);

var _utilFun = require('utilFun');

var _utilFun2 = _interopRequireDefault(_utilFun);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(0, _reactIntl.addLocaleData)([].concat(_toConsumableArray(_en2.default), _toConsumableArray(_zh2.default)));

var AuthMain = function (_React$Component) {
    _inherits(AuthMain, _React$Component);

    function AuthMain(props) {
        _classCallCheck(this, AuthMain);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AuthMain).call(this, props));
    }

    _createClass(AuthMain, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(_reactIntl.FormattedMessage, {
                    id: 'auth.signIn',
                    values: {
                        appName: 'Eric',
                        adminPlatform: 'test'
                    } })
            );
        }
    }]);

    return AuthMain;
}(_react2.default.Component);

_utilFun2.default.domReady(function () {
    var locale = _utilFun2.default.getLocale();
    // console.log(utilFun.getIntl().auth.signIn);
    _reactDom2.default.render(_react2.default.createElement(
        _reactIntl.IntlProvider,
        { locale: locale, messages: _utilFun2.default.getIntl() },
        _react2.default.createElement(AuthMain, null)
    ), document.getElementById('containerTest'));
});

},{"../data/auth":1,"react":"react","react-dom":"react-dom","react-intl":"react-intl","react-intl/locale-data/en":"react-intl/locale-data/en","react-intl/locale-data/zh":"react-intl/locale-data/zh","utilFun":"utilFun"}]},{},[2]);
