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
              inputStyle={{margin : 0}}
              errorText={this.props.errorText}
              style={{ direction: 'rtl', textAlign: 'right', cursor: 'default',pointerEvents: 'none', userSelect: 'none'}}
              value={this.props.initValue}
              errorStyle={{font: '13px Assistant Light'}}
              fullWidth
            />
          );
  }
}
