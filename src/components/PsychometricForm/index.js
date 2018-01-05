import React from 'React';
import PropTypes from 'prop-types';
import styles from './styles';
import GradeInput from '../GradeInput';

export default class PsychometricForm extends React.PureComponent {
  static propTypes = {

  }

  constructor(props) {
    super(props);
      this.state = {
        isValid: false,
        errorText: '',
      };
  }

  updateValidation = (inputSrc, value, {errorText = ''} = {}) => {
    this.setState({
      isValid: errorText.length > 0,
      errorText: errorText
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
                errorText={this.state.errorText}
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
