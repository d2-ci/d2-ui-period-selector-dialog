'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ArrowForward = require('@material-ui/icons/ArrowForward');

var _ArrowForward2 = _interopRequireDefault(_ArrowForward);

var _ArrowBack = require('@material-ui/icons/ArrowBack');

var _ArrowBack2 = _interopRequireDefault(_ArrowBack);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _PeriodTypeButton = require('./PeriodTypeButton');

var _PeriodTypeButton2 = _interopRequireDefault(_PeriodTypeButton);

var _SelectedPeriods = require('./SelectedPeriods');

var _SelectedPeriods2 = _interopRequireDefault(_SelectedPeriods);

var _OfferedPeriods = require('./OfferedPeriods');

var _PeriodTypes = require('./PeriodTypes');

var _PeriodTypes2 = _interopRequireDefault(_PeriodTypes);

var _PeriodListItem = require('./styles/PeriodListItem.style');

var _PeriodListItem2 = _interopRequireDefault(_PeriodListItem);

require('./PeriodSelector.css');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unresolved
var SelectButton = function SelectButton(_ref) {
    var action = _ref.action;
    return _react2.default.createElement(
        _IconButton2.default,
        {
            style: _PeriodListItem2.default.arrowButton,
            className: 'select-button',
            onClick: action
        },
        _react2.default.createElement(_ArrowForward2.default, { style: _PeriodListItem2.default.arrowIcon })
    );
};

SelectButton.propTypes = {
    action: _propTypes2.default.func.isRequired
};

var DeselectButton = function DeselectButton(_ref2) {
    var action = _ref2.action;
    return _react2.default.createElement(
        _IconButton2.default,
        {
            style: _PeriodListItem2.default.arrowButton,
            className: 'select-button',
            onClick: action
        },
        _react2.default.createElement(_ArrowBack2.default, { style: _PeriodListItem2.default.arrowIcon })
    );
};

DeselectButton.propTypes = {
    action: _propTypes2.default.func.isRequired
};

