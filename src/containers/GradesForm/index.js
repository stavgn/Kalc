import React from 'React';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { submitGradesForm } from '../../actions/userTypedGradesActions';
import GradeHeadRow from '../../components/GradeHeadRow';
import MandatoryStudiesGradesForm from '../MandatoryStudiesGradesForm';
import ExtendedStudiesForm from '../../components/ExtendedStudiesForm';
import PsychometricForm from '../../components/PsychometricForm';
import styles from './styles';

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <div style={{padding: '15px'}} className="card">
            <GradeHeadRow />
            <MandatoryStudiesGradesForm onValidation={this.updateValidation} />
          </div>
          <div style={styles.card} className="card">
            <ExtendedStudiesForm onValidation={this.updateValidation} />
          </div>
          <div style={styles.card} className="card">
            <PsychometricForm onValidation={this.updateValidation} />
          </div>
          <div className="row">
            <RaisedButton type="submit" label="SUBMIT"/>
          </div>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => {
  return {
    submitGradesForm: bindActionCreators(submitGradesForm, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GradesForm);
