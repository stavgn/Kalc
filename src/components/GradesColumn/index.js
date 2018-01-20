import React from 'React';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import NumOfUnitsSelector from '../NumOfUnitsSelector';
import GradeInput from '../GradeInput';
import StudyInput from '../StudyInput';


export default class GradesColumn extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    onValidation: PropTypes.func.isRequired,
    minNumOfUnits: PropTypes.number,
    study: PropTypes.string,
    numOfUnits: PropTypes.number,
    grade: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }

  constructor(props) {
    super(props);
  }

  state = {
    isAllValid: (this.props.grade && this.props.study && this.props.numOfUnits) || false,
      errorTexts: {},
      validations: {
        gradeInput: false,
        numOfUnitsSelector: this.props.numOfUnits && true,
        studyInput: this.props.study && true
      }
  };

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
    return this.state.isAllValid ? '' : Object.values(this.state.errorTexts).filter((element) => element != '').join('. ');
  }

  render() {
    const errorText = this.generateErrorTextForDisplay();
    return (
          <Grid style={{marginBottom: errorText ? '5px': '30px'}} item xs={12} md={6}>
            <Grid container justify="center">
              <Grid item xs={3} sm={2}>
                <GradeInput name={this.props.id} onValidation={this.updateValidation} min={0} max={100} {...(this.props.grade && {initValue: this.props.grade})}/>
              </Grid>
              <Grid item xs={3} sm={2}>
                <NumOfUnitsSelector name={this.props.id} onValidation={this.updateValidation} {...(this.props.numOfUnits && {initValue: this.props.numOfUnits})} {...(this.props.minNumOfUnits && {minNumOfUnits: this.props.minNumOfUnits})}/>
              </Grid>
              <Grid item xs={5} sm={4}>
                <StudyInput name={this.props.id} onValidation={this.updateValidation} errorText={errorText}  {...(this.props.study && {disabled: true, initValue: this.props.study})}/>
              </Grid>
            </Grid>
          </Grid>
        );
  }
}
