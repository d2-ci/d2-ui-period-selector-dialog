'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reducers = undefined;

var _redux = require('redux');

var _periodType = require('./periodType');

var _periodType2 = _interopRequireDefault(_periodType);

var _periods = require('./periods');

var _periods2 = _interopRequireDefault(_periods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = exports.reducers = (0, _redux.combineReducers)({
    periodType: _periodType2.default,
    offeredPeriods: (0, _periods2.default)('offered'),
    selectedPeriods: (0, _periods2.default)('selected')
});

exports.default = (0, _redux.createStore)(reducers,
// eslint-disable-next-line no-underscore-dangle
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());