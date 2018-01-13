import React from 'React';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import ExtendedStudies from '../../static/data/ExtendedStudies';
import Auto from '../AutoComplete';


export default class StudyInput extends React.Component {
  static propTypes = {
    onValidation: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    errorText: PropTypes.string.isRequired
  }

  state = {
    isValid: false,
    value: ''
  }

  handleStudyEntry(value, autoComplete){
    if (typeof autoComplete == 'object' ) {
      if(this.checkForEnglishChar(value)) {
        this.props.onValidation('studyInput', false, {errorText:   'שנה שפה לעברית'});
      }
      else {
        const isValid = this.validateInput(value, autoComplete);
        if(this.state.isValid != isValid) {
          this.props.onValidation('studyInput',(value != '' && isValid));
        }
        if(isValid) {
          this.setState({
          isValid,
          value
        });
      }
    }
    }
  }



  checkForEnglishChar(value) {
    return value.match(/^[A-z]+$/g);
  }

  render() {
    return (<Auto />);
  }
}

      <TextField
      onNewRequest={(value, autoComplete) => this.handleStudyEntry(value, autoComplete)}
      onUpdateInput={(value, autoComplete) => this.handleStudyEntry(value, autoComplete)}







               />
