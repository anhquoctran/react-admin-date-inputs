import PropTypes from 'prop-types';
import DateFnsUtils from "@date-io/date-fns";
import enLocale from 'date-fns/locale/en-US';
export var PickerPropTypes = {
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
export var DefaultPropTypes = {
    input: {},
    isRequired: false,
    options: { value: new Date(), onChange: function () { } },
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
