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

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _PeriodsList = require('./PeriodsList');

var _PeriodsList2 = _interopRequireDefault(_PeriodsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectedPeriods = function (_React$Component) {
    (0, _inherits3.default)(SelectedPeriods, _React$Component);

    function SelectedPeriods() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, SelectedPeriods);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SelectedPeriods.__proto__ || (0, _getPrototypeOf2.default)(SelectedPeriods)).call.apply(_ref, [this].concat(args))), _this), _this.clearPeriods = function () {
            _this.props.onClearAll(_this.props.items);
        }, _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: 'selector-area' },
                _react2.default.createElement(
                    'div',
                    { className: 'subtitle-container' },
                    _react2.default.createElement(
                        'span',
                        { className: 'subtitle' },
                        ' ',
                        _d2I18n2.default.t('Selected periods'),
                        ' '
                    )
                ),
                _react2.default.createElement(_PeriodsList2.default, {
                    items: _this.props.items,
                    onPeriodClick: _this.props.onPeriodClick,
                    onPeriodDoubleClick: _this.props.onPeriodDoubleClick,
                    onRemovePeriodClick: _this.props.onRemovePeriodClick,
                    onReorder: _this.props.onReorder,
                    listClassName: 'periods-list-selected',
                    sortable: true
                }),
                _react2.default.createElement(
                    'div',
                    { style: { textAlign: 'center' } },
                    _react2.default.createElement(
                        _Button2.default,
                        { onClick: _this.clearPeriods },
                        _d2I18n2.default.t('Deselect all')
                    )
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return SelectedPeriods;
}(_react2.default.Component);

SelectedPeriods.propTypes = {
    items: _propTypes2.default.array.isRequired,
    onClearAll: _propTypes2.default.func.isRequired,
    onPeriodDoubleClick: _propTypes2.default.func.isRequired,
    onPeriodClick: _propTypes2.default.func.isRequired,
    onRemovePeriodClick: _propTypes2.default.func.isRequired,
    onReorder: _propTypes2.default.func.isRequired
};

exports.default = SelectedPeriods;