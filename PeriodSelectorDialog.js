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

var _styles = require('@material-ui/core/styles');

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

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _PeriodSelector = require('./PeriodSelector');

var _PeriodSelector2 = _interopRequireDefault(_PeriodSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    dialogContent: {
        overflow: 'hidden' // TODO: Reflow DOM or enforce minimum dialog sizing rather than hiding important UI elements on small screens
    }
};

var PeriodSelectorDialog = function (_React$Component) {
    (0, _inherits3.default)(PeriodSelectorDialog, _React$Component);

    function PeriodSelectorDialog() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, PeriodSelectorDialog);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PeriodSelectorDialog.__proto__ || (0, _getPrototypeOf2.default)(PeriodSelectorDialog)).call.apply(_ref, [this].concat(args))), _this), _this.onCloseClick = function () {
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
        }, _this.render = function () {
            var _this$props = _this.props,
                classes = _this$props.classes,
                open = _this$props.open,
                maxWidth = _this$props.maxWidth,
                fullWidth = _this$props.fullWidth,
                remaindingProps = (0, _objectWithoutProperties3.default)(_this$props, ['classes', 'open', 'maxWidth', 'fullWidth']);


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
                    _d2I18n2.default.t('Period')
                ),
                _react2.default.createElement(
                    _DialogContent2.default,
                    { className: classes.dialogContent },
                    _react2.default.createElement(_PeriodSelector2.default, remaindingProps)
                ),
                _react2.default.createElement(
                    _DialogActions2.default,
                    null,
                    _react2.default.createElement(
                        _Button2.default,
                        { color: 'primary', onClick: _this.onCloseClick },
                        _d2I18n2.default.t('Hide')
                    ),
                    _react2.default.createElement(
                        _Button2.default,
                        { variant: 'contained', color: 'primary', onClick: _this.onUpdateClick },
                        _d2I18n2.default.t('Update')
                    )
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
    classes: _propTypes2.default.object.isRequired,
    open: _propTypes2.default.bool.isRequired,
    fullWidth: _propTypes2.default.bool,
    maxWidth: _propTypes2.default.string,
    onClose: _propTypes2.default.func.isRequired,
    onUpdate: _propTypes2.default.func.isRequired,
    onSelect: _propTypes2.default.func,
    onDeselect: _propTypes2.default.func,
    selectedItems: _propTypes2.default.array
};

exports.default = (0, _styles.withStyles)(styles)(PeriodSelectorDialog);