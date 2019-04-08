'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('@emotion/styled');

var _styled2 = _interopRequireDefault(_styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = (0, _styled2.default)(function (_ref) {
    var className = _ref.className;
    return _react2.default.createElement(
        'div',
        { className: className },
        'loading...'
    );
})(function (_ref2) {
    var style = _ref2.style;
    return style;
});

Loading.propTypes = {
    style: _propTypes2.default.object
};

exports.default = Loading;