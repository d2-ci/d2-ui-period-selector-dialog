'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Periods = require('./Periods');

var _Periods2 = _interopRequireDefault(_Periods);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PeriodSelector = function PeriodSelector(props) {
    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _reducers2.default },
        _react2.default.createElement(_Periods2.default, props)
    );
};

PeriodSelector.propTypes = {
    onSelect: _propTypes2.default.func,
    onDeselect: _propTypes2.default.func,
    onReorder: _propTypes2.default.func,
    selectedItems: _propTypes2.default.arrayOf(_propTypes2.default.object)
};

PeriodSelector.defaultProps = {
    onSelect: function onSelect() {
        return null;
    },
    onDeselect: function onDeselect() {
        return null;
    },
    onReorder: function onReorder() {
        return null;
    },
    selectedItems: []
};

exports.default = PeriodSelector;