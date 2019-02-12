import _extends from 'babel-runtime/helpers/extends';
import _toConsumableArray from 'babel-runtime/helpers/toConsumableArray';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import FormControl from '@material-ui/core/FormControl';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import i18n from '@dhis2/d2-i18n';
import FixedPeriodsGenerator from './modules/FixedPeriodsGenerator';
import styles from './styles/PeriodFilter.style';

export var defaultState = {
    periodType: 'Monthly',
    year: new Date().getFullYear(),
    yearsOffset: 0,
    yearSelectElement: null
};

export var YEARS_RANGE = 8;

var FixedPeriodFilter = function (_Component) {
    _inherits(FixedPeriodFilter, _Component);

    function FixedPeriodFilter(props, context) {
        _classCallCheck(this, FixedPeriodFilter);

        var _this = _possibleConstructorReturn(this, (FixedPeriodFilter.__proto__ || _Object$getPrototypeOf(FixedPeriodFilter)).call(this, props));

        _this.componentDidMount = function () {
            var periods = _this.generatePeriods(_this.state.periodType, _this.state.year);

            _this.props.setOfferedPeriods(periods, true);
        };

        _this.onPeriodTypeChange = function (event) {
            _this.setState({
                periodType: event.target.value
            });

            if (_this.state.year) {
                _this.props.setOfferedPeriods(_this.generatePeriods(event.target.value, _this.state.year));
            }
        };

        _this.onYearChange = function (event) {
            _this.setState({
                year: event.target.value,
                yearSelectElement: null
            });

            if (_this.state.periodType) {
                _this.props.setOfferedPeriods(_this.generatePeriods(_this.state.periodType, event.target.value));
            }
        };

        _this.onYearSelectClick = function (event) {
            _this.setState({ yearSelectElement: event.currentTarget });
        };

        _this.getYears = function () {
            var years = [];

            years = years.concat([].concat(_toConsumableArray(Array(Math.floor(YEARS_RANGE / 2) + (YEARS_RANGE % 2 === 0 ? 1 : 2)).keys())).slice(1).reverse().map(function (offset) {
                return new Date().getFullYear() - offset + _this.state.yearsOffset;
            }));

            years = years.concat([].concat(_toConsumableArray(Array(Math.floor(YEARS_RANGE / 2)).keys())).map(function (offset) {
                return new Date().getFullYear() + offset + _this.state.yearsOffset;
            }));

            return years;
        };

        _this.generatePeriods = function (periodType, year) {
            var generator = _this.periodsGenerator.get(periodType);

            return generator.generatePeriods({
                offset: year - new Date().getFullYear(),
                filterFuturePeriods: false,
                reversePeriods: false
            }).map(function (period, idx) {
                return _extends({}, period, { idx: idx });
            });;
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

        _this.periodsGenerator = new FixedPeriodsGenerator();
        _this.i18n = context.d2.i18n;
        _this.state = defaultState;
        return _this;
    }

    _createClass(FixedPeriodFilter, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var years = this.getYears();

            return React.createElement(
                'div',
                { className: 'options-area' },
                React.createElement(
                    FormControl,
                    { className: 'form-control period-type' },
                    React.createElement(
                        InputLabel,
                        { style: styles.inputLabel, className: 'input-label', htmlFor: 'period-type' },
                        i18n.t('Period type')
                    ),
                    React.createElement(
                        Select,
                        {
                            onChange: this.onPeriodTypeChange,
                            value: this.state.periodType,
                            inputProps: { name: 'periodType', id: 'period-type' },
                            disableUnderline: true
                        },
                        this.periodsGenerator.getOptions().map(function (option) {
                            return React.createElement(
                                MenuItem,
                                { value: option, key: option },
                                option
                            );
                        })
                    )
                ),
                React.createElement(
                    FormControl,
                    { className: 'form-control year' },
                    React.createElement(
                        InputLabel,
                        { style: styles.inputLabel, className: 'input-label', htmlFor: 'year' },
                        i18n.t('Year')
                    ),
                    React.createElement(Select, {
                        SelectDisplayProps: {
                            id: 'year-select',
                            onClick: this.onYearSelectClick
                        },
                        value: this.state.year,
                        inputProps: { name: 'year', id: 'year' },
                        renderValue: this.renderYearSelectValue,
                        disableUnderline: true,
                        disabled: true
                    }),
                    React.createElement(
                        Menu,
                        {
                            MenuListProps: {
                                id: 'year-select-menu'
                            },
                            anchorEl: this.state.yearSelectElement,
                            open: Boolean(this.state.yearSelectElement),
                            onClose: this.closeYearSelect
                        },
                        React.createElement(
                            MenuItem,
                            {
                                value: '',
                                key: 'shiftYearsBack',
                                onClick: this.shiftYearsBack
                            },
                            React.createElement(ArrowUpIcon, null)
                        ),
                        years.map(function (year) {
                            return React.createElement(
                                MenuItem,
                                {
                                    onClick: _this2.onYearChange,
                                    key: year,
                                    value: year,
                                    selected: _this2.state.year === year
                                },
                                year
                            );
                        }),
                        React.createElement(
                            MenuItem,
                            {
                                value: '',
                                key: 'shiftYearsForth',
                                onClick: this.shiftYearsForth
                            },
                            React.createElement(ArrowDownIcon, null)
                        )
                    )
                )
            );
        }
    }]);

    return FixedPeriodFilter;
}(Component);

FixedPeriodFilter.propTypes = {
    setOfferedPeriods: PropTypes.func.isRequired
};

FixedPeriodFilter.contextTypes = {
    d2: PropTypes.object
};

export default FixedPeriodFilter;