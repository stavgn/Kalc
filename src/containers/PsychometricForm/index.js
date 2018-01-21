import React from 'React';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import GradeInput from '../../components/GradeInput';
import './styles.scss';

class PsychometricForm extends React.Component {
  static propTypes = {
    onValidation: PropTypes.func.isRequired,
    initValue: PropTypes.number
  }

  state = {
    validations: {
      psychometricForm: false
    }
  }

  updateValidation = (inputSrc, isValid) => {
    if(this.state.validations.psychometricForm != isValid) {
      this.props.onValidation('psychometricForm', isValid);
    }

    this.setState({
      validations: {
        psychometricForm: isValid
      }
    });
  }

  render() {
    return (
          <Grid direction="row-reverse" container justify="center" alignItems="center">
            <Grid item>
              <p className="PyscometricP">ציון פסיכומטרי (רב תחומי):</p>
            </Grid>
            <Grid item className="PyscometricGrid">
                <GradeInput
                initValue={this.props.initValue}
                min={200} max={800}
                onValidation={this.updateValidation}
                name="psychometry"
                shouldDisplayErrorText
                />
              </Grid>
          </Grid>
        );
  }
}

const mapStateToProps = (state) => {
  const { grade } = state.userTypedGrades.psychometry;
  if (typeof grade == "number") {
    return {
      initValue: grade
    };
  }
  return {};
};

export default connect(mapStateToProps)(PsychometricForm);
