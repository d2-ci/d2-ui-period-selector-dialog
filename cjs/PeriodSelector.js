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

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Periods = require('./Periods');

var _Periods2 = _interopRequireDefault(_Periods);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PeriodSelector = function (_Component) {
    (0, _inherits3.default)(PeriodSelector, _Component);

    function PeriodSelector() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, PeriodSelector);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PeriodSelector.__proto__ || (0, _getPrototypeOf2.default)(PeriodSelector)).call.apply(_ref, [this].concat(args))), _this), _this.getChildContext = function () {
            return {
                d2: _this.props.d2
            };
        }, _this.render = function () {
            return _react2.default.createElement(
                _reactRedux.Provider,
                { store: _reducers2.default },
                _react2.default.createElement(_Periods2.default, _this.props)
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return PeriodSelector;
}(_react.Component);

PeriodSelector.propTypes = {
    d2: _propTypes2.default.object.isRequired,
    onSelect: _propTypes2.default.func,
    onDeselect: _propTypes2.default.func,
    selectedItems: _propTypes2.default.array
};

PeriodSelector.defaultProps = {
    onSelect: function onSelect() {
        return null;
    },
    onDeselect: function onDeselect() {
        return null;
    },
    selectedItems: []
};

PeriodSelector.childContextTypes = {
    d2: _propTypes2.default.object
};

exports.default = PeriodSelector;