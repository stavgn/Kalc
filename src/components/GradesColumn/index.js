import React from 'React';
import PropTypes from 'prop-types';
import GradeInput from '../GradeInput';
import NumOfUnitsSelector from '../NumOfUnitsSelector';
import StudyInput from '../StudyInput';


export default class GradesColumn extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    offset: PropTypes.string,
    name: PropTypes.string,
    minNumOfUnits: PropTypes.number,
    onValidation: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      isAllValid: false,
        errorTexts: {},
        validations: {
          gradeInput: false,
          numOfUnitsSelector: props.minNumOfUnits && true,
          studyInput: props.name && true
        }
    };
  }

  updateValidation = (inputSrc, isValid, {errorText = ''} = {}) => {
    const validations =  this.buildNewValidationsObj(inputSrc, isValid),
          isAllValid = this.isAllValid(validations);
          
    if(this.state.isAllValid != isAllValid) {
      this.props.onValidation(this.props.id, isAllValid);
    }

    this.setState({
      isAllValid,
      errorTexts: this.buildNewErrorTextsObj(inputSrc, errorText),
      validations
    });
  }

  buildNewValidationsObj(inputSrc, isValid) {
    return {
      ...this.state.validations,
      [inputSrc]: isValid
     };
  }

  buildNewErrorTextsObj(inputSrc, errorText) {
    return {
      ...this.state.errorTexts,
      [inputSrc]: errorText
    };
  }

  isAllValid(validations = this.state.validations) {
    return Object.values(validations).reduce((acc, curr) => acc && curr, true);
  }

  generateErrorTextForDisplay(){
    return this.isAllValid() ? '' : Object.values(this.state.errorTexts).filter((element) => element != '').join('. ');
  }

  render() {
    const errorText = this.generateErrorTextForDisplay();
    return (
          <div>
            <div className={`input-field col s1 offset-${this.props.offset}`}>
              <GradeInput name={this.props.id} onValidation={this.updateValidation} min={0} max={100}/>
            </div>
            <div className="input-field col s1">
              <NumOfUnitsSelector name={this.props.id} onValidation={this.updateValidation} {...(this.props.minNumOfUnits && {initValue: this.props.minNumOfUnits})}/>
            </div>
            <div className="input-field col s3">
              <StudyInput name={this.props.id} onValidation={this.updateValidation} errorText={errorText}  {...(this.props.name && {disabled: true, initValue: this.props.name})}/>
            </div>
          </div>
        );
  }
}
