import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import i18n from '@dhis2/d2-i18n';

var PeriodTypeButton = function (_Component) {
    _inherits(PeriodTypeButton, _Component);

    function PeriodTypeButton() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PeriodTypeButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PeriodTypeButton.__proto__ || _Object$getPrototypeOf(PeriodTypeButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
            _this.props.onClick(_this.props.periodType);
        }, _this.render = function () {
            return React.createElement(
                Button,
                {
                    className: 'nav-button ' + (_this.props.periodType === _this.props.activePeriodType ? 'active' : ''),
                    onClick: _this.handleClick
                },
                i18n.t(_this.props.text)
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return PeriodTypeButton;
}(Component);

PeriodTypeButton.propTypes = {
    periodType: PropTypes.string.isRequired,
    activePeriodType: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default PeriodTypeButton;