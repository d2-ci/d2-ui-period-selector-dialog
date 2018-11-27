import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import styles from './styles/PeriodListItem.style';

var OFFERED_LIST = 'periods-list-offered';

var UnselectedIcon = function UnselectedIcon() {
    return React.createElement('div', { className: 'unselected-icon' });
};
var HighlightedIcon = function HighlightedIcon() {
    return React.createElement('div', { className: 'highlighted-icon' });
};
var SelectedIcon = function SelectedIcon() {
    return React.createElement('div', { className: 'selected-icon' });
};

var RemoveItemButton = function RemoveItemButton(_ref) {
    var action = _ref.action,
        isHighlighted = _ref.isHighlighted;
    return React.createElement(
        IconButton,
        {
            style: styles.removeItemButton,
            onClick: action
        },
        React.createElement(Close, { style: isHighlighted ? styles.highlightedClose : styles.closeIcon })
    );
};

RemoveItemButton.propTypes = {
    action: PropTypes.func.isRequired,
    isHighlighted: PropTypes.bool.isRequired
};

var PeriodListItem = function (_Component) {
    _inherits(PeriodListItem, _Component);

    function PeriodListItem() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, PeriodListItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = PeriodListItem.__proto__ || _Object$getPrototypeOf(PeriodListItem)).call.apply(_ref2, [this].concat(args))), _this), _this.state = { isHovering: false }, _this.onPeriodClick = function (event) {
            _this.props.onPeriodClick(_this.props.period, _this.props.index, event.shiftKey, event.metaKey);
        }, _this.onPeriodDoubleClick = function () {
            _this.props.onPeriodDoubleClick(_this.props.period);
        }, _this.onRemovePeriodClick = function (event) {
            event.stopPropagation();
            _this.props.onRemovePeriodClick(_this.props.period);
        }, _this.isOfferedList = function () {
            return _this.props.listClassName === OFFERED_LIST;
        }, _this.highlightItem = function () {
            _this.setState({ isHovering: true });
        }, _this.removeHighlight = function () {
            _this.setState({ isHovering: false });
        }, _this.renderIcon = function () {
            if (_this.props.period.selected) {
                return React.createElement(HighlightedIcon, null);
            }

            return _this.isOfferedList() ? React.createElement(UnselectedIcon, null) : React.createElement(SelectedIcon, null);
        }, _this.renderRemoveButton = function () {
            return _this.isOfferedList() ? null : React.createElement(RemoveItemButton, { isHighlighted: _this.props.period.selected, action: _this.onRemovePeriodClick });
        }, _this.render = function () {
            var className = _this.isOfferedList() ? 'period-offered-label' : 'period-selected-label';
            var Icon = _this.renderIcon();
            var RemoveButton = _this.renderRemoveButton();

            if (typeof _this.props.index == 'undefined') {
                console.log('PLI index', _this.props.index, _this.props.period.name, _this.props.listClassName);
            }

            return React.createElement(
                'div',
                {
                    role: 'button',
                    tabIndex: 0,
                    style: _this.props.period.selected ? styles.highlightedContainer : {},
                    onMouseEnter: _this.highlightItem,
                    onMouseLeave: _this.removeHighlight,
                    onClick: _this.onPeriodClick,
                    onDoubleClick: _this.onPeriodDoubleClick,
                    className: className
                },
                Icon,
                React.createElement(
                    'span',
                    {
                        style: _this.props.period.selected ? styles.higlightedText : {},
                        className: 'list-text'
                    },
                    _this.props.period.name
                ),
                RemoveButton
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return PeriodListItem;
}(Component);

PeriodListItem.propTypes = {
    period: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onPeriodClick: PropTypes.func.isRequired,
    onPeriodDoubleClick: PropTypes.func.isRequired,
    onRemovePeriodClick: PropTypes.func.isRequired,
    listClassName: PropTypes.string.isRequired
};

export default PeriodListItem;