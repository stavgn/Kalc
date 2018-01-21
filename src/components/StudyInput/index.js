import React from 'React';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import StudyInputDisabled from '../StudyInputDisabled';
import StudyInputSelector from '../StudyInputSelector';

export default class StudyInput extends React.PureComponent {
  static propTypes = {
    errorText: PropTypes.string.isRequired,
    onValidation: PropTypes.func.isRequired,
    initValue: PropTypes.string,
    disabled: PropTypes.bool    
  }

  render() {
    return this.props.disabled ? <StudyInputDisabled {...this.props} /> : <StudyInputSelector {...this.props} />;
  }
}
