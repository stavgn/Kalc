import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

export default function SuggestionContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}
