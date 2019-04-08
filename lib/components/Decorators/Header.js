'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var node = _ref.node,
        style = _ref.style;
    return _react2.default.createElement(
        _common.Div,
        { style: style.base },
        _react2.default.createElement(
            _common.Div,
            { style: style.title },
            node.name
        )
    );
};

Header.propTypes = {
    style: _propTypes2.default.object,
    node: _propTypes2.default.object.isRequired
};

exports.default = Header;