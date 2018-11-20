import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PeriodTypeButton from './PeriodTypeButton';
import SelectedPeriods from './SelectedPeriods';
import { OfferedPeriods } from './OfferedPeriods';
import PeriodTypes from './PeriodTypes';
import './PeriodSelector.css';

import { setPeriodType, addOfferedPeriods, setOfferedPeriods, setSelectedPeriods, removeOfferedPeriods, toggleOfferedPeriod, addSelectedPeriods, removeSelectedPeriods, toggleSelectedPeriod } from './actions';

var SelectButton = function SelectButton(_ref) {
    var action = _ref.action;
    return React.createElement(
        Button,
        {
            className: 'select-button',
            onClick: action
        },
        React.createElement(ArrowForwardIcon, null)
    );
};

var DeselectButton = function DeselectButton(_ref2) {
    var action = _ref2.action;
    return React.createElement(
        Button,
        {
            className: 'select-button',
            onClick: action
        },
        React.createElement(ArrowBackIcon, null)
    );
};

var Periods = function (_Component) {
    _inherits(Periods, _Component);

    function Periods(props) {
        _classCallCheck(this, Periods);

        var _this = _possibleConstructorReturn(this, (Periods.__proto__ || _Object$getPrototypeOf(Periods)).call(this, props));

        _this.onPeriodTypeClick = function (periodType) {
            if (_this.props.periodType !== periodType) {
                _this.props.setPeriodType(periodType);
                _this.props.setOfferedPeriods([]);
            }
        };

        _this.onSelectPeriods = function () {
            var itemsToAdd = _this.props.offeredPeriods.periods.filter(function (period) {
                return period.selected === true;
            });

            _this.props.onSelect(itemsToAdd);
            _this.props.addSelectedPeriods(itemsToAdd);
            _this.props.removeOfferedPeriods(itemsToAdd);
        };

        _this.onDeselectPeriods = function () {
            var removedPeriods = _this.props.selectedPeriods.periods.filter(function (period) {
                return period.selected === true;
            });

            _this.props.onDeselect(removedPeriods);
            _this.props.removeSelectedPeriods(removedPeriods);
            _this.props.addOfferedPeriods(removedPeriods);
        };

        _this.onDoubleClick = function (selectedPeriod) {
            var itemToAdd = [selectedPeriod];

            _this.props.onSelect(itemToAdd);
            _this.props.addSelectedPeriods(itemToAdd);
            _this.props.removeOfferedPeriods(itemToAdd);
        };

        _this.onRemovePeriod = function (removedPeriod) {
            var itemToRemove = [removedPeriod];

            _this.props.onDeselect(itemToRemove);
            _this.props.removeSelectedPeriods(itemToRemove);
            _this.props.addOfferedPeriods(itemToRemove);
        };

        _this.onClearAll = function (removedPeriods) {
            _this.props.onDeselect(removedPeriods);
            _this.props.addOfferedPeriods(removedPeriods);
            _this.props.setSelectedPeriods([]);
        };

        _this.renderPeriodTypeButtons = function () {
            return React.createElement(
                Fragment,
                null,
                React.createElement(PeriodTypeButton, {
                    periodType: PeriodTypes.RELATIVE,
                    activePeriodType: _this.props.periodType,
                    text: 'Relative periods',
                    onClick: _this.onPeriodTypeClick
                }),
                React.createElement(PeriodTypeButton, {
                    periodType: PeriodTypes.FIXED,
                    activePeriodType: _this.props.periodType,
                    text: 'Fixed periods',
                    onClick: _this.onPeriodTypeClick
                })
            );
        };

        _this.renderSelectButtons = function () {
            return React.createElement(
                Fragment,
                null,
                React.createElement(SelectButton, { action: _this.onSelectPeriods }),
                React.createElement(DeselectButton, { action: _this.onDeselectPeriods })
            );
        };

        _this.render = function () {
            var PeriodTypeButtons = _this.renderPeriodTypeButtons();
            var SelectButtons = _this.renderSelectButtons();

            return React.createElement(
                'div',
                null,
                PeriodTypeButtons,
                React.createElement(
                    'div',
                    { className: 'periods-container' },
                    React.createElement(
                        'div',
                        { className: 'block options' },
                        React.createElement(OfferedPeriods, {
                            periodType: _this.props.periodType,
                            items: _this.props.offeredPeriods.periods,
                            onDoubleClick: _this.onDoubleClick,
                            onPeriodClick: _this.props.toggleOfferedPeriod,
                            setOfferedPeriods: _this.props.setOfferedPeriods
                        })
                    ),
                    React.createElement(
                        'div',
                        { className: 'block buttons' },
                        SelectButtons
                    ),
                    React.createElement(
                        'div',
                        { className: 'block selected-periods' },
                        React.createElement(SelectedPeriods, {
                            items: _this.props.selectedPeriods.periods,
                            onClearAll: _this.onClearAll,
                            onPeriodClick: _this.props.toggleSelectedPeriod,
                            onRemovePeriodClick: _this.onRemovePeriod
                        })
                    )
                )
            );
        };

        _this.props.setSelectedPeriods(_this.props.selectedItems);
        return _this;
    }

    return Periods;
}(Component);

Periods.propTypes = {
    onSelect: PropTypes.func.isRequired,
    onDeselect: PropTypes.func.isRequired,
    selectedItems: PropTypes.array.isRequired,
    periodType: PropTypes.string.isRequired,
    offeredPeriods: PropTypes.object.isRequired,
    selectedPeriods: PropTypes.object.isRequired,
    setPeriodType: PropTypes.func.isRequired,
    setOfferedPeriods: PropTypes.func.isRequired,
    setSelectedPeriods: PropTypes.func.isRequired,
    addSelectedPeriods: PropTypes.func.isRequired,
    addOfferedPeriods: PropTypes.func.isRequired,
    removeOfferedPeriods: PropTypes.func.isRequired,
    removeSelectedPeriods: PropTypes.func.isRequired,
    toggleOfferedPeriod: PropTypes.func.isRequired,
    toggleSelectedPeriod: PropTypes.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        periodType: state.periodType,
        offeredPeriods: state.offeredPeriods,
        selectedPeriods: state.selectedPeriods
    };
};

var mapDispatchToProps = {
    setPeriodType: setPeriodType,
    addOfferedPeriods: addOfferedPeriods,
    setOfferedPeriods: setOfferedPeriods,
    setSelectedPeriods: setSelectedPeriods,
    removeOfferedPeriods: removeOfferedPeriods,
    toggleOfferedPeriod: toggleOfferedPeriod,
    addSelectedPeriods: addSelectedPeriods,
    removeSelectedPeriods: removeSelectedPeriods,
    toggleSelectedPeriod: toggleSelectedPeriod
};

export default connect(mapStateToProps, mapDispatchToProps)(Periods);