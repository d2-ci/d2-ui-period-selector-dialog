import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export var PeriodTypeButton = function PeriodTypeButton(_ref) {
    var periodType = _ref.periodType,
        activePeriodType = _ref.activePeriodType,
        text = _ref.text,
        _onClick = _ref.onClick;
    return React.createElement(
        Button,
        {
            className: 'nav-button ' + (periodType === activePeriodType ? 'active' : '')
            // eslint-disable-next-line react/jsx-no-bind
            , onClick: function onClick() {
                return _onClick(periodType);
            }
        },
        text
    );
};

PeriodTypeButton.propTypes = {
    periodType: PropTypes.string.isRequired,
    activePeriodType: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default PeriodTypeButton;