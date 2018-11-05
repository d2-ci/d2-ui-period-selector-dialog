import actionTypes from '../actions/actionTypes';
import periodTypes from '../PeriodTypes';

export var defaultState = periodTypes.RELATIVE;

export default (function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    switch (action.type) {
        case actionTypes.SET_PERIOD_TYPE:
            return action.payload;
        default:
            return state;
    }
});