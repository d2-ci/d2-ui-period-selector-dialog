import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import i18n from '@dhis2/d2-i18n';
import RelativePeriodsGenerator from './modules/RelativePeriodsGenerator';
import styles from './styles/PeriodFilter.style';

export var defaultState = {
    periodType: 'Months'
};

var RelativePeriods = function (_Component) {
    _inherits(RelativePeriods, _Component);

    function RelativePeriods(props) {
        _classCallCheck(this, RelativePeriods);

        var _this = _possibleConstructorReturn(this, (RelativePeriods.__proto__ || _Object$getPrototypeOf(RelativePeriods)).call(this, props));

        _this.componentDidMount = function () {
            var periods = _this.generatePeriods(_this.state.periodType);
            _this.props.setOfferedPeriods(periods, true);
        };

        _this.onPeriodTypeChange = function (event) {
            _this.setState({
                periodType: event.target.value
            });

            _this.props.setOfferedPeriods(_this.generatePeriods(event.target.value));
        };

        _this.generatePeriods = function (periodType) {
            var generator = _this.periodsGenerator.get(periodType);

            return generator.generatePeriods().map(function (period, idx) {
                return _extends({}, period, { idx: idx });
            });
        };

        _this.render = function () {
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
                            onChange: _this.onPeriodTypeChange,
                            value: _this.state.periodType,
                            inputProps: { name: 'periodType', id: 'period-type' },
                            disableUnderline: true,
                            variant: 'filled'
                        },
                        _this.periodsGenerator.getOptions().map(function (option) {
                            return React.createElement(
                                MenuItem,
                                { value: option, key: option },
                                option
                            );
                        })
                    )
                )
            );
        };

        _this.state = defaultState;
        _this.periodsGenerator = new RelativePeriodsGenerator();
        return _this;
    }

    return RelativePeriods;
}(Component);

RelativePeriods.propTypes = {
    setOfferedPeriods: PropTypes.func.isRequired
};

export default RelativePeriods;