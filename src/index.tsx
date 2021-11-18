import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, DatePickerProps, DateTimePicker, DateTimePickerProps, MuiPickersUtilsProvider, TimePicker, TimePickerProps } from '@material-ui/pickers';
import { MuiPickersUtilsProviderProps } from '@material-ui/pickers/MuiPickersUtilsProvider';
import PropTypes from 'prop-types';
import { FieldTitle, useInput } from 'react-admin';
import React, { FC, ReactElement, useCallback } from 'react';
import { FieldMetaState, } from 'react-final-form';

export interface PickerProps {

  PickerComponent: typeof DatePicker & typeof TimePicker & typeof DateTimePicker;

  variant: 'dialog' | 'inline' | 'static';

  input: { [key: string]: any };

  isRequired: boolean;

  label: ReactElement;

  options: DatePickerProps & TimePickerProps & DateTimePickerProps;

  resource: string;

  source: string;

  labelTime: string;

  className: string;

  meta?: FieldMetaState<any>

  providerOptions: MuiPickersUtilsProviderProps;

}

const Picker: FC<PickerProps> = ({ PickerComponent, ...fieldProps }) => {

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
        <PickerComponent
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

Picker.propTypes = {
  variant: PropTypes.oneOf(['dialog', 'inline', 'static']),
  input: PropTypes.object,
  isRequired: PropTypes.bool,
  label: PropTypes.element,
  options: PropTypes.object,
  resource: PropTypes.string,
  source: PropTypes.string,
  labelTime: PropTypes.string,
  className: PropTypes.string,
  providerOptions: PropTypes.shape({
    utils: PropTypes.func,
    locale: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  PickerComponent: PropTypes.element
};

Picker.defaultProps = {
  input: {},
  isRequired: false,
  options: { value: new Date(), onChange: () => {} },
  resource: '',
  source: '',
  labelTime: '',
  className: '',
  variant: 'inline',
  providerOptions: {
    utils: DateFnsUtils,
    locale: undefined,
    children: null
  },
};

export const DateInput = (props: PickerProps) => <Picker PickerComponent={DatePicker} {...props} />;
export const TimeInput = (props: PickerProps) => <Picker PickerComponent={TimePicker} {...props} />;
export const DateTimeInput = (props: PickerProps) => <Picker PickerComponent={DateTimePicker} {...props} />;
