import _toConsumableArray from 'babel-runtime/helpers/toConsumableArray';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button/Button';
import i18n from '@dhis2/d2-i18n';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import FixedPeriodsGenerator from './utils/FixedPeriodsGenerator';
import PeriodsList from './PeriodsList';

export var defaultState = {
    periodType: 'Monthly',
    year: new Date().getFullYear(),
    yearsOffset: 0,
    yearSelectElement: null
};

export var YEARS_RANGE = 8;

var FixedPeriods = function (_Component) {
    _inherits(FixedPeriods, _Component);

    function FixedPeriods(props, context) {
        _classCallCheck(this, FixedPeriods);

        var _this = _possibleConstructorReturn(this, (FixedPeriods.__proto__ || _Object$getPrototypeOf(FixedPeriods)).call(this, props));

        _this.componentDidMount = function () {
            _this.props.setOfferedPeriods(_this.generatePeriods(_this.state.periodType, _this.state.year));
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
            });
        };

        _this.selectAll = function () {
            _this.props.addSelectedPeriods(_this.props.items);
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

            return React.createElement(
                'div',
                { className: 'options-area' },
                React.createElement(
                    FormControl,
                    { className: 'form-control period-type' },
                    React.createElement(
                        InputLabel,
                        { className: 'input-label', htmlFor: 'period-type' },
                        i18n.t('Period type')
                    ),
                    React.createElement(
                        Select,
                        {
                            onChange: _this.onPeriodTypeChange,
                            value: _this.state.periodType,
                            inputProps: { name: 'periodType', id: 'period-type' },
                            disableUnderline: true
                        },
                        _this.periodsGenerator.getOptions().map(function (option) {
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
                        { className: 'input-label', htmlFor: 'year' },
                        i18n.t('Year')
                    ),
                    React.createElement(Select, {
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
                    React.createElement(
                        Menu,
                        {
                            MenuListProps: {
                                id: 'year-select-menu'
                            },
                            anchorEl: _this.state.yearSelectElement,
                            open: Boolean(_this.state.yearSelectElement),
                            onClose: _this.closeYearSelect
                        },
                        React.createElement(
                            MenuItem,
                            {
                                value: '',
                                key: 'shiftYearsBack',
                                onClick: _this.shiftYearsBack
                            },
                            React.createElement(ArrowUpIcon, null)
                        ),
                        years.map(function (year) {
                            return React.createElement(
                                MenuItem,
                                {
                                    onClick: _this.onYearChange,
                                    key: year,
                                    value: year,
                                    selected: _this.state.year === year
                                },
                                year
                            );
                        }),
                        React.createElement(
                            MenuItem,
                            {
                                value: '',
                                key: 'shiftYearsForth',
                                onClick: _this.shiftYearsForth
                            },
                            React.createElement(ArrowDownIcon, null)
                        )
                    )
                )
            );
        };

        _this.render = function () {
            var Options = _this.renderOptions();

            return React.createElement(
                'div',
                { className: 'selector-area' },
                Options,
                React.createElement(PeriodsList, {
                    items: _this.props.items,
                    onDoubleClick: _this.props.onDoubleClick,
                    onPeriodClick: _this.props.onPeriodClick,
                    listClassName: 'periods-list-offered'
                }),
                React.createElement(
                    'div',
                    { style: { textAlign: 'center' } },
                    React.createElement(
                        Button,
                        { onClick: _this.selectAll },
                        i18n.t('Select all')
                    )
                )
            );
        };

        _this.periodsGenerator = new FixedPeriodsGenerator();
        _this.i18n = context.d2.i18n;
        _this.state = defaultState;
        return _this;
    }

    return FixedPeriods;
}(Component);

FixedPeriods.propTypes = {
    items: PropTypes.array.isRequired,
    onDoubleClick: PropTypes.func.isRequired,
    onPeriodClick: PropTypes.func.isRequired,
    setOfferedPeriods: PropTypes.func.isRequired,
    addSelectedPeriods: PropTypes.func.isRequired
};

FixedPeriods.contextTypes = {
    d2: PropTypes.object
};

export default FixedPeriods;