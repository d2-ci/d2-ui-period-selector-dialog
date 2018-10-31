'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultState = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _actionTypes = require('../actions/actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = exports.defaultState = {
    periods: [],
    lastClickedIndex: null
};

/**
 * Reducer factory to reuse logic for both
 * offered & selected periods which is the same
 * @param periodType
 * @returns {Function}
 */

exports.default = function () {
    var periodType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'offered';
    return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
        var action = arguments[1];

        switch (action.type) {
            case _actionTypes2.default['ADD_' + periodType.toUpperCase() + '_PERIODS']:
                {
                    var periods = action.periods.map(function (period) {
                        return (0, _extends3.default)({}, period, {
                            selected: false
                        });
                    }).filter(function (period) {
                        return !state.periods.find(function (_period) {
                            return _period.id === period.id;
                        });
                    });

                    return (0, _extends3.default)({}, state, {
                        periods: [].concat((0, _toConsumableArray3.default)(state.periods), (0, _toConsumableArray3.default)(periods))
                    });
                }

            case _actionTypes2.default['SET_' + periodType.toUpperCase() + '_PERIODS']:
                {
                    return (0, _extends3.default)({}, state, {
                        periods: action.periods.map(function (period) {
                            return (0, _extends3.default)({}, period, {
                                selected: false
                            });
                        })
                    });
                }

            case _actionTypes2.default['REMOVE_' + periodType.toUpperCase() + '_PERIODS']:
                {
                    var periodsToRemove = action.periodsToRemove;


                    return (0, _extends3.default)({}, state, {
                        periods: state.periods.filter(function (period) {
                            return !periodsToRemove.find(function (_period) {
                                return _period.id === period.id;
                            });
                        })
                    });
                }

            case _actionTypes2.default['TOGGLE_' + periodType.toUpperCase() + '_PERIOD']:
                {
                    var index = action.index,
                        isShiftPressed = action.isShiftPressed,
                        isCtrlPressed = action.isCtrlPressed;


                    if (action.period.selected) {
                        var _periods = state.periods.map(function (period) {
                            return period.id === action.period.id ? (0, _extends3.default)({}, period, { selected: false }) : period;
                        });

                        return (0, _extends3.default)({}, state, {
                            lastClickedIndex: null,
                            periods: _periods
                        });
                    }

                    // If control was not pressed, then only select
                    // current period and unselect all others
                    if (isCtrlPressed === false && isShiftPressed === false) {
                        return (0, _extends3.default)({}, state, {
                            lastClickedIndex: index,
                            periods: [].concat((0, _toConsumableArray3.default)(state.periods.slice(0, index).map(function (period) {
                                return (0, _extends3.default)({}, period, { selected: false });
                            })), [(0, _extends3.default)({}, state.periods[index], {
                                selected: true
                            })], (0, _toConsumableArray3.default)(state.periods.slice(index + 1, state.periods.length).map(function (period) {
                                return (0, _extends3.default)({}, period, { selected: false });
                            })))
                        });
                    }

                    var minIndex = state.lastClickedIndex > index ? index : state.lastClickedIndex;
                    var maxIndex = state.lastClickedIndex < index ? index : state.lastClickedIndex;

                    // If both shift and control were pressed and there are selected periods
                    // then select every period from last selected period
                    // to currently selected period
                    if (isShiftPressed && state.lastClickedIndex !== null) {
                        return (0, _extends3.default)({}, state, {
                            periods: [].concat((0, _toConsumableArray3.default)(state.periods.slice(0, minIndex)), (0, _toConsumableArray3.default)(state.periods.slice(minIndex, maxIndex + 1).map(function (period) {
                                return (0, _extends3.default)({}, period, {
                                    selected: true
                                });
                            })), (0, _toConsumableArray3.default)(state.periods.slice(maxIndex + 1, state.periods.length)))
                        });
                    }

                    // If only control key was pressed, then just
                    // select period without unselecting others
                    return (0, _extends3.default)({}, state, {
                        lastClickedIndex: !isShiftPressed && state.periods[index].selected === true ? state.lastClickedIndex : index,
                        periods: [].concat((0, _toConsumableArray3.default)(state.periods.slice(0, index)), [(0, _extends3.default)({}, state.periods[index], {
                            selected: !state.periods[index].selected
                        })], (0, _toConsumableArray3.default)(state.periods.slice(index + 1, state.periods.length)))
                    });
                }

            default:
                return state;
        }
    };
};