import { TimePicker, MuiPickersUtilsProvider, TimePickerProps } from '@material-ui/pickers';
import React, { FC, useCallback, useState } from 'react';
import { FieldTitle, useInput } from 'react-admin';
import { PickerProps, PickerPropTypes } from './PickerProps';

const TimePickerInput: FC<PickerProps<TimePickerProps>> = ({ ...fieldProps }) => {
  const {
    options,
    label,
    source,
    resource,
    className,
    isRequired,
    providerOptions,
    variant,
    record,
    onChange
  } = fieldProps;

  const initialValue = record?.[source] || null;
  const [internalValue, setInternalValue] = useState<string>(initialValue);

  const { touched, error } = { touched: false, error: null };
  
  const handleChange = useCallback(value => {
    if (Date.parse(value)) {
      onChange?.(value.toISOString());
      setInternalValue(value.toISOString());
    } else {
      onChange?.(null);
      setInternalValue(initialValue);
    }
    Date.parse(value) ? onChange?.(value.toISOString()) : onChange?.(null);
  }, []);

  return (
    <div className="picker">
      <MuiPickersUtilsProvider {...providerOptions}>
        <TimePicker
          {...options}
          variant={variant}
          label={<FieldTitle label={label}
            source={source}
            resource={resource}
            isRequired={isRequired}
          />}
          margin="normal"
          error={!!(touched && error)}
          helperText={touched && error}
          className={className}
          value={internalValue}
          onChange={date => handleChange(date)}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

TimePickerInput.propTypes = PickerPropTypes;

export default TimePickerInput;