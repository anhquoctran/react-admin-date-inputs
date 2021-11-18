import { DatePickerProps, DateTimePickerProps, TimePickerProps } from "@material-ui/pickers";
import { MuiPickersUtilsProviderProps } from "@material-ui/pickers/MuiPickersUtilsProvider";
import { ReactElement } from "react";
import { FieldMetaState } from "react-final-form";
import PropTypes from 'prop-types';
import DateFnsUtils from "@date-io/date-fns";
export interface PickerProps<TPickerOptions extends DatePickerProps | DateTimePickerProps | TimePickerProps> {
    variant?: 'dialog' | 'inline' | 'static';
    input?: {
        [key: string]: any;
    };
    isRequired?: boolean;
    label?: ReactElement | string;
    options?: TPickerOptions;
    resource?: string;
    source: string;
    labelTime?: string;
    className?: string;
    meta?: FieldMetaState<any>;
    providerOptions: Omit<MuiPickersUtilsProviderProps, 'children'>;
}
export declare const PickerPropTypes: {
    variant: PropTypes.Requireable<string>;
    input: PropTypes.Requireable<object>;
    isRequired: PropTypes.Requireable<boolean>;
    label: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
    options: PropTypes.Requireable<object>;
    resource: PropTypes.Requireable<string>;
    source: PropTypes.Validator<string>;
    labelTime: PropTypes.Requireable<string>;
    className: PropTypes.Requireable<string>;
    providerOptions: PropTypes.Requireable<PropTypes.InferProps<{
        utils: PropTypes.Requireable<(...args: any[]) => any>;
        locale: PropTypes.Requireable<string | object>;
    }>>;
};
export declare const DefaultPropTypes: {
    input: {};
    isRequired: boolean;
    options: {
        value: Date;
        onChange: () => void;
    };
    resource: string;
    source: string;
    labelTime: string;
    className: string;
    variant: string;
    providerOptions: {
        utils: typeof DateFnsUtils;
        locale: Locale;
    };
};
