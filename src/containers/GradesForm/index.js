import React from 'React';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GradeHeadRow from '../../components/GradeHeadRow';
import MandatoryStudiesGradesForm from '../MandatoryStudiesGradesForm';
import ExtendedStudiesForm from '../../components/ExtendedStudiesForm';
import PsychometricForm from '../../components/PsychometricForm';
import styles from './styles';


class GradesForm extends React.PureComponent {
  constructor(props) {
    super(props);
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

    console.log(inputSrc, value);
  }

  isAllValid() {
    const { MandatoryStudiesGradesForm, ExtendedStudiesForm, PsychometricForm } = this.state.isValid;
    return MandatoryStudiesGradesForm && ExtendedStudiesForm && PsychometricForm;
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
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
            <input type="submit" value="SUBMIT" />
          </div>
        </form>
      </div>
    );
  }
}
//

const mapStateToProps = (state) => (state);
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(GradesForm);
