import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import PeriodsList from './PeriodsList';

var SelectedPeriods = function (_React$Component) {
    _inherits(SelectedPeriods, _React$Component);

    function SelectedPeriods(props, context) {
        _classCallCheck(this, SelectedPeriods);

        var _this = _possibleConstructorReturn(this, (SelectedPeriods.__proto__ || _Object$getPrototypeOf(SelectedPeriods)).call(this, props));

        _this.clearPeriods = function () {
            _this.props.onClearAll(_this.props.items);
        };

        _this.render = function () {
            return React.createElement(
                'div',
                { className: 'selector-area' },
                React.createElement(
                    'div',
                    { className: 'subtitle-container' },
                    React.createElement(
                        'span',
                        { className: 'subtitle' },
                        ' ',
                        _this.i18n.getTranslation('Selected periods'),
                        ' '
                    )
                ),
                React.createElement(PeriodsList, {
                    items: _this.props.items,
                    onPeriodClick: _this.props.onPeriodClick,
                    onRemovePeriodClick: _this.props.onRemovePeriodClick,
                    listClassName: 'periods-list-selected'
                }),
                React.createElement(
                    'div',
                    { style: { textAlign: 'center' } },
                    React.createElement(
                        Button,
                        { onClick: _this.clearPeriods },
                        _this.i18n.getTranslation('Clear all')
                    )
                )
            );
        };

        _this.i18n = context.d2.i18n;
        return _this;
    }

    return SelectedPeriods;
}(React.Component);

SelectedPeriods.propTypes = {
    items: PropTypes.array.isRequired,
    onClearAll: PropTypes.func.isRequired,
    onPeriodClick: PropTypes.func.isRequired,
    onRemovePeriodClick: PropTypes.func.isRequired
};

SelectedPeriods.contextTypes = {
    d2: PropTypes.object
};

export default SelectedPeriods;