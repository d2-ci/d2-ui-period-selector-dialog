'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OfferedPeriods = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RelativePeriods = require('./RelativePeriods');

var _RelativePeriods2 = _interopRequireDefault(_RelativePeriods);

var _FixedPeriods = require('./FixedPeriods');

var _FixedPeriods2 = _interopRequireDefault(_FixedPeriods);

var _PeriodTypes = require('./PeriodTypes');

var _PeriodTypes2 = _interopRequireDefault(_PeriodTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OfferedPeriods = function OfferedPeriods(props) {
    var periodType = props.periodType,
        remaindingProps = (0, _objectWithoutProperties3.default)(props, ['periodType']);


    var relativePeriods = _react2.default.createElement(_RelativePeriods2.default, remaindingProps);
    var fixedPeriods = _react2.default.createElement(_FixedPeriods2.default, remaindingProps);

    switch (periodType) {
        case _PeriodTypes2.default.FIXED:
            return fixedPeriods;
        case _PeriodTypes2.default.RELATIVE:
            return relativePeriods;
        default:
            return relativePeriods;
    }
};

exports.OfferedPeriods = OfferedPeriods;
OfferedPeriods.propTypes = {
    periodType: _propTypes2.default.string.isRequired,
    items: _propTypes2.default.array.isRequired,
    onDoubleClick: _propTypes2.default.func.isRequired,
    onPeriodClick: _propTypes2.default.func.isRequired,
    setOfferedPeriods: _propTypes2.default.func.isRequired
};

exports.default = OfferedPeriods;