import React from 'React';
import PropTypes from 'prop-types';
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
          <div className="container">
            <div className="row">
              <div className="col s4 offset-s2">
                <GradeInput
                min={200} max={800}
                onValidation={this.updateValidation}
                name="SAT"
                shouldDisplayErrorText
                />
              </div>
              <div style={{direction: 'rtl'}} className="col s4">
                <p style={styles.p}>ציון פסיכומטרי (רב תחומי):</p>
              </div>
            </div>
          </div>

        );
  }
}
