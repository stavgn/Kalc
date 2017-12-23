import React from 'React';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import UUID from 'uuid/v4';

export default class StudyInput extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string,
    disabled: PropTypes.bool,
    errorText: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      studyValue: props.value || ''
    };
  }

  handleStudyEntry(value){
    this.setState({studyValue: value});
  }

  render() {
    return (<TextField
              id={UUID()}
              type="text"
              inputStyle={{margin : 0}}
              errorText={this.props.errorText}
              style={{ direction: 'rtl', textAlign: 'right', cursor: 'default' }}
              onChange={(e, index, value) => this.handleStudyEntry(value)}
              disabled={this.props.disabled}
              value={this.state.studyValue}
              errorStyle={{font: '13px Assistant Light'}}
            />
          );
  }
}
