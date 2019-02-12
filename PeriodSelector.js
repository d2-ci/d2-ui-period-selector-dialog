import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { ItemSelector } from 'analytics-shared-components';

import PeriodTypeButton from './PeriodTypeButton';
import FixedPeriodFIlter from './FixedPeriodFilter';
import RelativePeriodFilter from './RelativePeriodFilter';
import { FIXED, RELATIVE } from './modules/periodTypes';

// eslint-disable-next-line import/no-unresolved
import './PeriodSelector.css';

var PeriodSelector = function (_Component) {
    _inherits(PeriodSelector, _Component);

    function PeriodSelector(props) {
        _classCallCheck(this, PeriodSelector);

        var _this = _possibleConstructorReturn(this, (PeriodSelector.__proto__ || _Object$getPrototypeOf(PeriodSelector)).call(this, props));

        _this.state = {
            offeredPeriods: [],
            offeredPeriodsInOrder: [],
            selectedPeriods: [],
            periodType: RELATIVE
        };

        _this.onPeriodTypeClick = function (periodType) {
            if (_this.state.periodType !== periodType) {
                _this.setState({ periodType: periodType });
            }
        };

        _this.onSelectPeriods = function (periodIds) {
            var offeredPeriods = _this.state.offeredPeriods.filter(function (period) {
                return !periodIds.includes(period.id);
            });
            var newPeriods = _this.state.offeredPeriods.filter(function (period) {
                return periodIds.includes(period.id);
            });
            var selectedPeriods = _this.state.selectedPeriods.concat(newPeriods);

            _this.setState({ selectedPeriods: selectedPeriods, offeredPeriods: offeredPeriods });
            _this.props.onSelect(selectedPeriods);
        };

        _this.setSelectedPeriodOrder = function (periodIds) {
            var selectedPeriods = periodIds.map(function (id) {
                return _this.state.selectedPeriods.find(function (period) {
                    return period.id === id;
                });
            });

            _this.setState({ selectedPeriods: selectedPeriods });
            _this.props.onReorder(selectedPeriods);
        };

        _this.onDeselectPeriods = function (periodIds) {
            var selectedPeriods = _this.state.selectedPeriods.filter(function (period) {
                return !periodIds.includes(period.id);
            });
            var removedPeriods = _this.state.selectedPeriods.filter(function (period) {
                return periodIds.includes(period.id);
            });
            var offeredPeriods = _this.state.offeredPeriodsInOrder.filter(function (period) {
                return !selectedPeriods.map(function (p) {
                    return p.id;
                }).includes(period.id);
            });

            _this.setState({ selectedPeriods: selectedPeriods, offeredPeriods: offeredPeriods });
            _this.props.onDeselect(removedPeriods);
        };

        _this.initializeOfferedPeriods = function (periods) {
            var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var selectedPeriods = initial ? _this.props.selectedItems : _this.state.selectedPeriods;
            var offeredPeriods = periods.filter(function (period) {
                return !selectedPeriods.map(function (p) {
                    return p.id;
                }).includes(period.id);
            });

            _this.setState({ offeredPeriodsInOrder: periods, offeredPeriods: offeredPeriods });
        };

        _this.renderPeriodTypeButtons = function () {
            return React.createElement(
                'div',
                null,
                React.createElement(PeriodTypeButton, {
                    periodType: RELATIVE,
                    activePeriodType: _this.state.periodType,
                    text: 'Relative periods',
                    onClick: _this.onPeriodTypeClick
                }),
                React.createElement(PeriodTypeButton, {
                    periodType: FIXED,
                    activePeriodType: _this.state.periodType,
                    text: 'Fixed periods',
                    onClick: _this.onPeriodTypeClick
                })
            );
        };

        _this.render = function () {
            var filterZone = function filterZone() {
                if (_this.state.periodType === FIXED) {
                    return React.createElement(FixedPeriodFIlter, { setOfferedPeriods: _this.initializeOfferedPeriods });
                }

                return React.createElement(RelativePeriodFilter, { setOfferedPeriods: _this.initializeOfferedPeriods });
            };

            var unselected = {
                items: _this.state.offeredPeriods,
                onSelect: _this.onSelectPeriods,
                filterText: ''
            };

            var selected = {
                items: _this.state.selectedPeriods,
                onDeselect: _this.onDeselectPeriods,
                onReorder: _this.setSelectedPeriodOrder
            };

            return React.createElement(
                Fragment,
                null,
                _this.renderPeriodTypeButtons(),
                React.createElement(
                    'div',
                    { style: { display: 'flex', marginTop: '18px' } },
                    React.createElement(
                        ItemSelector,
                        {
                            itemClassName: 'period-selector',
                            unselected: unselected,
                            selected: selected
                        },
                        filterZone()
                    )
                )
            );
        };

        _this.state.selectedPeriods = _this.props.selectedItems;
        return _this;
    }

    return PeriodSelector;
}(Component);

PeriodSelector.propTypes = {
    onSelect: PropTypes.func.isRequired,
    onDeselect: PropTypes.func.isRequired,
    onReorder: PropTypes.func.isRequired,
    selectedItems: PropTypes.arrayOf(PropTypes.object)
};

PeriodSelector.defaultProps = {
    selectedItems: []
};

export default PeriodSelector;