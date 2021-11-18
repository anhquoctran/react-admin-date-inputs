var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useCallback } from 'react';
import { FieldTitle, useInput } from 'react-admin';
import { PickerPropTypes } from './PickerProps';
var DatePickerInput = function (_a) {
    var fieldProps = __rest(_a, []);
    var options = fieldProps.options, label = fieldProps.label, source = fieldProps.source, resource = fieldProps.resource, className = fieldProps.className, isRequired = fieldProps.isRequired, providerOptions = fieldProps.providerOptions, variant = fieldProps.variant;
    var _b = useInput({ source: source }), input = _b.input, meta = _b.meta;
    var touched = meta.touched, error = meta.error;
    var handleChange = useCallback(function (value) {
        Date.parse(value) ? input.onChange(value.toISOString()) : input.onChange(null);
    }, []);
    return (React.createElement("div", { className: "picker" },
        React.createElement(MuiPickersUtilsProvider, __assign({}, providerOptions),
            React.createElement(DatePicker, __assign({}, options, { variant: variant, label: React.createElement(FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }), margin: "normal", error: !!(touched && error), helperText: touched && error, className: className, value: input.value ? new Date(input.value) : null, onChange: function (date) { return handleChange(date); } })))));
};
DatePickerInput.propTypes = PickerPropTypes;
export default DatePickerInput;
