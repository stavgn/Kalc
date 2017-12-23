import React from 'React';
import PropTypes from 'prop-types';
import GradeInput from '../GradeInput';
import NumOfUnitsSelector from '../NumOfUnitsSelector';
import StudyInput from '../StudyInput';


export default class GradesColumn extends React.PureComponent {
  static propTypes = {
    offset: PropTypes.string,
    name: PropTypes.string,
    minNumOfUnits: PropTypes.number
  }

  constructor(props) {
    super(props);
    this.state = {
        isAllValid: false,
        errorTexts: {},
        GradeInput: {
          isValid: false,
          value: ''
        },
        NumOfUnitsSelector: {
          isValid: true,
          value: props.minNumOfUnits
        },
        StudyInput: {
          isValid: props.name && true,
          value: props.name || ''
        }
    };
  }

  handleUserInput = (inputSrc, inputVal, errorText = '') => {
    const newErrorTexts = {
      ...this.state.errorTexts,
      [inputSrc]: errorText
    };
    this.setState({
      isAllValid: Object.values(newErrorTexts).join('').length == 0,
      errorTexts: newErrorTexts,
      [inputSrc]: {
        isValid: errorText.length == 0,
        value: inputVal
      }
    });
  }

  render() {
    const errorText = this.state.isAllValid ? '' : Object.values(this.state.errorTexts).join('. ');
    return (
          <div>
            <div className={`input-field col s1 offset-${this.props.offset}`}>
              <GradeInput onChange={this.handleUserInput} error={!this.state.GradeInput.isValid} value={this.state.GradeInput.value}/>
            </div>
            <div className="input-field col s1">
              <NumOfUnitsSelector onChange={this.handleUserInput} error={!this.state.NumOfUnitsSelector.isValid} value={this.state.NumOfUnitsSelector.value}/>
            </div>
            <div className="input-field col s3">
              <StudyInput onChange={this.handleUserInput} errorText={errorText} value={this.state.StudyInput.value} disabled={this.props.name && true}/>
            </div>
          </div>
        );
  }
}
