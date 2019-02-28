'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultState = undefined;

var _actionTypes = require('../actions/actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _PeriodTypes = require('../PeriodTypes');

var _PeriodTypes2 = _interopRequireDefault(_PeriodTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = exports.defaultState = _PeriodTypes2.default.RELATIVE;

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    switch (action.type) {
        case _actionTypes2.default.SET_PERIOD_TYPE:
            return action.payload;
        default:
            return state;
    }
};