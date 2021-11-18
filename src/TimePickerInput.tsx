import { TimePicker, MuiPickersUtilsProvider, TimePickerProps } from '@material-ui/pickers';
import React, { FC, useCallback } from 'react';
import { FieldTitle } from 'react-admin';
import { useField } from 'react-final-form';
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
    variant
  } = fieldProps;

  const { input, meta } = useField(source);
  
  const { touched, error } = meta;
  
  const handleChange = useCallback(value => {
    Date.parse(value) ? input.onChange(value.toISOString()) : input.onChange(null);
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
          value={input.value ? new Date(input.value) : null}
          onChange={date => handleChange(date)}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

TimePickerInput.propTypes = PickerPropTypes;

export default TimePickerInput;