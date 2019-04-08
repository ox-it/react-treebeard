'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Div = undefined;

var _styled = require('@emotion/styled');

var _styled2 = _interopRequireDefault(_styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Div = (0, _styled2.default)('div', {
    shouldForwardProp: function shouldForwardProp(prop) {
        return ['className', 'children'].indexOf(prop) !== -1;
    }
})(function (_ref) {
    var style = _ref.style;
    return style;
});

exports.Div = Div;