import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import PeriodsList from './PeriodsList';
import i18n from '@dhis2/d2-i18n';

var SelectedPeriods = function (_React$Component) {
    _inherits(SelectedPeriods, _React$Component);

    function SelectedPeriods() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SelectedPeriods);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectedPeriods.__proto__ || _Object$getPrototypeOf(SelectedPeriods)).call.apply(_ref, [this].concat(args))), _this), _this.clearPeriods = function () {
            _this.props.onClearAll(_this.props.items);
        }, _this.render = function () {
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
                        i18n.t('Selected periods'),
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
                        i18n.t('Unselect all')
                    )
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return SelectedPeriods;
}(React.Component);

SelectedPeriods.propTypes = {
    items: PropTypes.array.isRequired,
    onClearAll: PropTypes.func.isRequired,
    onPeriodClick: PropTypes.func.isRequired,
    onRemovePeriodClick: PropTypes.func.isRequired
};

export default SelectedPeriods;