import { DatePicker, DatePickerProps, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { FC, useCallback } from 'react';
import { FieldTitle, useInput } from 'react-admin';
import { PickerProps, PickerPropTypes } from './PickerProps';

const DatePickerInput: FC<PickerProps<DatePickerProps>> = ({ ...fieldProps }) => {
  const {
    options,
    label,
    source,
    resource,
    className,
    isRequired,
    providerOptions,
    variant
  } = fieldProps;

  const { input, meta } = useInput({ source });
  
  const { touched, error } = meta;
  
  const handleChange = useCallback(value => {
    Date.parse(value) ? input.onChange(value.toISOString()) : input.onChange(null);
  }, []);

  return (
    <div className="picker">
      <MuiPickersUtilsProvider {...providerOptions}>
        <DatePicker
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
          value={input.value ? new Date(input.value) : null}
          onChange={date => handleChange(date)}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

DatePickerInput.propTypes = PickerPropTypes;

export default DatePickerInput;