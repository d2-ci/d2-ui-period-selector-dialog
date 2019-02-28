'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.YEARS_RANGE = exports.defaultState = undefined;

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

var _InputLabel = require('@material-ui/core/InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _Select = require('@material-ui/core/Select');

var _Select2 = _interopRequireDefault(_Select);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Menu = require('@material-ui/core/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('@material-ui/core/Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _KeyboardArrowDown = require('@material-ui/icons/KeyboardArrowDown');

var _KeyboardArrowDown2 = _interopRequireDefault(_KeyboardArrowDown);

var _KeyboardArrowUp = require('@material-ui/icons/KeyboardArrowUp');

var _KeyboardArrowUp2 = _interopRequireDefault(_KeyboardArrowUp);

var _FixedPeriodsGenerator = require('./utils/FixedPeriodsGenerator');

var _FixedPeriodsGenerator2 = _interopRequireDefault(_FixedPeriodsGenerator);

var _PeriodsList = require('./PeriodsList');

var _PeriodsList2 = _interopRequireDefault(_PeriodsList);

var _PeriodListItem = require('./styles/PeriodListItem.style');

var _PeriodListItem2 = _interopRequireDefault(_PeriodListItem);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = exports.defaultState = {
    periodType: 'Monthly',
    year: new Date().getFullYear(),
    yearsOffset: 0,
    yearSelectElement: null
};

var YEARS_RANGE = exports.YEARS_RANGE = 8;

var FixedPeriods = function (_Component) {
    (0, _inherits3.default)(FixedPeriods, _Component);

    function FixedPeriods(props, context) {
        (0, _classCallCheck3.default)(this, FixedPeriods);

        var _this = (0, _possibleConstructorReturn3.default)(this, (FixedPeriods.__proto__ || (0, _getPrototypeOf2.default)(FixedPeriods)).call(this, props));

        _this.componentDidMount = function () {
            var periods = _this.generatePeriods(_this.state.periodType, _this.state.year);

            _this.setOfferedPeriods(periods);
        };

        _this.onPeriodTypeChange = function (event) {
            _this.setState({
                periodType: event.target.value
            });

            if (_this.state.year) {
                _this.setOfferedPeriods(_this.generatePeriods(event.target.value, _this.state.year));
            }
        };

        _this.onYearChange = function (event) {
            _this.setState({
                year: event.target.value,
                yearSelectElement: null
            });

            if (_this.state.periodType) {
                _this.setOfferedPeriods(_this.generatePeriods(_this.state.periodType, event.target.value));
            }
        };

        _this.onYearSelectClick = function (event) {
            _this.setState({ yearSelectElement: event.currentTarget });
        };

        _this.getYears = function () {
            var years = [];

            years = years.concat([].concat((0, _toConsumableArray3.default)(Array(Math.floor(YEARS_RANGE / 2) + (YEARS_RANGE % 2 === 0 ? 1 : 2)).keys())).slice(1).reverse().map(function (offset) {
                return new Date().getFullYear() - offset + _this.state.yearsOffset;
            }));

            years = years.concat([].concat((0, _toConsumableArray3.default)(Array(Math.floor(YEARS_RANGE / 2)).keys())).map(function (offset) {
                return new Date().getFullYear() + offset + _this.state.yearsOffset;
            }));

            return years;
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

        _this.generatePeriods = function (periodType, year) {
            var generator = _this.periodsGenerator.get(periodType);

            return generator.generatePeriods({
                offset: year - new Date().getFullYear(),
                filterFuturePeriods: false,
                reversePeriods: false
            });
        };

        _this.selectAll = function () {
            _this.props.onSelect(_this.props.items);
            _this.props.setOfferedPeriods([]);
        };

        _this.closeYearSelect = function () {
            _this.setState({ yearSelectElement: null });
        };

        _this.shiftYearsBack = function () {
            _this.setState({ yearsOffset: _this.state.yearsOffset - YEARS_RANGE });
        };

        _this.shiftYearsForth = function () {
            _this.setState({ yearsOffset: _this.state.yearsOffset + YEARS_RANGE });
        };

        _this.renderYearSelectValue = function () {
            return _this.state.year;
        };

        _this.renderOptions = function () {
            var years = _this.getYears();

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
                            disableUnderline: true
                        },
                        _this.periodsGenerator.getOptions().map(function (option) {
                            return _react2.default.createElement(
                                _MenuItem2.default,
                                { value: option, key: option },
                                option
                            );
                        })
                    )
                ),
                _react2.default.createElement(
                    _FormControl2.default,
                    { className: 'form-control year' },
                    _react2.default.createElement(
                        _InputLabel2.default,
                        { style: _PeriodListItem2.default.inputLabel, className: 'input-label', htmlFor: 'year' },
                        _d2I18n2.default.t('Year')
                    ),
                    _react2.default.createElement(_Select2.default, {
                        SelectDisplayProps: {
                            id: 'year-select',
                            onClick: _this.onYearSelectClick
                        },
                        value: _this.state.year,
                        inputProps: { name: 'year', id: 'year' },
                        renderValue: _this.renderYearSelectValue,
                        disableUnderline: true,
                        disabled: true
                    }),
                    _react2.default.createElement(
                        _Menu2.default,
                        {
                            MenuListProps: {
                                id: 'year-select-menu'
                            },
                            anchorEl: _this.state.yearSelectElement,
                            open: Boolean(_this.state.yearSelectElement),
                            onClose: _this.closeYearSelect
                        },
                        _react2.default.createElement(
                            _MenuItem2.default,
                            {
                                value: '',
                                key: 'shiftYearsBack',
                                onClick: _this.shiftYearsBack
                            },
                            _react2.default.createElement(_KeyboardArrowUp2.default, null)
                        ),
                        years.map(function (year) {
                            return _react2.default.createElement(
                                _MenuItem2.default,
                                {
                                    onClick: _this.onYearChange,
                                    key: year,
                                    value: year,
                                    selected: _this.state.year === year
                                },
                                year
                            );
                        }),
                        _react2.default.createElement(
                            _MenuItem2.default,
                            {
                                value: '',
                                key: 'shiftYearsForth',
                                onClick: _this.shiftYearsForth
                            },
                            _react2.default.createElement(_KeyboardArrowDown2.default, null)
                        )
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
                    onPeriodDoubleClick: _this.props.onPeriodDoubleClick,
                    onPeriodClick: _this.props.onPeriodClick,
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

        _this.periodsGenerator = new _FixedPeriodsGenerator2.default();
        _this.i18n = context.d2.i18n;
        _this.state = defaultState;
        return _this;
    }

    (0, _createClass3.default)(FixedPeriods, [{
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
    return FixedPeriods;
}(_react.Component);

FixedPeriods.propTypes = {
    items: _propTypes2.default.array.isRequired,
    selectedItems: _propTypes2.default.array.isRequired,
    onPeriodDoubleClick: _propTypes2.default.func.isRequired,
    onPeriodClick: _propTypes2.default.func.isRequired,
    setOfferedPeriods: _propTypes2.default.func.isRequired,
    setOfferedPeriodIds: _propTypes2.default.func.isRequired,
    onSelect: _propTypes2.default.func.isRequired
};

FixedPeriods.contextTypes = {
    d2: _propTypes2.default.object
};

exports.default = FixedPeriods;