import { DatePickerProps, DateTimePickerProps, TimePickerProps } from "@material-ui/pickers";
import { MuiPickersUtilsProviderProps } from "@material-ui/pickers/MuiPickersUtilsProvider";
import { ReactElement } from "react";
import { FieldMetaState } from "react-final-form";
import PropTypes from 'prop-types';
import DateFnsUtils from "@date-io/date-fns";
import enLocale from 'date-fns/locale/en-US';

export interface PickerProps<TPickerOptions extends DatePickerProps | DateTimePickerProps | TimePickerProps> {

  variant?: 'dialog' | 'inline' | 'static';

  input?: { [key: string]: any };

  isRequired?: boolean;

  label?: ReactElement | string;

  options?: TPickerOptions;

  resource: string;

  source: string;

  labelTime?: string;

  className?: string;

  meta?: FieldMetaState<any>

  providerOptions: Omit<MuiPickersUtilsProviderProps, 'children'>;

}

export const PickerPropTypes = {
  variant: PropTypes.oneOf(['dialog', 'inline', 'static']),
  input: PropTypes.object,
  isRequired: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  options: PropTypes.object,
  resource: PropTypes.string,
  source: PropTypes.string.isRequired,
  labelTime: PropTypes.string,
  className: PropTypes.string,
  providerOptions: PropTypes.shape({
    utils: PropTypes.func,
    locale: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  })
};

export const DefaultPropTypes = {
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
    locale: enLocale
  },
};