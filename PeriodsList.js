'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSortableHoc = require('react-sortable-hoc');

var _PeriodListItem = require('./PeriodListItem');

var _PeriodListItem2 = _interopRequireDefault(_PeriodListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortableItem = (0, _reactSortableHoc.SortableElement)(function (_ref) {
    var period = _ref.period,
        idx = _ref.idx,
        listClassName = _ref.listClassName,
        handlerProps = (0, _objectWithoutProperties3.default)(_ref, ['period', 'idx', 'listClassName']);
    return _react2.default.createElement(_PeriodListItem2.default, (0, _extends3.default)({
        key: period.id,
        period: period,
        index: idx,
        listClassName: listClassName
    }, handlerProps));
});

var SortableList = (0, _reactSortableHoc.SortableContainer)(function (_ref2) {
    var items = _ref2.items,
        listClassName = _ref2.listClassName,
        handlerProps = (0, _objectWithoutProperties3.default)(_ref2, ['items', 'listClassName']);
    return _react2.default.createElement(
        'ul',
        { className: listClassName },
        items.map(function (period, index) {
            return _react2.default.createElement(SortableItem, (0, _extends3.default)({
                key: period.id,
                period: period,
                index: index,
                idx: index,
                listClassName: listClassName
            }, handlerProps));
        })
    );
});

var PeriodsList = function (_Component) {
    (0, _inherits3.default)(PeriodsList, _Component);

    function PeriodsList() {
        var _ref3;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, PeriodsList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref3 = PeriodsList.__proto__ || (0, _getPrototypeOf2.default)(PeriodsList)).call.apply(_ref3, [this].concat(args))), _this), _this.onSortEnd = function (_ref4) {
            var oldIndex = _ref4.oldIndex,
                newIndex = _ref4.newIndex;

            _this.props.onReorder((0, _reactSortableHoc.arrayMove)(_this.props.items, oldIndex, newIndex));
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(PeriodsList, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                items = _props.items,
                sortable = _props.sortable,
                listClassName = _props.listClassName,
                handlerProps = (0, _objectWithoutProperties3.default)(_props, ['items', 'sortable', 'listClassName']);


            if (sortable) {
                return _react2.default.createElement(SortableList, (0, _extends3.default)({
                    helperClass: 'sortableHelper',
                    distance: 3,
                    transitionDuration: 200,
                    onSortEnd: this.onSortEnd,
                    items: items,
                    listClassName: listClassName
                }, handlerProps));
            }

            var ListItems = items.map(function (period, index) {
                return _react2.default.createElement(_PeriodListItem2.default, (0, _extends3.default)({
                    key: period.id,
                    period: period,
                    index: index,
                    listClassName: listClassName
                }, handlerProps));
            });

            return _react2.default.createElement(
                'ul',
                { className: listClassName },
                ListItems
            );
        }
    }]);
    return PeriodsList;
}(_react.Component);

PeriodsList.propTypes = {
    items: _propTypes2.default.array.isRequired,
    onPeriodClick: _propTypes2.default.func.isRequired,
    onPeriodDoubleClick: _propTypes2.default.func,
    onRemovePeriodClick: _propTypes2.default.func,
    onReorder: _propTypes2.default.func,
    listClassName: _propTypes2.default.string.isRequired,
    sortable: _propTypes2.default.bool
};

PeriodsList.defaultProps = {
    onPeriodDoubleClick: Function.prototype,
    onRemovePeriodClick: Function.prototype,
    onReorder: Function.prototype
};

exports.default = PeriodsList;