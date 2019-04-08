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

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Polygon = (0, _styled2.default)('polygon', {
    shouldForwardProp: function shouldForwardProp(prop) {
        return ['className', 'children', 'points'].indexOf(prop) !== -1;
    }
})(function (_ref) {
    var style = _ref.style;
    return style;
});

var Toggle = function Toggle(_ref2) {
    var style = _ref2.style;
    var height = style.height,
        width = style.width;

    var midHeight = height * 0.5;
    var points = '0,0 0,' + height + ' ' + width + ',' + midHeight;

    return _react2.default.createElement(
        _common.Div,
        { style: style.base },
        _react2.default.createElement(
            _common.Div,
            { style: style.wrapper },
            _react2.default.createElement(
                'svg',
                { height: height, width: width },
                _react2.default.createElement(Polygon, { points: points, style: style.arrow })
            )
        )
    );
};

Toggle.propTypes = {
    style: _propTypes2.default.object
};

exports.default = Toggle;