'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('@emotion/styled');

var _styled2 = _interopRequireDefault(_styled);

var _lodash = require('lodash');

var _animations = require('../../themes/animations');

var _animations2 = _interopRequireDefault(_animations);

var _header = require('../header');

var _header2 = _interopRequireDefault(_header);

var _Drawer = require('./Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _Loading = require('./Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Li = (0, _styled2.default)('li', {
    shouldForwardProp: function shouldForwardProp(prop) {
        return ['className', 'children', 'ref'].indexOf(prop) !== -1;
    }
})(function (_ref) {
    var style = _ref.style;
    return style;
});
var Ul = (0, _styled2.default)('ul', {
    shouldForwardProp: function shouldForwardProp(prop) {
        return ['className', 'children', 'ref'].indexOf(prop) !== -1;
    }
})(function (_ref2) {
    var style = _ref2.style;
    return style;
});

var TreeNode = function (_PureComponent) {
    (0, _inherits3.default)(TreeNode, _PureComponent);

    function TreeNode(props) {
        (0, _classCallCheck3.default)(this, TreeNode);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TreeNode.__proto__ || (0, _getPrototypeOf2.default)(TreeNode)).call(this, props));

        _this.velocityRef = (0, _react.createRef)();
        _this.subtreeRef = (0, _react.createRef)();
        _this.topLevelRef = (0, _react.createRef)();
        return _this;
    }

    (0, _createClass3.default)(TreeNode, [{
        key: 'onClick',
        value: function onClick() {
            var _props = this.props,
                node = _props.node,
                onToggle = _props.onToggle;
            var toggled = node.toggled;


            if (onToggle) {
                onToggle(node, !toggled);
            }
        }
    }, {
        key: 'animations',
        value: function animations() {
            var _props2 = this.props,
                animations = _props2.animations,
                node = _props2.node;

            if (!animations) {
                return {
                    toggle: _animations2.default.toggle(this.props, 0)
                };
            }
            var animation = (0, _assign2.default)({}, animations, node.animations);
            return {
                toggle: animation.toggle(this.props),
                drawer: animation.drawer(this.props)
            };
        }
    }, {
        key: 'decorators',
        value: function decorators() {
            // Merge Any Node Based Decorators Into The Pack
            var _props3 = this.props,
                decorators = _props3.decorators,
                node = _props3.node;

            var nodeDecorators = node.decorators || {};

            return (0, _assign2.default)({}, decorators, nodeDecorators);
        }
    }, {
        key: 'renderDrawer',
        value: function renderDrawer(decorators, animations) {
            var toggled = this.props.node.toggled;

            if (!animations) {
                if (!toggled) {
                    return null;
                }
                return this.renderChildren(decorators, animations);
            }

            var restAnimationInfo = (0, _objectWithoutProperties3.default)(animations.drawer, []);

            return _react2.default.createElement(
                _Drawer2.default,
                { restAnimationInfo: (0, _extends3.default)({}, restAnimationInfo), reference: this.velocityRef },
                toggled ? this.renderChildren(decorators, animations) : null
            );
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren(decorators) {
            var _props4 = this.props,
                animations = _props4.animations,
                propDecorators = _props4.decorators,
                node = _props4.node,
                style = _props4.style,
                onToggle = _props4.onToggle;


            if (node.loading) {
                return _react2.default.createElement(_Loading2.default, { decorators: decorators, style: style });
            }

            var children = node.children;
            if (!(0, _lodash.isArray)(children)) {
                children = children ? [children] : [];
            }

            return _react2.default.createElement(
                Ul,
                { style: style.subtree,
                    ref: this.subtreeRef },
                children.map(function (child, index) {
                    return _react2.default.createElement(TreeNode, (0, _extends3.default)({ onToggle: onToggle, animations: animations, style: style }, {
                        decorators: propDecorators,
                        key: child.id || index,
                        node: child
                    }));
                })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props5 = this.props,
                node = _props5.node,
                style = _props5.style;

            var decorators = this.decorators();
            var animations = this.animations();

            return _react2.default.createElement(
                Li,
                { ref: this.topLevelRef,
                    style: style.base },
                _react2.default.createElement(_header2.default, (0, _extends3.default)({ decorators: decorators, animations: animations, node: node, style: style }, { onClick: function onClick() {
                        return _this2.onClick();
                    } })),
                this.renderDrawer(decorators, animations)
            );
        }
    }]);
    return TreeNode;
}(_react.PureComponent);

TreeNode.propTypes = {
    style: _propTypes2.default.object.isRequired,
    node: _propTypes2.default.object.isRequired,
    decorators: _propTypes2.default.object.isRequired,
    animations: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]).isRequired,
    onToggle: _propTypes2.default.func
};

exports.default = TreeNode;