import React from 'React';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import styles from './styles';
import GradeInput from '../GradeInput';

export default class PsychometricForm extends React.PureComponent {
  static propTypes = {
    onValidation: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
      this.state = {
        validations: {
          psychometricForm: false
        }
      };
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
            <p style={styles.p}>ציון פסיכומטרי (רב תחומי):</p>
        </Grid>
            <Grid item style={{width: '150px'}}>
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
