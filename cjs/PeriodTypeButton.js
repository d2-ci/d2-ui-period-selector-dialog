'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PeriodTypeButton = function (_Component) {
    (0, _inherits3.default)(PeriodTypeButton, _Component);

    function PeriodTypeButton(props, context) {
        (0, _classCallCheck3.default)(this, PeriodTypeButton);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PeriodTypeButton.__proto__ || (0, _getPrototypeOf2.default)(PeriodTypeButton)).call(this, props));

        _this.handleClick = function () {
            _this.props.onClick(_this.props.periodType);
        };

        _this.render = function () {
            return _react2.default.createElement(
                _Button2.default,
                {
                    className: 'nav-button ' + (_this.props.periodType === _this.props.activePeriodType ? 'active' : ''),
                    onClick: _this.handleClick
                },
                _this.i18n.getTranslation(_this.props.text)
            );
        };

        _this.i18n = context.d2.i18n;
        return _this;
    }

    return PeriodTypeButton;
}(_react.Component);

PeriodTypeButton.propTypes = {
    periodType: _propTypes2.default.string.isRequired,
    activePeriodType: _propTypes2.default.string.isRequired,
    text: _propTypes2.default.string.isRequired,
    onClick: _propTypes2.default.func.isRequired
};

PeriodTypeButton.contextTypes = {
    d2: _propTypes2.default.object
};

exports.default = PeriodTypeButton;