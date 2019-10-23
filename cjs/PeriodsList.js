'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PeriodListItem = require('./PeriodListItem');

var _PeriodListItem2 = _interopRequireDefault(_PeriodListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PeriodsList = function PeriodsList(props) {
    var items = props.items,
        remaindingProps = (0, _objectWithoutProperties3.default)(props, ['items']);


    var ListItems = props.items.map(function (period, index) {
        return _react2.default.createElement(_PeriodListItem2.default, (0, _extends3.default)({
            period: period,
            index: index,
            key: period.id
        }, remaindingProps));
    });

    return _react2.default.createElement(
        'ul',
        { className: remaindingProps.listClassName },
        ' ',
        ListItems,
        ' '
    );
};

PeriodsList.propTypes = {
    items: _propTypes2.default.array.isRequired,
    onPeriodClick: _propTypes2.default.func.isRequired,
    onDoubleClick: _propTypes2.default.func,
    onRemovePeriodClick: _propTypes2.default.func,
    listClassName: _propTypes2.default.string.isRequired
};

PeriodsList.defaultProps = {
    onDoubleClick: function onDoubleClick() {
        return null;
    },
    onRemovePeriodClick: function onRemovePeriodClick() {
        return null;
    }
};

exports.default = PeriodsList;