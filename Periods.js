import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import i18n from '@dhis2/d2-i18n';
import { PeriodTypeButton } from './PeriodTypeButton';
import { SelectedPeriods } from './SelectedPeriods';
import { OfferedPeriods } from './OfferedPeriods';
import PeriodTypes from './PeriodTypes';
import styles from './styles/PeriodListItem.style';
// eslint-disable-next-line import/no-unresolved
import './PeriodSelector.css';

import { setPeriodType, addOfferedPeriods, setOfferedPeriods, setSelectedPeriods, removeOfferedPeriods, toggleOfferedPeriod, addSelectedPeriods, removeSelectedPeriods, toggleSelectedPeriod } from './actions';

var SelectButton = function SelectButton(_ref) {
    var onClick = _ref.onClick;
    return React.createElement(
        IconButton,
        {
            variant: 'contained',
            onClick: onClick,
            disableRipple: true
        },
        React.createElement(ArrowForwardIcon, { style: styles.arrowIcon })
    );
};

SelectButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

var DeselectButton = function DeselectButton(_ref2) {
    var onClick = _ref2.onClick;
    return React.createElement(
        IconButton,
        {
            variant: 'contained',
            onClick: onClick,
            disableRipple: true
        },
        React.createElement(ArrowBackIcon, { style: styles.arrowIcon })
    );
};

DeselectButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

var Periods = function (_Component) {
    _inherits(Periods, _Component);

    function Periods(props) {
        _classCallCheck(this, Periods);

        var _this = _possibleConstructorReturn(this, (Periods.__proto__ || _Object$getPrototypeOf(Periods)).call(this, props));

        _this.onPeriodTypeClick = function (periodType) {
            if (_this.props.periodType !== periodType) {
                _this.props.setPeriodType(periodType);
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

        _this.onOfferedPeriodDoubleClick = function (period) {
            var itemToAdd = [period];

            _this.props.onSelect(itemToAdd);
            _this.props.addSelectedPeriods(itemToAdd);
            _this.props.removeOfferedPeriods(itemToAdd);
        };

        _this.onSelectedPeriodDoubleClick = function (period) {
            var itemToAdd = [period];

            _this.props.onDeselect(itemToAdd);
            _this.props.removeSelectedPeriods(itemToAdd);
            _this.props.addOfferedPeriods(itemToAdd);
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
                    text: i18n.t('Relative periods'),
                    onClick: _this.onPeriodTypeClick
                }),
                React.createElement(PeriodTypeButton, {
                    periodType: PeriodTypes.FIXED,
                    activePeriodType: _this.props.periodType,
                    text: i18n.t('Fixed periods'),
                    onClick: _this.onPeriodTypeClick
                })
            );
        };

        _this.renderSelectButtons = function () {
            return React.createElement(
                'div',
                { className: 'block-buttons' },
                React.createElement(SelectButton, { onClick: _this.onSelectPeriods }),
                React.createElement(DeselectButton, { onClick: _this.onDeselectPeriods })
            );
        };

        _this.props.setSelectedPeriods(_this.props.selectedItems);
        return _this;
    }

    _createClass(Periods, [{
        key: 'render',
        value: function render() {
            var PeriodTypeButtons = this.renderPeriodTypeButtons();
            var SelectButtons = this.renderSelectButtons();

            return React.createElement(
                Fragment,
                null,
                PeriodTypeButtons,
                React.createElement(
                    'div',
                    { className: 'periods-container' },
                    React.createElement(OfferedPeriods, {
                        periodType: this.props.periodType,
                        items: this.props.offeredPeriods.periods,
                        onPeriodDoubleClick: this.onOfferedPeriodDoubleClick,
                        onPeriodClick: this.props.toggleOfferedPeriod,
                        setOfferedPeriods: this.props.setOfferedPeriods,
                        addSelectedPeriods: this.props.addSelectedPeriods,
                        selectedItems: this.props.selectedItems
                    }),
                    SelectButtons,
                    React.createElement(SelectedPeriods, {
                        items: this.props.selectedPeriods.periods,
                        onClearAll: this.onClearAll,
                        onPeriodDoubleClick: this.onSelectedPeriodDoubleClick,
                        onPeriodClick: this.props.toggleSelectedPeriod,
                        onRemovePeriodClick: this.onRemovePeriod
                    })
                )
            );
        }
    }]);

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