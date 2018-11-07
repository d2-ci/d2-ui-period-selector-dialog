import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Periods from './Periods';
import Store from './reducers';

var PeriodSelector = function (_Component) {
    _inherits(PeriodSelector, _Component);

    function PeriodSelector() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PeriodSelector);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PeriodSelector.__proto__ || _Object$getPrototypeOf(PeriodSelector)).call.apply(_ref, [this].concat(args))), _this), _this.getChildContext = function () {
            return {
                d2: _this.props.d2
            };
        }, _this.render = function () {
            return React.createElement(
                Provider,
                { store: Store },
                React.createElement(Periods, _this.props)
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return PeriodSelector;
}(Component);

PeriodSelector.propTypes = {
    d2: PropTypes.object.isRequired,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    selectedItems: PropTypes.array
};

PeriodSelector.defaultProps = {
    onSelect: function onSelect() {
        return null;
    },
    onDeselect: function onDeselect() {
        return null;
    },
    selectedItems: []
};

PeriodSelector.childContextTypes = {
    d2: PropTypes.object
};

export default PeriodSelector;