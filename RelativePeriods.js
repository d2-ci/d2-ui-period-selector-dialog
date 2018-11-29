import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import i18n from '@dhis2/d2-i18n';
import Button from '@material-ui/core/Button';
import RelativePeriodsGenerator from './utils/RelativePeriodsGenerator';
import PeriodsList from './PeriodsList';
import styles from './styles/PeriodListItem.style';
import { arrayEquals } from './utils';

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

        _this.render = function () {
            var Options = _this.renderOptions();

            return React.createElement(
                'div',
                { className: 'selector-area' },
                Options,
                React.createElement(PeriodsList, {
                    items: _this.props.items,
                    onPeriodClick: _this.props.onPeriodClick,
                    onPeriodDoubleClick: _this.props.onPeriodDoubleClick,
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

        _this.state = defaultState;
        _this.periodsGenerator = new RelativePeriodsGenerator();
        return _this;
    }

    _createClass(RelativePeriods, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var prevItems = prevProps.selectedItems.map(function (period) {
                return period.id;
            });
            var currentItems = this.props.selectedItems.map(function (period) {
                return period.id;
            });

            if (!arrayEquals(prevItems, currentItems)) {
                this.setOfferedPeriods(this.generatePeriods(this.state.periodType, this.state.year));
            }
        }
    }]);

    return RelativePeriods;
}(Component);

RelativePeriods.propTypes = {
    items: PropTypes.array.isRequired,
    selectedItems: PropTypes.array.isRequired,
    setOfferedPeriods: PropTypes.func.isRequired,
    setOfferedPeriodIds: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    onPeriodDoubleClick: PropTypes.func.isRequired,
    onPeriodClick: PropTypes.func.isRequired
};

export default RelativePeriods;