import { DatePicker, DatePickerProps, DateTimePicker, DateTimePickerProps, TimePicker, TimePickerProps } from '@material-ui/pickers';
import { MuiPickersUtilsProviderProps } from '@material-ui/pickers/MuiPickersUtilsProvider';
import { ReactElement } from 'react';
import { FieldMetaState } from 'react-final-form';
export interface PickerProps {
    PickerComponent: typeof DatePicker & typeof TimePicker & typeof DateTimePicker;
    variant: 'dialog' | 'inline' | 'static';
    input: {
        [key: string]: any;
    };
    isRequired: boolean;
    label: ReactElement;
    options: DatePickerProps & TimePickerProps & DateTimePickerProps;
    resource: string;
    source: string;
    labelTime: string;
    className: string;
    meta?: FieldMetaState<any>;
    providerOptions: MuiPickersUtilsProviderProps;
}
export declare const DateInput: (props: PickerProps) => JSX.Element;
export declare const TimeInput: (props: PickerProps) => JSX.Element;
export declare const DateTimeInput: (props: PickerProps) => JSX.Element;
//# sourceMappingURL=index.d.ts.map