import { DateTimePicker, DateTimePickerProps, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { FC, useCallback, useState } from 'react';
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
    validate,
    onChange,
    basePath,
    id,
    margin,
    record
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
        <DateTimePicker
          {...options}
          variant={variant}
          label={<FieldTitle label={label}
            source={source}
            resource={resource}
            isRequired={isRequired}
          />}
          id={id}

          error={!!(touched && error)}
          helperText={touched && error}
          margin="normal"
          className={className}
          value={internalValue}
          onChange={date => handleChange(date)}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

DateTimePickerInput.propTypes = PickerPropTypes;

export default DateTimePickerInput;