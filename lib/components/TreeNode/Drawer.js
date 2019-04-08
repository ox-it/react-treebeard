'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _velocityReact = require('velocity-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Drawer = function Drawer(_ref) {
    var restAnimationInfo = _ref.restAnimationInfo,
        children = _ref.children,
        reference = _ref.reference;
    return _react2.default.createElement(
        _velocityReact.VelocityTransitionGroup,
        (0, _extends3.default)({}, restAnimationInfo, {
            ref: reference
        }),
        children
    );
};

Drawer.propTypes = {
    restAnimationInfo: _propTypes2.default.shape({}).isRequired,
    children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.arrayOf(_propTypes2.default.func, _propTypes2.default.shape({})), _propTypes2.default.shape({})]),
    reference: _propTypes2.default.shape({}).isRequired
};

exports.default = Drawer;