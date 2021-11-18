"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeInput = exports.TimeInput = exports.DateInput = void 0;
var tslib_1 = require("tslib");
var date_fns_1 = (0, tslib_1.__importDefault)(require("@date-io/date-fns"));
var pickers_1 = require("@material-ui/pickers");
var prop_types_1 = (0, tslib_1.__importDefault)(require("prop-types"));
var react_admin_1 = require("react-admin");
var react_1 = (0, tslib_1.__importStar)(require("react"));
var Picker = function (_a) {
    var PickerComponent = _a.PickerComponent, fieldProps = (0, tslib_1.__rest)(_a, ["PickerComponent"]);
    var options = fieldProps.options, label = fieldProps.label, source = fieldProps.source, resource = fieldProps.resource, className = fieldProps.className, isRequired = fieldProps.isRequired, providerOptions = fieldProps.providerOptions, variant = fieldProps.variant;
    var _b = (0, react_admin_1.useInput)({ source: source }), input = _b.input, meta = _b.meta;
    var touched = meta.touched, error = meta.error;
    var handleChange = (0, react_1.useCallback)(function (value) {
        Date.parse(value) ? input.onChange(value.toISOString()) : input.onChange(null);
    }, []);
    return (react_1.default.createElement("div", { className: "picker" },
        react_1.default.createElement(pickers_1.MuiPickersUtilsProvider, (0, tslib_1.__assign)({}, providerOptions),
            react_1.default.createElement(PickerComponent, (0, tslib_1.__assign)({}, options, { variant: variant, label: react_1.default.createElement(react_admin_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }), margin: "normal", error: !!(touched && error), helperText: touched && error, className: className, value: input.value ? new Date(input.value) : null, onChange: function (date) { return handleChange(date); } })))));
};
Picker.propTypes = {
    variant: prop_types_1.default.oneOf(['dialog', 'inline', 'static']),
    input: prop_types_1.default.object,
    isRequired: prop_types_1.default.bool,
    label: prop_types_1.default.element,
    options: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
    labelTime: prop_types_1.default.string,
    className: prop_types_1.default.string,
    providerOptions: prop_types_1.default.shape({
        utils: prop_types_1.default.func,
        locale: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.string]),
    }),
    PickerComponent: prop_types_1.default.element
};
Picker.defaultProps = {
    input: {},
    isRequired: false,
    options: { value: new Date(), onChange: function () { } },
    resource: '',
    source: '',
    labelTime: '',
    className: '',
    variant: 'inline',
    providerOptions: {
        utils: date_fns_1.default,
        locale: undefined,
        children: null
    },
};
var DateInput = function (props) { return react_1.default.createElement(Picker, (0, tslib_1.__assign)({ PickerComponent: pickers_1.DatePicker }, props)); };
exports.DateInput = DateInput;
var TimeInput = function (props) { return react_1.default.createElement(Picker, (0, tslib_1.__assign)({ PickerComponent: pickers_1.TimePicker }, props)); };
exports.TimeInput = TimeInput;
var DateTimeInput = function (props) { return react_1.default.createElement(Picker, (0, tslib_1.__assign)({ PickerComponent: pickers_1.DateTimePicker }, props)); };
exports.DateTimeInput = DateTimeInput;
//# sourceMappingURL=index.js.map