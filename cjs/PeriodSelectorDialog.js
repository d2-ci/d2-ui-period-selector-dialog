'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _Dialog = require('@material-ui/core/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogTitle = require('@material-ui/core/DialogTitle');

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _DialogContent = require('@material-ui/core/DialogContent');

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogActions = require('@material-ui/core/DialogActions');

var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _PeriodSelector = require('./PeriodSelector');

var _PeriodSelector2 = _interopRequireDefault(_PeriodSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    dialogContent: {
        paddingBottom: 0,
        paddingTop: 0,
        overflow: 'hidden'
    },
    dialogActions: {
        padding: '24px',
        marginTop: 0,
        borderTop: '1px solid #E0E0E0'

    }
};

var PeriodSelectorDialog = function (_React$Component) {
    (0, _inherits3.default)(PeriodSelectorDialog, _React$Component);

    function PeriodSelectorDialog(props) {
        (0, _classCallCheck3.default)(this, PeriodSelectorDialog);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PeriodSelectorDialog.__proto__ || (0, _getPrototypeOf2.default)(PeriodSelectorDialog)).call(this, props));

        _this.onCloseClick = function () {
            _this.props.onClose();
        };

        _this.onUpdateClick = function () {
            _this.props.onUpdate(_this.props.selectedItems);
        };

        _this.onSelect = function (selectedPeriods) {
            _this.props.onSelect(selectedPeriods);
        };

        _this.onDeselect = function (removedPeriods) {
            var selectedPeriods = _this.props.selectedItems.filter(function (period) {
                return !removedPeriods.includes(period) && period;
            });

            _this.props.onDeselect(selectedPeriods);
        };

        _this.render = function () {
            var _this$props = _this.props,
                open = _this$props.open,
                maxWidth = _this$props.maxWidth,
                fullWidth = _this$props.fullWidth,
                remaindingProps = (0, _objectWithoutProperties3.default)(_this$props, ['open', 'maxWidth', 'fullWidth']);


            return _react2.default.createElement(
                _Dialog2.default,
                {
                    open: open,
                    onClose: _this.onCloseClick,
                    fullWidth: fullWidth,
                    maxWidth: maxWidth
                },
                _react2.default.createElement(
                    _DialogTitle2.default,
                    null,
                    _this.i18n.getTranslation('Period')
                ),
                _react2.default.createElement(
                    _DialogContent2.default,
                    { style: styles.dialogContent },
                    _react2.default.createElement(_PeriodSelector2.default, remaindingProps)
                ),
                _react2.default.createElement(
                    _DialogActions2.default,
                    { style: styles.dialogActions },
                    _react2.default.createElement(
                        _Button2.default,
                        { onClick: _this.onCloseClick },
                        _this.i18n.getTranslation('Hide')
                    ),
                    _react2.default.createElement(
                        _Button2.default,
                        { style: { backgroundColor: '#004BA0', color: 'white' }, onClick: _this.onUpdateClick },
                        _this.i18n.getTranslation('Update')
                    )
                )
            );
        };

        _this.i18n = _this.props.d2.i18n;
        return _this;
    }

    return PeriodSelectorDialog;
}(_react2.default.Component);

PeriodSelectorDialog.defaultProps = {
    maxWidth: 'md',
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
    d2: _propTypes2.default.object.isRequired,
    open: _propTypes2.default.bool.isRequired,
    fullWidth: _propTypes2.default.bool,
    maxWidth: _propTypes2.default.string,
    onClose: _propTypes2.default.func.isRequired,
    onUpdate: _propTypes2.default.func.isRequired,
    onSelect: _propTypes2.default.func,
    onDeselect: _propTypes2.default.func,
    selectedItems: _propTypes2.default.array
};

exports.default = PeriodSelectorDialog;