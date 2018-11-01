import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

var PeriodTypeButton = function (_Component) {
    _inherits(PeriodTypeButton, _Component);

    function PeriodTypeButton(props, context) {
        _classCallCheck(this, PeriodTypeButton);

        var _this = _possibleConstructorReturn(this, (PeriodTypeButton.__proto__ || _Object$getPrototypeOf(PeriodTypeButton)).call(this, props));

        _this.handleClick = function () {
            _this.props.onClick(_this.props.periodType);
        };

        _this.render = function () {
            return React.createElement(
                Button,
                {
                    className: 'nav-button ' + (_this.props.periodType === _this.props.activePeriodType ? 'active' : ''),
                    onClick: _this.handleClick
                },
                _this.i18n.getTranslation(_this.props.text)
            );
        };

        _this.i18n = context.d2.i18n;
        return _this;
    }

    return PeriodTypeButton;
}(Component);

PeriodTypeButton.propTypes = {
    periodType: PropTypes.string.isRequired,
    activePeriodType: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

PeriodTypeButton.contextTypes = {
    d2: PropTypes.object
};

export default PeriodTypeButton;