var Periods = function (_Component) {
    (0, _inherits3.default)(Periods, _Component);

    function Periods(props) {
        (0, _classCallCheck3.default)(this, Periods);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Periods.__proto__ || (0, _getPrototypeOf2.default)(Periods)).call(this, props));

        _this.onPeriodTypeClick = function (periodType) {
            if (_this.props.periodType !== periodType) {
                _this.props.setPeriodType(periodType);
            }
        };

        _this.onSelectPeriods = function () {
            var itemsToAdd = _this.props.offeredPeriods.periods.filter(function (period) {
                return period.selected === true;
            });

            _this.props.onSelect(itemsToAdd);
            _this.props.addSelectedPeriods(itemsToAdd);
            _this.props.removeOfferedPeriods(itemsToAdd);
        };

        _this.onDeselectPeriods = function () {
            var removedPeriods = _this.props.selectedPeriods.periods.filter(function (period) {
                return period.selected === true;
            });

            _this.props.onDeselect(removedPeriods);
            _this.props.removeSelectedPeriods(removedPeriods);
            _this.addOfferedPeriods(removedPeriods);
        };

        _this.onOfferedPeriodDoubleClick = function (period) {
            var itemToAdd = [period];

            _this.props.onSelect(itemToAdd);
            _this.props.addSelectedPeriods(itemToAdd);
            _this.props.removeOfferedPeriods(itemToAdd);
        };

        _this.onSelectedPeriodDoubleClick = function (period) {
            var itemToAdd = [period];

            _this.props.onDeselect(itemToAdd);
            _this.props.removeSelectedPeriods(itemToAdd);
            _this.addOfferedPeriods(itemToAdd);
        };

        _this.onSelectedPeriodRemove = function (removedPeriod) {
            var itemToRemove = [removedPeriod];

            _this.props.onDeselect(itemToRemove);
            _this.props.removeSelectedPeriods(itemToRemove);
            _this.addOfferedPeriods(itemToRemove);
        };

        _this.onClearAll = function (removedPeriods) {
            _this.props.onDeselect(removedPeriods);
            _this.addOfferedPeriods(removedPeriods);
            _this.props.setSelectedPeriods([]);
        };

        _this.setOfferedPeriodIds = function (periods) {
            _this.setState({
                offeredPeriodIds: periods.map(function (period) {
                    return period.id;
                })
            });
        };

        _this.addOfferedPeriods = function (periods) {
            _this.props.addOfferedPeriods(periods.filter(function (period) {
                return _this.state.offeredPeriodIds.includes(period.id);
            }));
        };

        _this.renderPeriodTypeButtons = function () {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_PeriodTypeButton2.default, {
                    periodType: _PeriodTypes2.default.RELATIVE,
                    activePeriodType: _this.props.periodType,
                    text: 'Relative periods',
                    onClick: _this.onPeriodTypeClick
                }),
                _react2.default.createElement(_PeriodTypeButton2.default, {
                    periodType: _PeriodTypes2.default.FIXED,
                    activePeriodType: _this.props.periodType,
                    text: 'Fixed periods',
                    onClick: _this.onPeriodTypeClick
                })
            );
        };

        _this.renderSelectButtons = function () {
            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(SelectButton, { action: _this.onSelectPeriods }),
                _react2.default.createElement(DeselectButton, { action: _this.onDeselectPeriods })
            );
        };

        _this.render = function () {
            var PeriodTypeButtons = _this.renderPeriodTypeButtons();
            var SelectButtons = _this.renderSelectButtons();

            return _react2.default.createElement(
                'div',
                null,
                PeriodTypeButtons,
                _react2.default.createElement(
                    'div',
                    { className: 'periods-container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'block options' },
                        _react2.default.createElement(_OfferedPeriods.OfferedPeriods, {
                            periodType: _this.props.periodType,
                            items: _this.props.offeredPeriods.periods,
                            onPeriodDoubleClick: _this.onOfferedPeriodDoubleClick,
                            onPeriodClick: _this.props.toggleOfferedPeriod,
                            setOfferedPeriods: _this.props.setOfferedPeriods,
                            setOfferedPeriodIds: _this.setOfferedPeriodIds,
                            addSelectedPeriods: _this.props.addSelectedPeriods,
                            selectedItems: _this.props.selectedItems,
                            onSelect: _this.props.onSelect
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'block buttons' },
                        SelectButtons
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'block selected-periods' },
                        _react2.default.createElement(_SelectedPeriods2.default, {
                            items: _this.props.selectedPeriods.periods,
                            onClearAll: _this.onClearAll,
                            onPeriodDoubleClick: _this.onSelectedPeriodDoubleClick,
                            onPeriodClick: _this.props.toggleSelectedPeriod,
                            onReorder: _this.props.onReorder,
                            onRemovePeriodClick: _this.onSelectedPeriodRemove
                        })
                    )
                )
            );
        };

        _this.props.setSelectedPeriods(_this.props.selectedItems);

        _this.state = {
            offeredPeriodIds: []
        };
        return _this;
    }

    (0, _createClass3.default)(Periods, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var prevItems = prevProps.selectedItems.map(function (period) {
                return period.id;
            });
            var currentItems = this.props.selectedItems.map(function (period) {
                return period.id;
            });

            if (!(0, _isEqual2.default)(prevItems, currentItems)) {
                this.props.setSelectedPeriods(this.props.selectedItems);
            }
        }
    }]);
    return Periods;
}(_react.Component);

Periods.propTypes = {
    onSelect: _propTypes2.default.func.isRequired,
    onDeselect: _propTypes2.default.func.isRequired,
    onReorder: _propTypes2.default.func.isRequired,
    selectedItems: _propTypes2.default.array.isRequired,
    periodType: _propTypes2.default.string.isRequired,
    offeredPeriods: _propTypes2.default.object.isRequired,
    selectedPeriods: _propTypes2.default.object.isRequired,
    setPeriodType: _propTypes2.default.func.isRequired,
    setOfferedPeriods: _propTypes2.default.func.isRequired,
    setSelectedPeriods: _propTypes2.default.func.isRequired,
    addSelectedPeriods: _propTypes2.default.func.isRequired,
    addOfferedPeriods: _propTypes2.default.func.isRequired,
    removeOfferedPeriods: _propTypes2.default.func.isRequired,
    removeSelectedPeriods: _propTypes2.default.func.isRequired,
    toggleOfferedPeriod: _propTypes2.default.func.isRequired,
    toggleSelectedPeriod: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        periodType: state.periodType,
        offeredPeriods: state.offeredPeriods,
        selectedPeriods: state.selectedPeriods
    };
};

var mapDispatchToProps = {
    setPeriodType: _actions.setPeriodType,
    addOfferedPeriods: _actions.addOfferedPeriods,
    setOfferedPeriods: _actions.setOfferedPeriods,
    setSelectedPeriods: _actions.setSelectedPeriods,
    removeOfferedPeriods: _actions.removeOfferedPeriods,
    toggleOfferedPeriod: _actions.toggleOfferedPeriod,
    addSelectedPeriods: _actions.addSelectedPeriods,
    removeSelectedPeriods: _actions.removeSelectedPeriods,
    toggleSelectedPeriod: _actions.toggleSelectedPeriod
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Periods);