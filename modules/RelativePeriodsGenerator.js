'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DaysPeriodType = {
    generatePeriods: function generatePeriods() {
        return [{ id: 'TODAY', name: 'Today' }, { id: 'YESTERDAY', name: 'Yesterday' }, { id: 'LAST_3_DAYS', name: 'Last 3 days' }, { id: 'LAST_7_DAYS', name: 'Last 7 days' }, { id: 'LAST_14_DAYS', name: 'Last 14 days' }];
    }
};

var WeeksPeriodType = {
    generatePeriods: function generatePeriods() {
        return [{ id: 'THIS_WEEK', name: 'This week' }, { id: 'LAST_WEEK', name: 'Last week' }, { id: 'LAST_4_WEEKS', name: 'Last 4 weeks' }, { id: 'LAST_12_WEEKS', name: 'Last 12 weeks' }, { id: 'LAST_52_WEEKS', name: 'Last 52 weeks' }, { id: 'WEEKS_THIS_YEAR', name: 'Weeks this year' }];
    }
};

var BiWeeksPeriodType = {
    generatePeriods: function generatePeriods() {
        return [{ id: 'THIS_BIWEEK', name: 'This bi-week' }, { id: 'LAST_BIWEEK', name: 'Last bi-week' }, { id: 'LAST_4_BIWEEKS', name: 'Last 4 bi-weeks' }];
    }
};

var MonthsPeriodType = {
    generatePeriods: function generatePeriods() {
        return [{ id: 'THIS_MONTH', name: 'This month' }, { id: 'LAST_MONTH', name: 'Last month' }, { id: 'LAST_3_MONTHS', name: 'Last 3 months' }, { id: 'LAST_6_MONTHS', name: 'Last 6 months' }, { id: 'LAST_12_MONTHS', name: 'Last 12 months' }, { id: 'MONTHS_THIS_YEAR', name: 'Months this year' }];
    }
};

var BiMonthsPeriodType = {
    generatePeriods: function generatePeriods() {
        return [{ id: 'THIS_BIMONTH', name: 'This bi-month' }, { id: 'LAST_BIMONTH', name: 'Last bi-month' }, { id: 'LAST_6_BIMONTHS', name: 'Last 6 bi-months' }, { id: 'BIMONTHS_THIS_YEAR', name: 'Bi-months this year' }];
    }
};

var QuartersPeriodType = {
    generatePeriods: function generatePeriods() {
        return [{ id: 'THIS_QUARTER', name: 'This quarter' }, { id: 'LAST_QUARTER', name: 'Last quarter' }, { id: 'LAST_4_QUARTERS', name: 'Last 4 quarters' }, { id: 'QUARTERS_THIS_YEAR', name: 'Quarters this year' }];
    }
};

var SixMonthsPeriodType = {
    generatePeriods: function generatePeriods() {
        return [{ id: 'THIS_SIX_MONTH', name: 'This six-month' }, { id: 'LAST_SIX_MONTH', name: 'Last six-month' }, { id: 'LAST_2_SIXMONTHS', name: 'Last 2 six-month' }];
    }
};

var FinancialYearsPeriodType = {
    generatePeriods: function generatePeriods() {
        return [{ id: 'THIS_FINANCIAL_YEAR', name: 'This financial year' }, { id: 'LAST_FINANCIAL_YEAR', name: 'Last financial year' }, { id: 'LAST_5_FINANCIAL_YEARS', name: 'Last 5 financial years' }];
    }
};

var YearsPeriodType = {
    generatePeriods: function generatePeriods() {
        return [{ id: 'THIS_YEAR', name: 'This year' }, { id: 'LAST_YEAR', name: 'Last year' }, { id: 'LAST_5_YEARS', name: 'Last 5 years' }];
    }
};

var Generator = function Generator() {
    var _this = this;

    (0, _classCallCheck3.default)(this, Generator);
    this.options = {
        Days: DaysPeriodType,
        Weeks: WeeksPeriodType,
        'Bi-weeks': BiWeeksPeriodType,
        Months: MonthsPeriodType,
        'Bi-months': BiMonthsPeriodType,
        Quarters: QuartersPeriodType,
        'Six-months': SixMonthsPeriodType,
        'Financial Years': FinancialYearsPeriodType,
        Years: YearsPeriodType
    };

    this.get = function (key) {
        return _this.options[key];
    };

    this.getOptions = function () {
        return (0, _keys2.default)(_this.options);
    };
};

exports.default = Generator;