/**
 * Created by Donghui Huo on 2016/3/15.
 */
let React= global.React = require('react');
var ReactDOM = global.ReactDOM  = require('react-dom');

var app = require('./module/module.jsx');
var $ = jQuery = require('jquery');
require("bootstrap");
var utilFun = require("utilFun");
$(document).ready(function () {
    app.invoke();
});

