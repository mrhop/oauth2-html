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

var _utilFun = require('utilFun');

var _utilFun2 = _interopRequireDefault(_utilFun);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthMain = function (_React$Component) {
    _inherits(AuthMain, _React$Component);

    function AuthMain(props) {
        _classCallCheck(this, AuthMain);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AuthMain).call(this, props));

        _this.state = {
            name: 'Eric',
            unreadCount: 1000
        };
        return _this;
    }

    _createClass(AuthMain, [{
        key: 'render',
        value: function render() {
            var _state = this.state;
            var name = _state.name;
            var unreadCount = _state.unreadCount;

            return _react2.default.createElement(
                'p',
                null,
                'Hello ',
                _react2.default.createElement(
                    'b',
                    null,
                    name
                ),
                ', you have'
            );
        }
    }]);

    return AuthMain;
}(_react2.default.Component);

_utilFun2.default.domReady(function () {
    _reactDom2.default.render(_react2.default.createElement(AuthMain, null), document.getElementById('containerTest'));
});

},{"../data/auth":1,"react":"react","react-dom":"react-dom","utilFun":"utilFun"}]},{},[2]);
