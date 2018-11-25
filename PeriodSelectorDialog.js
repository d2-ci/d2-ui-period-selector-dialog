import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import i18n from '@dhis2/d2-i18n';
import PeriodSelector from './PeriodSelector';

var PeriodSelectorDialog = function (_React$Component) {
    _inherits(PeriodSelectorDialog, _React$Component);

    function PeriodSelectorDialog() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PeriodSelectorDialog);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PeriodSelectorDialog.__proto__ || _Object$getPrototypeOf(PeriodSelectorDialog)).call.apply(_ref, [this].concat(args))), _this), _this.onCloseClick = function () {
            _this.props.onClose();
        }, _this.onUpdateClick = function () {
            _this.props.onUpdate(_this.props.selectedItems);
        }, _this.onSelect = function (selectedPeriods) {
            _this.props.onSelect(selectedPeriods);
        }, _this.onDeselect = function (removedPeriods) {
            var selectedPeriods = _this.props.selectedItems.filter(function (period) {
                return !removedPeriods.includes(period) && period;
            });

            _this.props.onDeselect(selectedPeriods);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PeriodSelectorDialog, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                open = _props.open,
                maxWidth = _props.maxWidth,
                fullWidth = _props.fullWidth,
                remaindingProps = _objectWithoutProperties(_props, ['classes', 'open', 'maxWidth', 'fullWidth']);

            return React.createElement(
                Dialog,
                {
                    open: open,
                    onClose: this.onCloseClick,
                    fullWidth: fullWidth,
                    maxWidth: maxWidth
                },
                React.createElement(
                    DialogTitle,
                    null,
                    i18n.t('Period')
                ),
                React.createElement(
                    DialogContent,
                    null,
                    React.createElement(PeriodSelector, remaindingProps)
                ),
                React.createElement(
                    DialogActions,
                    null,
                    React.createElement(
                        Button,
                        { color: 'primary', onClick: this.onCloseClick },
                        i18n.t('Hide')
                    ),
                    React.createElement(
                        Button,
                        { variant: 'contained', color: 'primary', onClick: this.onUpdateClick },
                        i18n.t('Update')
                    )
                )
            );
        }
    }]);

    return PeriodSelectorDialog;
}(React.Component);

PeriodSelectorDialog.defaultProps = {
    maxWidth: 'lg',
    fullWidth: true,
    onSelect: function onSelect() {
        return null;
    },
    onDeselect: function onDeselect() {
        return null;
    },
    selectedItems: []
};

PeriodSelectorDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    fullWidth: PropTypes.bool,
    maxWidth: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    selectedItems: PropTypes.array
};

export default PeriodSelectorDialog;