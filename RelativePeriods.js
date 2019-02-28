'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultState = undefined;

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

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _InputLabel = require('@material-ui/core/InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _Select = require('@material-ui/core/Select');

var _Select2 = _interopRequireDefault(_Select);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _RelativePeriodsGenerator = require('./utils/RelativePeriodsGenerator');

var _RelativePeriodsGenerator2 = _interopRequireDefault(_RelativePeriodsGenerator);

var _PeriodsList = require('./PeriodsList');

var _PeriodsList2 = _interopRequireDefault(_PeriodsList);

var _PeriodListItem = require('./styles/PeriodListItem.style');

var _PeriodListItem2 = _interopRequireDefault(_PeriodListItem);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = exports.defaultState = {
    periodType: 'Months'
};

var RelativePeriods = function (_Component) {
    (0, _inherits3.default)(RelativePeriods, _Component);

    function RelativePeriods(props) {
        (0, _classCallCheck3.default)(this, RelativePeriods);

        var _this = (0, _possibleConstructorReturn3.default)(this, (RelativePeriods.__proto__ || (0, _getPrototypeOf2.default)(RelativePeriods)).call(this, props));

        _this.componentDidMount = function () {
            var periods = _this.generatePeriods(_this.state.periodType);

            _this.setOfferedPeriods(periods);
        };

        _this.onPeriodTypeChange = function (event) {
            _this.setState({
                periodType: event.target.value
            });

            _this.setOfferedPeriods(_this.generatePeriods(event.target.value));
        };

        _this.setOfferedPeriods = function (periods) {
            var selectedIds = _this.props.selectedItems.map(function (period) {
                return period.id;
            });

            _this.props.setOfferedPeriodIds(periods);
            _this.props.setOfferedPeriods(periods.filter(function (period) {
                return !selectedIds.includes(period.id);
            }));
        };

        _this.generatePeriods = function (periodType) {
            var generator = _this.periodsGenerator.get(periodType);

            return generator.generatePeriods();
        };

        _this.selectAll = function () {
            _this.props.onSelect(_this.props.items);
            _this.props.setOfferedPeriods([]);
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
                        { style: _PeriodListItem2.default.inputLabel, className: 'input-label', htmlFor: 'period-type' },
                        _d2I18n2.default.t('Period type')
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
                    onPeriodDoubleClick: _this.props.onPeriodDoubleClick,
                    listClassName: 'periods-list-offered'
                }),
                _react2.default.createElement(
                    'div',
                    { style: { textAlign: 'center' } },
                    _react2.default.createElement(
                        _Button2.default,
                        { onClick: _this.selectAll },
                        _d2I18n2.default.t('Select all')
                    )
                )
            );
        };

        _this.state = defaultState;
        _this.periodsGenerator = new _RelativePeriodsGenerator2.default();
        return _this;
    }

    (0, _createClass3.default)(RelativePeriods, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var prevItems = prevProps.selectedItems.map(function (period) {
                return period.id;
            });
            var currentItems = this.props.selectedItems.map(function (period) {
                return period.id;
            });

            if (!(0, _isEqual2.default)(prevItems, currentItems)) {
                this.setOfferedPeriods(this.generatePeriods(this.state.periodType, this.state.year));
            }
        }
    }]);
    return RelativePeriods;
}(_react.Component);

RelativePeriods.propTypes = {
    items: _propTypes2.default.array.isRequired,
    selectedItems: _propTypes2.default.array.isRequired,
    setOfferedPeriods: _propTypes2.default.func.isRequired,
    setOfferedPeriodIds: _propTypes2.default.func.isRequired,
    onSelect: _propTypes2.default.func.isRequired,
    onPeriodDoubleClick: _propTypes2.default.func.isRequired,
    onPeriodClick: _propTypes2.default.func.isRequired
};

exports.default = RelativePeriods;