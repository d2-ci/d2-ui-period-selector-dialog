import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Periods from './Periods';
import Store from './reducers';

var PeriodSelector = function PeriodSelector(props) {
    return React.createElement(
        Provider,
        { store: Store },
        React.createElement(Periods, props)
    );
};

PeriodSelector.propTypes = {
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    selectedItems: PropTypes.arrayOf(PropTypes.object)
};

PeriodSelector.defaultProps = {
    onSelect: function onSelect() {
        return null;
    },
    onDeselect: function onDeselect() {
        return null;
    },
    selectedItems: []
};

export default PeriodSelector;