import React from 'React';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submitGradesForm } from '../../actions/userTypedGradesActions';
import GradeHeadRow from '../../components/GradeHeadRow';
import MandatoryStudiesGradesForm from '../MandatoryStudiesGradesForm';
import ExtendedStudiesForm from '../../components/ExtendedStudiesForm';
import PsychometricForm from '../../components/PsychometricForm';
import  './styles.scss';

class GradesForm extends React.PureComponent {
  static propTypes = {
    submitGradesForm: PropTypes.func.isRequired
  }

  state = {
    isValid: {
      MandatoryStudiesGradesForm: false,
      ExtendedStudiesForm: false,
      PsychometricForm: false
    }
  }

  updateValidation = (inputSrc, value) => {
    this.setState((prevState) => ({
      isValid : {
        ...prevState.isValid,
        [inputSrc]: value
      }
    }));
  }

  isAllValid() {
    const { MandatoryStudiesGradesForm, ExtendedStudiesForm, PsychometricForm } = this.state.isValid;
    return MandatoryStudiesGradesForm && ExtendedStudiesForm && PsychometricForm;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.isAllValid) {
      const gradesFormData = new FormData(e.target);
      let gradesFormDataObj = {};
      gradesFormData.forEach(function(value, key){
          const [studyId, paramater] = key.split('.');
          if (!gradesFormDataObj[studyId])
            gradesFormDataObj[studyId] = {};
          if(paramater != 'study')
            gradesFormDataObj[studyId][paramater] = Number(value);
          else
            gradesFormDataObj[studyId][paramater] = value;
      });
      this.props.submitGradesForm(gradesFormDataObj);
    }
    else {
      // TODO implement alert to user.
    }
  }

  render() {
    return (
        <form className="gradesForm" onSubmit={this.handleSubmit}>
          <Grid item>
            <Grid container justify="center">
              <Grid item lg={8} md={12} xs={12}>
                <Paper className="gradesPaper">
                  <GradeHeadRow />
                  <MandatoryStudiesGradesForm onValidation={this.updateValidation} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justify="center">
              <Grid item lg={8} md={12} xs={12}>
                <Paper className="gradesPaper">
                  <ExtendedStudiesForm onValidation={this.updateValidation} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justify="center" alignItems="center">
              <Grid item lg={8} md={12} xs={12}>
                <Paper className="gradesPaper">
                  <PsychometricForm onValidation={this.updateValidation} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justify="center">
              <Grid item lg={8} md={12} xs={12}>
                  <Button raised type="submit">SUBMIT</Button>
              </Grid>
            </Grid>
          </Grid>
        </form>

    );
  }
}

/**

 */

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => {
  return {
    submitGradesForm: bindActionCreators(submitGradesForm, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GradesForm);
