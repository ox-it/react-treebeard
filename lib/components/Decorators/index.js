'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _velocityReact = require('velocity-react');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Loading = require('./Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _Toggle = require('./Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function (_PureComponent) {
    (0, _inherits3.default)(Container, _PureComponent);

    function Container(props) {
        (0, _classCallCheck3.default)(this, Container);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Container.__proto__ || (0, _getPrototypeOf2.default)(Container)).call(this, props));

        _this.velocityRef = (0, _react.createRef)();
        _this.clickableRef = (0, _react.createRef)();
        return _this;
    }

    (0, _createClass3.default)(Container, [{
        key: 'renderToggle',
        value: function renderToggle() {
            var animations = this.props.animations;


            if (!animations) {
                return this.renderToggleDecorator();
            }

            return _react2.default.createElement(
                _velocityReact.VelocityComponent,
                {
                    animation: animations.toggle.animation,
                    duration: animations.toggle.duration,
                    ref: this.velocityRef },
                this.renderToggleDecorator()
            );
        }
    }, {
        key: 'renderToggleDecorator',
        value: function renderToggleDecorator() {
            var _props = this.props,
                style = _props.style,
                decorators = _props.decorators;

            return _react2.default.createElement(decorators.Toggle, { style: style.toggle });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                style = _props2.style,
                decorators = _props2.decorators,
                terminal = _props2.terminal,
                onClick = _props2.onClick,
                node = _props2.node;

            return _react2.default.createElement(
                'div',
                {
                    onClick: onClick,
                    ref: this.clickableRef,
                    style: _assign2.default.apply(Object, [{}].concat((0, _toConsumableArray3.default)(style.container))) },
                !terminal ? this.renderToggle() : null,
                _react2.default.createElement(decorators.Header, { node: node, style: style.header })
            );
        }
    }]);
    return Container;
}(_react.PureComponent);

Container.propTypes = {
    style: _propTypes2.default.object.isRequired,
    decorators: _propTypes2.default.object.isRequired,
    terminal: _propTypes2.default.bool.isRequired,
    onClick: _propTypes2.default.func.isRequired,
    animations: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]).isRequired,
    node: _propTypes2.default.object.isRequired
};

exports.default = {
    Loading: _Loading2.default,
    Toggle: _Toggle2.default,
    Header: _Header2.default,
    Container: Container
};