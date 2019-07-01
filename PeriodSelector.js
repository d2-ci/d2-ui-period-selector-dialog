'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _analytics = require('@dhis2/analytics');

var _PeriodTypeButton = require('./PeriodTypeButton');

var _PeriodTypeButton2 = _interopRequireDefault(_PeriodTypeButton);

var _FixedPeriodFilter = require('./FixedPeriodFilter');

var _FixedPeriodFilter2 = _interopRequireDefault(_FixedPeriodFilter);

var _RelativePeriodFilter = require('./RelativePeriodFilter');

var _RelativePeriodFilter2 = _interopRequireDefault(_RelativePeriodFilter);

var _periodTypes = require('./modules/periodTypes');

require('./PeriodSelector.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PeriodSelector = function (_Component) {
    (0, _inherits3.default)(PeriodSelector, _Component);

    function PeriodSelector(props) {
        (0, _classCallCheck3.default)(this, PeriodSelector);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PeriodSelector.__proto__ || (0, _getPrototypeOf2.default)(PeriodSelector)).call(this, props));

        _this.state = {
            offeredPeriods: [],
            offeredPeriodsInOrder: [],
            selectedPeriods: [],
            periodType: _periodTypes.RELATIVE
        };

        _this.onPeriodTypeClick = function (periodType) {
            if (_this.state.periodType !== periodType) {
                _this.setState({ periodType: periodType });
            }
        };

        _this.onSelectPeriods = function (periodIds) {
            var offeredPeriods = _this.state.offeredPeriods.filter(function (period) {
                return !periodIds.includes(period.id);
            });
            var newPeriods = _this.state.offeredPeriods.filter(function (period) {
                return periodIds.includes(period.id);
            });
            var selectedPeriods = _this.state.selectedPeriods.concat(newPeriods);

            _this.setState({ selectedPeriods: selectedPeriods, offeredPeriods: offeredPeriods });
            _this.props.onSelect(selectedPeriods);
        };

        _this.setSelectedPeriodOrder = function (periodIds) {
            var selectedPeriods = periodIds.map(function (id) {
                return _this.state.selectedPeriods.find(function (period) {
                    return period.id === id;
                });
            });

            _this.setState({ selectedPeriods: selectedPeriods });
            _this.props.onReorder(selectedPeriods);
        };

        _this.onDeselectPeriods = function (periodIds) {
            var selectedPeriods = _this.state.selectedPeriods.filter(function (period) {
                return !periodIds.includes(period.id);
            });
            var removedPeriods = _this.state.selectedPeriods.filter(function (period) {
                return periodIds.includes(period.id);
            });
            var offeredPeriods = _this.state.offeredPeriodsInOrder.filter(function (period) {
                return !selectedPeriods.map(function (p) {
                    return p.id;
                }).includes(period.id);
            });

            _this.setState({ selectedPeriods: selectedPeriods, offeredPeriods: offeredPeriods });
            _this.props.onDeselect(removedPeriods);
        };

        _this.initializeOfferedPeriods = function (periods) {
            var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var selectedPeriods = initial ? _this.props.selectedItems : _this.state.selectedPeriods;
            var offeredPeriods = periods.filter(function (period) {
                return !selectedPeriods.map(function (p) {
                    return p.id;
                }).includes(period.id);
            });

            _this.setState({ offeredPeriodsInOrder: periods, offeredPeriods: offeredPeriods });
        };

        _this.renderPeriodTypeButtons = function () {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_PeriodTypeButton2.default, {
                    periodType: _periodTypes.RELATIVE,
                    activePeriodType: _this.state.periodType,
                    text: 'Relative periods',
                    onClick: _this.onPeriodTypeClick
                }),
                _react2.default.createElement(_PeriodTypeButton2.default, {
                    periodType: _periodTypes.FIXED,
                    activePeriodType: _this.state.periodType,
                    text: 'Fixed periods',
                    onClick: _this.onPeriodTypeClick
                })
            );
        };

        _this.render = function () {
            var filterZone = function filterZone() {
                if (_this.state.periodType === _periodTypes.FIXED) {
                    return _react2.default.createElement(_FixedPeriodFilter2.default, { setOfferedPeriods: _this.initializeOfferedPeriods });
                }

                return _react2.default.createElement(_RelativePeriodFilter2.default, { setOfferedPeriods: _this.initializeOfferedPeriods });
            };

            var unselected = {
                items: _this.state.offeredPeriods,
                onSelect: _this.onSelectPeriods,
                filterText: ''
            };

            var selected = {
                items: _this.state.selectedPeriods,
                onDeselect: _this.onDeselectPeriods,
                onReorder: _this.setSelectedPeriodOrder
            };

            return _react2.default.createElement(
                _react.Fragment,
                null,
                _this.renderPeriodTypeButtons(),
                _react2.default.createElement(
                    'div',
                    { style: { display: 'flex', marginTop: '18px' } },
                    _react2.default.createElement(
                        _analytics.ItemSelector,
                        {
                            itemClassName: 'period-selector',
                            unselected: unselected,
                            selected: selected
                        },
                        filterZone()
                    )
                )
            );
        };

        _this.state.selectedPeriods = _this.props.selectedItems;
        return _this;
    }

    return PeriodSelector;
}(_react.Component);

// eslint-disable-next-line import/no-unresolved


PeriodSelector.propTypes = {
    onSelect: _propTypes2.default.func.isRequired,
    onDeselect: _propTypes2.default.func.isRequired,
    onReorder: _propTypes2.default.func.isRequired,
    selectedItems: _propTypes2.default.arrayOf(_propTypes2.default.object)
};

PeriodSelector.defaultProps = {
    selectedItems: []
};

exports.default = PeriodSelector;