import React from 'React';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export default class StudyInputDisabled extends React.PureComponent {

  static propTypes = {
    initValue: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    errorText: PropTypes.string.isRequired
  }

  render() {
    return (<TextField
              name={`${this.props.name}.study`}
              type="text"
              error={!!this.props.errorText}
              helperText={this.props.errorText}
              style={{ direction: 'rtl', textAlign: 'right', cursor: 'default',pointerEvents: 'none', userSelect: 'none', }}
              value={this.props.initValue}
              fullWidth
              inputProps={{classes: {root: {fontFamily: 'Assistant Light' }}}}
              FormHelperTextProps={{error: true, style: {font: '13px Assistant Light', textAlign: 'right', width: '500px'}}}
            />
          );
  }
}
