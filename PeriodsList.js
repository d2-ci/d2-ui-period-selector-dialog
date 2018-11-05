import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import PeriodListItem from './PeriodListItem';

var PeriodsList = function PeriodsList(props) {
    var items = props.items,
        remaindingProps = _objectWithoutProperties(props, ['items']);

    var ListItems = props.items.map(function (period, index) {
        return React.createElement(PeriodListItem, _extends({
            period: period,
            index: index,
            key: period.id
        }, remaindingProps));
    });

    return React.createElement(
        'ul',
        { className: remaindingProps.listClassName },
        ' ',
        ListItems,
        ' '
    );
};

PeriodsList.propTypes = {
    items: PropTypes.array.isRequired,
    onPeriodClick: PropTypes.func.isRequired,
    onDoubleClick: PropTypes.func,
    onRemovePeriodClick: PropTypes.func,
    listClassName: PropTypes.string.isRequired
};

PeriodsList.defaultProps = {
    onDoubleClick: function onDoubleClick() {
        return null;
    },
    onRemovePeriodClick: function onRemovePeriodClick() {
        return null;
    }
};

export default PeriodsList;