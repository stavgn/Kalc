import React from 'React';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toastWithButton } from '../../toastr';
import { getStateFromLocalStorage } from '../../store/persistState';
import { submitGradesForm, loadPersistedState} from '../../actions/userTypedGradesActions';
import GradeHeadRow from '../../components/GradeHeadRow';
import MandatoryStudiesGradesForm from '../MandatoryStudiesGradesForm';
import ExtendedStudiesForm from '../ExtendedStudiesForm';
import PsychometricForm from '../PsychometricForm';
import  './styles.scss';

class GradesForm extends React.PureComponent {
  static propTypes = {
    submitGradesForm: PropTypes.func.isRequired,
    loadPersistedState: PropTypes.func.isRequired
  }

  state = {
    isValid: {
      MandatoryStudiesGradesForm: false,
      ExtendedStudiesForm: false,
      PsychometricForm: false
    }
  }

  componentDidMount() {
    const savedGrades = getStateFromLocalStorage();
    if(savedGrades) {
      toastWithButton('info', {
        text: 'הי! שמנו לב שבעבר הזנת  את ציונך למחשבון...',
        buttonText: 'טען ציונים מחדש',
        onButtonClick: () => this.props.loadPersistedState(savedGrades)
      });
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
    submitGradesForm: bindActionCreators(submitGradesForm, dispatch),
    loadPersistedState:  bindActionCreators(loadPersistedState, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GradesForm);
