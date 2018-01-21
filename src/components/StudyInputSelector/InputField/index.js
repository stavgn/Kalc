import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export default function InputField(inputProps) {
  const { classes, autoFocus, value, ref, name, errorText, ...other } = inputProps;

  return (
    <TextField
      name={name}
      style={{ direction: 'rtl', textAlign: 'right'}}
      error={!!errorText}
      helperText={errorText}
      autoFocus={autoFocus}
      className={classes.textField}
      value={value}
      inputRef={ref}
      FormHelperTextProps={{error: true, style: {font: '13px Assistant Light', textAlign: 'right', width: '500px'}}}
      InputProps={{
        classes: {
          input: classes.input
        },
        ...other
      }}
      fullWidth
      required
    />
  );
}
