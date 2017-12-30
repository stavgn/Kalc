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
    const newErrorTexts = this.buildNewErrorTextsObj(inputSrc, errorText);
    this.setState({
      isAllValid: this.isAllValid(newErrorTexts),
      errorTexts: newErrorTexts,
      [inputSrc]: {
        isValid: errorText.length == 0,
        value: inputVal
      }
    });
  }

  buildNewErrorTextsObj(inputSrc, errorText) {
    return {
      ...this.state.errorTexts,
      [inputSrc]: errorText
    };
  }

  isAllValid(ErrorTexts = this.state.errorTexts) {
    return Object.values(ErrorTexts).join('').length == 0;
  }

  generateErrorTextForDisplay(){
    return this.state.isAllValid ? '' : Object.values(this.state.errorTexts).join('. ');
  }

  render() {
    const errorText = this.generateErrorTextForDisplay();
    return (
          <div>
            <div className={`input-field col s1 offset-${this.props.offset}`}>
              <GradeInput onChange={this.handleUserInput} error={!this.state.GradeInput.isValid} value={this.state.GradeInput.value} min={0} max={100}/>
            </div>
            <div className="input-field col s1">
              <NumOfUnitsSelector onChange={this.handleUserInput} error={!this.state.NumOfUnitsSelector.isValid} value={this.state.NumOfUnitsSelector.value}/>
            </div>
            <div className="input-field col s3">
              <StudyInput onChange={this.handleUserInput} errorText={errorText} value={this.state.StudyInput.value} {...(this.props.name && {disabled: true})}/>
            </div>
          </div>
        );
  }
}
