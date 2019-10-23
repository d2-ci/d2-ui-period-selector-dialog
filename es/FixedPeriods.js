import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import FixedPeriodsGenerator from './utils/FixedPeriodsGenerator';
import PeriodsList from './PeriodsList';

export var defaultState = {
    periodType: 'Weekly',
    year: new Date().getFullYear()
};

var FixedPeriods = function (_Component) {
    _inherits(FixedPeriods, _Component);

    function FixedPeriods(props, context) {
        _classCallCheck(this, FixedPeriods);

        var _this = _possibleConstructorReturn(this, (FixedPeriods.__proto__ || _Object$getPrototypeOf(FixedPeriods)).call(this, props));

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
                year: event.target.value
            });

            if (_this.state.periodType) {
                _this.props.setOfferedPeriods(_this.generatePeriods(_this.state.periodType, event.target.value));
            }
        };

        _this.getYears = function () {
            var years = [];
            years = years.concat([0, 1, 2, 3, 4].map(function (offset) {
                return new Date().getFullYear() - offset;
            }));
            years = years.concat([1, 2, 3, 4].map(function (offset) {
                return new Date().getFullYear() + offset;
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

        _this.componentDidMount = function () {
            _this.props.setOfferedPeriods(_this.generatePeriods(_this.state.periodType, _this.state.year));
        };

        _this.renderOptions = function () {
            return React.createElement(
                'div',
                { className: 'options-area' },
                React.createElement(
                    FormControl,
                    { className: 'form-control period-type' },
                    React.createElement(
                        InputLabel,
                        { className: 'input-label', htmlFor: 'period-type' },
                        _this.i18n.getTranslation('Period type')
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
                        _this.i18n.getTranslation('Year')
                    ),
                    React.createElement(
                        Select,
                        {
                            onChange: _this.onYearChange,
                            value: _this.state.year,
                            inputProps: { name: 'year', id: 'year' },
                            disableUnderline: true
                        },
                        _this.years.sort().map(function (year) {
                            return React.createElement(
                                MenuItem,
                                { value: year, key: year },
                                year
                            );
                        })
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
                })
            );
        };

        _this.periodsGenerator = new FixedPeriodsGenerator();
        _this.i18n = context.d2.i18n;
        _this.years = _this.getYears();
        _this.state = defaultState;
        return _this;
    }

    return FixedPeriods;
}(Component);

FixedPeriods.propTypes = {
    items: PropTypes.array.isRequired,
    onDoubleClick: PropTypes.func.isRequired,
    onPeriodClick: PropTypes.func.isRequired,
    setOfferedPeriods: PropTypes.func.isRequired
};

FixedPeriods.contextTypes = {
    d2: PropTypes.object
};

export default FixedPeriods;