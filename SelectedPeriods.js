import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import i18n from '@dhis2/d2-i18n';
import PeriodsList from './PeriodsList';

var Subtitle = function Subtitle() {
    return React.createElement(
        'div',
        { className: 'subtitle-container' },
        React.createElement(
            'span',
            { className: 'subtitle' },
            ' ',
            i18n.t('Selected periods'),
            ' '
        )
    );
};

var SelectedPeriods = function SelectedPeriods(_ref) {
    var onClearAll = _ref.onClearAll,
        remaindingProps = _objectWithoutProperties(_ref, ['onClearAll']);

    return React.createElement(
        'div',
        { className: 'block-selected-periods' },
        React.createElement(Subtitle, null),
        React.createElement(PeriodsList, _extends({
            className: 'periods-list-selected'
        }, remaindingProps)),
        React.createElement(
            'div',
            { className: 'move-all-items-button' },
            React.createElement(
                Button
                // eslint-disable-next-line react/jsx-no-bind
                ,
                { onClick: function onClick() {
                        return onClearAll(remaindingProps.items);
                    }
                },
                i18n.t('Deselect all')
            )
        )
    );
};

export { SelectedPeriods };
SelectedPeriods.propTypes = {
    items: PropTypes.array.isRequired,
    onClearAll: PropTypes.func.isRequired,
    onPeriodDoubleClick: PropTypes.func.isRequired,
    onPeriodClick: PropTypes.func.isRequired,
    onRemovePeriodClick: PropTypes.func.isRequired
};

export default SelectedPeriods;