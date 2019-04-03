'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toggleSelectedPeriod = exports.removeSelectedPeriods = exports.setSelectedPeriods = exports.addSelectedPeriods = exports.toggleOfferedPeriod = exports.removeOfferedPeriods = exports.setOfferedPeriods = exports.addOfferedPeriods = exports.setPeriodType = undefined;

var _actionTypes = require('./actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setPeriodType = exports.setPeriodType = function setPeriodType(periodType) {
    return {
        type: _actionTypes2.default.SET_PERIOD_TYPE,
        payload: periodType
    };
};

var addOfferedPeriods = exports.addOfferedPeriods = function addOfferedPeriods(periods) {
    return {
        type: _actionTypes2.default.ADD_OFFERED_PERIODS,
        periods: periods
    };
};

var setOfferedPeriods = exports.setOfferedPeriods = function setOfferedPeriods(periods) {
    return {
        type: _actionTypes2.default.SET_OFFERED_PERIODS,
        periods: periods
    };
};

var removeOfferedPeriods = exports.removeOfferedPeriods = function removeOfferedPeriods(periodsToRemove) {
    return {
        type: _actionTypes2.default.REMOVE_OFFERED_PERIODS,
        periodsToRemove: periodsToRemove
    };
};

var toggleOfferedPeriod = exports.toggleOfferedPeriod = function toggleOfferedPeriod(period, index) {
    var isShiftPressed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var isCtrlPressed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    return {
        type: _actionTypes2.default.TOGGLE_OFFERED_PERIOD,
        period: period,
        index: index,
        isShiftPressed: isShiftPressed,
        isCtrlPressed: isCtrlPressed
    };
};

var addSelectedPeriods = exports.addSelectedPeriods = function addSelectedPeriods(periods) {
    return {
        type: _actionTypes2.default.ADD_SELECTED_PERIODS,
        periods: periods
    };
};

var setSelectedPeriods = exports.setSelectedPeriods = function setSelectedPeriods(periods) {
    return {
        type: _actionTypes2.default.SET_SELECTED_PERIODS,
        periods: periods
    };
};

var removeSelectedPeriods = exports.removeSelectedPeriods = function removeSelectedPeriods(periodsToRemove) {
    return {
        type: _actionTypes2.default.REMOVE_SELECTED_PERIODS,
        periodsToRemove: periodsToRemove
    };
};

var toggleSelectedPeriod = exports.toggleSelectedPeriod = function toggleSelectedPeriod(period, index) {
    var isShiftPressed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var isCtrlPressed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    return {
        type: _actionTypes2.default.TOGGLE_SELECTED_PERIOD,
        period: period,
        index: index,
        isShiftPressed: isShiftPressed,
        isCtrlPressed: isCtrlPressed
    };
};