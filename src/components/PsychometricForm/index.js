import React from 'React';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import GradeInput from '../GradeInput';
import './styles.scss';

export default class PsychometricForm extends React.PureComponent {
  static propTypes = {
    onValidation: PropTypes.func.isRequired
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
                min={200} max={800}
                onValidation={this.updateValidation}
                name="SAT"
                shouldDisplayErrorText
                />
              </Grid>
          </Grid>

        );
  }
}
