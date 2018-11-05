import actionTypes from './actionTypes';

export var setPeriodType = function setPeriodType(periodType) {
    return {
        type: actionTypes.SET_PERIOD_TYPE,
        payload: periodType
    };
};

export var addOfferedPeriods = function addOfferedPeriods(periods) {
    return {
        type: actionTypes.ADD_OFFERED_PERIODS,
        periods: periods
    };
};

export var setOfferedPeriods = function setOfferedPeriods(periods) {
    return {
        type: actionTypes.SET_OFFERED_PERIODS,
        periods: periods
    };
};

export var removeOfferedPeriods = function removeOfferedPeriods(periodsToRemove) {
    return {
        type: actionTypes.REMOVE_OFFERED_PERIODS,
        periodsToRemove: periodsToRemove
    };
};

export var toggleOfferedPeriod = function toggleOfferedPeriod(period, index) {
    var isShiftPressed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var isCtrlPressed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    return {
        type: actionTypes.TOGGLE_OFFERED_PERIOD,
        period: period,
        index: index,
        isShiftPressed: isShiftPressed,
        isCtrlPressed: isCtrlPressed
    };
};

export var addSelectedPeriods = function addSelectedPeriods(periods) {
    return {
        type: actionTypes.ADD_SELECTED_PERIODS,
        periods: periods
    };
};

export var setSelectedPeriods = function setSelectedPeriods(periods) {
    return {
        type: actionTypes.SET_SELECTED_PERIODS,
        periods: periods
    };
};

export var removeSelectedPeriods = function removeSelectedPeriods(periodsToRemove) {
    return {
        type: actionTypes.REMOVE_SELECTED_PERIODS,
        periodsToRemove: periodsToRemove
    };
};

export var toggleSelectedPeriod = function toggleSelectedPeriod(period, index) {
    var isShiftPressed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var isCtrlPressed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    return {
        type: actionTypes.TOGGLE_SELECTED_PERIOD,
        period: period,
        index: index,
        isShiftPressed: isShiftPressed,
        isCtrlPressed: isCtrlPressed
    };
};