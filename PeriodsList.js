import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import PeriodListItem from './PeriodListItem';

var SortableItem = SortableElement(function (_ref) {
    var period = _ref.period,
        idx = _ref.idx,
        listClassName = _ref.listClassName,
        handlerProps = _objectWithoutProperties(_ref, ['period', 'idx', 'listClassName']);

    return React.createElement(
        'li',
        { key: period.id, className: 'period-dimension-item' },
        React.createElement(PeriodListItem, _extends({
            period: period,
            index: idx,
            listClassName: listClassName
        }, handlerProps))
    );
});

var SortableList = SortableContainer(function (_ref2) {
    var items = _ref2.items,
        listClassName = _ref2.listClassName,
        handlerProps = _objectWithoutProperties(_ref2, ['items', 'listClassName']);

    return React.createElement(
        'ul',
        { className: listClassName },
        items.map(function (period, index) {
            return React.createElement(SortableItem, _extends({
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
    _inherits(PeriodsList, _Component);

    function PeriodsList() {
        var _ref3;

        var _temp, _this, _ret;

        _classCallCheck(this, PeriodsList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = PeriodsList.__proto__ || _Object$getPrototypeOf(PeriodsList)).call.apply(_ref3, [this].concat(args))), _this), _this.onSortEnd = function (_ref4) {
            var oldIndex = _ref4.oldIndex,
                newIndex = _ref4.newIndex;

            _this.props.onReorder(arrayMove(_this.props.items, oldIndex, newIndex));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PeriodsList, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                items = _props.items,
                sortable = _props.sortable,
                listClassName = _props.listClassName,
                handlerProps = _objectWithoutProperties(_props, ['items', 'sortable', 'listClassName']);

            if (sortable) {
                return React.createElement(SortableList, _extends({
                    distance: 3,
                    transitionDuration: 200,
                    onSortEnd: this.onSortEnd,
                    items: items,
                    listClassName: listClassName
                }, handlerProps));
            }

            var ListItems = items.map(function (period, index) {
                return React.createElement(
                    'li',
                    {
                        key: period.id,
                        className: 'period-dimension-item'
                    },
                    React.createElement(PeriodListItem, _extends({
                        period: period,
                        index: index,
                        key: period.id,
                        listClassName: listClassName
                    }, handlerProps))
                );
            });

            return React.createElement(
                'ul',
                { className: listClassName },
                ListItems
            );
        }
    }]);

    return PeriodsList;
}(Component);

PeriodsList.propTypes = {
    items: PropTypes.array.isRequired,
    onPeriodClick: PropTypes.func.isRequired,
    onPeriodDoubleClick: PropTypes.func,
    onRemovePeriodClick: PropTypes.func,
    onReorder: PropTypes.func,
    listClassName: PropTypes.string.isRequired,
    sortable: PropTypes.bool
};

PeriodsList.defaultProps = {
    onPeriodDoubleClick: function onPeriodDoubleClick() {
        return null;
    },
    onRemovePeriodClick: function onRemovePeriodClick() {
        return null;
    }
};

export default PeriodsList;