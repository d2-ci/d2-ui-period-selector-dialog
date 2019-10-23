'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultState = undefined;

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

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _InputLabel = require('@material-ui/core/InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _Select = require('@material-ui/core/Select');

var _Select2 = _interopRequireDefault(_Select);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _RelativePeriodsGenerator = require('./utils/RelativePeriodsGenerator');

var _RelativePeriodsGenerator2 = _interopRequireDefault(_RelativePeriodsGenerator);

var _PeriodsList = require('./PeriodsList');

var _PeriodsList2 = _interopRequireDefault(_PeriodsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = exports.defaultState = {
    periodType: 'Weeks'
};

var RelativePeriods = function (_Component) {
    (0, _inherits3.default)(RelativePeriods, _Component);

    function RelativePeriods(props, context) {
        (0, _classCallCheck3.default)(this, RelativePeriods);

        var _this = (0, _possibleConstructorReturn3.default)(this, (RelativePeriods.__proto__ || (0, _getPrototypeOf2.default)(RelativePeriods)).call(this, props));

        _this.componentDidMount = function () {
            _this.props.setOfferedPeriods(_this.generatePeriods(_this.state.periodType));
        };

        _this.onPeriodTypeChange = function (event) {
            _this.setState({
                periodType: event.target.value
            });

            _this.props.setOfferedPeriods(_this.generatePeriods(event.target.value));
        };

        _this.generatePeriods = function (periodType) {
            var generator = _this.periodsGenerator.get(periodType);
            return generator.generatePeriods();
        };

        _this.renderOptions = function () {
            return _react2.default.createElement(
                'div',
                { className: 'options-area' },
                _react2.default.createElement(
                    _FormControl2.default,
                    { className: 'form-control period-type' },
                    _react2.default.createElement(
                        _InputLabel2.default,
                        { className: 'input-label', htmlFor: 'period-type' },
                        _this.i18n.getTranslation('Period type')
                    ),
                    _react2.default.createElement(
                        _Select2.default,
                        {
                            onChange: _this.onPeriodTypeChange,
                            value: _this.state.periodType,
                            inputProps: { name: 'periodType', id: 'period-type' },
                            disableUnderline: true,
                            variant: 'filled'
                        },
                        _this.periodsGenerator.getOptions().map(function (option) {
                            return _react2.default.createElement(
                                _MenuItem2.default,
                                { value: option, key: option },
                                option
                            );
                        })
                    )
                )
            );
        };

        _this.render = function () {
            var Options = _this.renderOptions();

            return _react2.default.createElement(
                'div',
                { className: 'selector-area' },
                Options,
                _react2.default.createElement(_PeriodsList2.default, {
                    items: _this.props.items,
                    onPeriodClick: _this.props.onPeriodClick,
                    onDoubleClick: _this.props.onDoubleClick,
                    listClassName: 'periods-list-offered'
                })
            );
        };

        _this.state = defaultState;
        _this.i18n = context.d2.i18n;
        _this.periodsGenerator = new _RelativePeriodsGenerator2.default();
        return _this;
    }

    return RelativePeriods;
}(_react.Component);

RelativePeriods.propTypes = {
    items: _propTypes2.default.array.isRequired,
    setOfferedPeriods: _propTypes2.default.func.isRequired,
    onDoubleClick: _propTypes2.default.func.isRequired,
    onPeriodClick: _propTypes2.default.func.isRequired
};

RelativePeriods.contextTypes = {
    d2: _propTypes2.default.object
};

exports.default = RelativePeriods;