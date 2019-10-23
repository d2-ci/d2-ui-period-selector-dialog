'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Close = require('@material-ui/icons/Close');

var _Close2 = _interopRequireDefault(_Close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OFFERED_LIST = 'periods-list-offered';

var UnselectedIcon = function UnselectedIcon() {
    return _react2.default.createElement('div', { className: 'unselected-icon' });
};
var SelectedIcon = function SelectedIcon() {
    return _react2.default.createElement('div', { className: 'selected-icon' });
};

var RemoveItemButton = function RemoveItemButton(_ref) {
    var action = _ref.action;
    return _react2.default.createElement(
        'button',
        { className: 'remove-item-button', onClick: action, tabIndex: 0 },
        _react2.default.createElement(_Close2.default, { style: {
                fill: '#1976D2',
                outline: 'none',
                height: 13,
                width: 10 }
        })
    );
};

var PeriodListItem = function (_Component) {
    (0, _inherits3.default)(PeriodListItem, _Component);

    function PeriodListItem() {
        var _ref2;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, PeriodListItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = PeriodListItem.__proto__ || (0, _getPrototypeOf2.default)(PeriodListItem)).call.apply(_ref2, [this].concat(args))), _this), _this.state = { isHovering: false }, _this.highlightItem = function () {
            _this.setState({ isHovering: true });
        }, _this.removeHighlight = function () {
            _this.setState({ isHovering: false });
        }, _this.isOfferedList = function () {
            return _this.props.listClassName === OFFERED_LIST;
        }, _this.onPeriodClick = function (event) {
            _this.props.onPeriodClick(_this.props.period, _this.props.index, event.shiftKey, event.metaKey);
        }, _this.onDoubleClick = function () {
            _this.props.onDoubleClick(_this.props.period);
        }, _this.onRemovePeriodClick = function (event) {
            event.stopPropagation();
            _this.props.onRemovePeriodClick(_this.props.period);
        }, _this.renderIcon = function () {
            return _this.isOfferedList() ? _react2.default.createElement(UnselectedIcon, null) : _react2.default.createElement(SelectedIcon, null);
        }, _this.renderRemoveButton = function () {
            return _this.isOfferedList() ? null : _react2.default.createElement(RemoveItemButton, { action: _this.onRemovePeriodClick });
        }, _this.renderLabelStyle = function () {
            if (_this.state.isHovering && !_this.props.period.selected) {
                return { backgroundColor: '#92C9F7' };
            } else if (_this.props.period.selected) {
                return { backgroundColor: '#7EBFF5' };
            }
            return {};
        }, _this.render = function () {
            var className = _this.isOfferedList() ? 'period-offered-label' : 'period-selected-label';
            var labelStyle = _this.renderLabelStyle();
            var Icon = _this.renderIcon();
            var RemoveButton = _this.renderRemoveButton();

            return _react2.default.createElement(
                'li',
                {
                    key: _this.props.period.id,
                    className: 'period-dimension-item'
                },
                _react2.default.createElement(
                    'div',
                    {
                        role: 'button',
                        tabIndex: 0,
                        style: labelStyle,
                        onMouseEnter: _this.highlightItem,
                        onMouseLeave: _this.removeHighlight,
                        onClick: _this.onPeriodClick,
                        onDoubleClick: _this.onDoubleClick,
                        className: className
                    },
                    Icon,
                    _react2.default.createElement(
                        'span',
                        { className: 'list-text' },
                        _this.props.period.name
                    ),
                    RemoveButton
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return PeriodListItem;
}(_react.Component);

PeriodListItem.propTypes = {
    period: _propTypes2.default.object.isRequired,
    index: _propTypes2.default.number.isRequired,
    onPeriodClick: _propTypes2.default.func.isRequired,
    onDoubleClick: _propTypes2.default.func.isRequired,
    onRemovePeriodClick: _propTypes2.default.func.isRequired,
    listClassName: _propTypes2.default.string.isRequired
};

exports.default = PeriodListItem;