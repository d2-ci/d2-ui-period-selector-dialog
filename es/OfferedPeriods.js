import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import RelativePeriods from './RelativePeriods';
import FixedPeriods from './FixedPeriods';
import PeriodTypes from './PeriodTypes';

var OfferedPeriods = function OfferedPeriods(props) {
    var periodType = props.periodType,
        remaindingProps = _objectWithoutProperties(props, ['periodType']);

    var relativePeriods = React.createElement(RelativePeriods, remaindingProps);
    var fixedPeriods = React.createElement(FixedPeriods, remaindingProps);

    switch (periodType) {
        case PeriodTypes.FIXED:
            return fixedPeriods;
        case PeriodTypes.RELATIVE:
            return relativePeriods;
        default:
            return relativePeriods;
    }
};

export { OfferedPeriods };
OfferedPeriods.propTypes = {
    periodType: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    onDoubleClick: PropTypes.func.isRequired,
    onPeriodClick: PropTypes.func.isRequired,
    setOfferedPeriods: PropTypes.func.isRequired
};

export default OfferedPeriods;