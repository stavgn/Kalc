import React from 'React';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import StudyInputDisabled from '../StudyInputDisabled';
import StudyInputSelector from '../StudyInputSelector';

export default class StudyInput extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string,
    disabled: PropTypes.bool,
    errorText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  render() {
    return this.props.disabled ? <StudyInputDisabled {...this.props} /> : <StudyInputSelector {...this.props} />;
  }
}
