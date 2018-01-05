import React from 'React';
import PropTypes from 'prop-types';
import AutoComplete from 'material-ui/AutoComplete';
import ExtendedStudies from '../../static/data/ExtendedStudies';

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

  validateInput(value, autoComplete) {
    return autoComplete.find((element) => element.match(new RegExp(value, 'g'))) != undefined;
  }

  checkForEnglishChar(value) {
    return value.match(/^[A-z]+$/g);
  }

  render() {
    return (
      <AutoComplete
                name={`${this.props.name}.studyInput`}
                type="text"
                inputStyle={{margin : 0}}
                errorText={this.props.errorText}
                style={{ direction: 'rtl', textAlign: 'right', cursor: 'default' }}
                onNewRequest={(value, autoComplete) => this.handleStudyEntry(value, autoComplete)}
                onUpdateInput={(value, autoComplete) => this.handleStudyEntry(value, autoComplete)}
                searchText={this.state.value}
                dataSource={ExtendedStudies}
                errorStyle={{font: '13px Assistant Light'}}
                hintText="הקלד מקצוע מוגבר"
                fullWidth
              />
            );
  }
}
