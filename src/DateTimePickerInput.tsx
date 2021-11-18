import { DateTimePicker, DateTimePickerProps, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { FC, useCallback } from 'react';
import { FieldTitle, useInput } from 'react-admin';
import { useField } from 'react-final-form';
import { PickerProps, PickerPropTypes } from './PickerProps';

const DateTimePickerInput: FC<PickerProps<DateTimePickerProps>> = ({ ...fieldProps }) => {

  const {
    options,
    label,
    source,
    resource,
    className,
    isRequired,
    providerOptions,
    variant,
    defaultValue,
    validate
  } = fieldProps;

  const { input: { onChange, value }, meta } = useInput({
    defaultValue,
    source,
    validate,
    isRequired,
    resource,
    name: source
  });

  const { touched, error } = meta;
  
  const handleChange = useCallback(value => {
    Date.parse(value) ? onChange?.(value.toISOString()) : onChange?.(null);
  }, []);

  return (
    <div className="picker">
      <MuiPickersUtilsProvider {...providerOptions}>
        <DateTimePicker
          {...options}
          variant={variant}
          label={<FieldTitle label={label}
            source={source}
            resource={resource}
            isRequired={isRequired}
          />}
          error={!!(touched && error)}
          helperText={touched && error}
          margin="normal"
          className={className}
          value={value ? new Date(value as string) : null}
          onChange={date => handleChange(date)}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

DateTimePickerInput.propTypes = PickerPropTypes;

export default DateTimePickerInput;