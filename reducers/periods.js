import _toConsumableArray from 'babel-runtime/helpers/toConsumableArray';
import _extends from 'babel-runtime/helpers/extends';
import actionTypes from '../actions/actionTypes';

export var defaultState = {
    periods: [],
    lastClickedIndex: null
};

/**
 * Reducer factory to reuse logic for both
 * offered & selected periods which is the same
 * @param periodType
 * @returns {Function}
 */
export default (function () {
    var periodType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'offered';
    return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
        var action = arguments[1];

        switch (action.type) {
            case actionTypes['ADD_' + periodType.toUpperCase() + '_PERIODS']:
                {
                    var periods = action.periods.map(function (period) {
                        return _extends({}, period, {
                            selected: false
                        });
                    }).filter(function (period) {
                        return !state.periods.find(function (_period) {
                            return _period.id === period.id;
                        });
                    });

                    return _extends({}, state, {
                        periods: [].concat(_toConsumableArray(state.periods), _toConsumableArray(periods))
                    });
                }

            case actionTypes['SET_' + periodType.toUpperCase() + '_PERIODS']:
                {
                    return _extends({}, state, {
                        periods: action.periods.map(function (period) {
                            return _extends({}, period, {
                                selected: false
                            });
                        })
                    });
                }

            case actionTypes['REMOVE_' + periodType.toUpperCase() + '_PERIODS']:
                {
                    var periodsToRemove = action.periodsToRemove;


                    return _extends({}, state, {
                        periods: state.periods.filter(function (period) {
                            return !periodsToRemove.find(function (_period) {
                                return _period.id === period.id;
                            });
                        })
                    });
                }

            case actionTypes['TOGGLE_' + periodType.toUpperCase() + '_PERIOD']:
                {
                    var index = action.index,
                        isShiftPressed = action.isShiftPressed,
                        isCtrlPressed = action.isCtrlPressed;


                    if (action.period.selected) {
                        var _periods = state.periods.map(function (period) {
                            return period.id === action.period.id ? _extends({}, period, { selected: false }) : period;
                        });

                        return _extends({}, state, {
                            lastClickedIndex: null,
                            periods: _periods
                        });
                    }

                    // If control was not pressed, then only select
                    // current period and unselect all others
                    if (isCtrlPressed === false && isShiftPressed === false) {
                        return _extends({}, state, {
                            lastClickedIndex: index,
                            periods: [].concat(_toConsumableArray(state.periods.slice(0, index).map(function (period) {
                                return _extends({}, period, { selected: false });
                            })), [_extends({}, state.periods[index], {
                                selected: true
                            })], _toConsumableArray(state.periods.slice(index + 1, state.periods.length).map(function (period) {
                                return _extends({}, period, { selected: false });
                            })))
                        });
                    }

                    var minIndex = state.lastClickedIndex > index ? index : state.lastClickedIndex;
                    var maxIndex = state.lastClickedIndex < index ? index : state.lastClickedIndex;

                    // If both shift and control were pressed and there are selected periods
                    // then select every period from last selected period
                    // to currently selected period
                    if (isShiftPressed && state.lastClickedIndex !== null) {
                        return _extends({}, state, {
                            periods: [].concat(_toConsumableArray(state.periods.slice(0, minIndex)), _toConsumableArray(state.periods.slice(minIndex, maxIndex + 1).map(function (period) {
                                return _extends({}, period, {
                                    selected: true
                                });
                            })), _toConsumableArray(state.periods.slice(maxIndex + 1, state.periods.length)))
                        });
                    }

                    // If only control key was pressed, then just
                    // select period without unselecting others
                    return _extends({}, state, {
                        lastClickedIndex: !isShiftPressed && state.periods[index].selected === true ? state.lastClickedIndex : index,
                        periods: [].concat(_toConsumableArray(state.periods.slice(0, index)), [_extends({}, state.periods[index], {
                            selected: !state.periods[index].selected
                        })], _toConsumableArray(state.periods.slice(index + 1, state.periods.length)))
                    });
                }

            default:
                return state;
        }
    };
});