import React from 'react';
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import { ValidatorComponent } from 'react-material-ui-form-validator';
import DateFnsUtils from '@date-io/date-fns';

const onChangeMethod = () => {
  console.log('On change method is called!');
};

class ValidatedDatePicker extends ValidatorComponent {
  render() {
    const { errorMessages, validators, requiredError, helperText, validatorListener, ...rest } = this.props;
    const { isValid } = this.state;
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          onChange={onChangeMethod}
          {...rest}
          error={!isValid}
          helperText={(!isValid && this.getErrorMessage()) || helperText}
        />
      </MuiPickersUtilsProvider>
    );
  }
}

export default ValidatedDatePicker;
