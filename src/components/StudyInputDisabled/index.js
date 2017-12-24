import React from 'React';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import UUID from 'uuid/v4';

export default class StudyInputDisabled extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    errorText: PropTypes.string.isRequired
  }

  render() {
    return (<TextField
              fullWidth
              id={UUID()}
              type="text"
              inputStyle={{margin : 0}}
              errorText={this.props.errorText}
              style={{ direction: 'rtl', textAlign: 'right', cursor: 'default' }}
              disabled={this.props.disabled}
              value={this.props.value}
              errorStyle={{font: '13px Assistant Light'}}
            />
          );
  }
}
