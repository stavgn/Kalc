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
        value: '',
        errorText: '',
      };
  }

  handleGradeEntry(inputSrc, value, errorText = '') {
    this.setState({
      isValid: errorText.length > 0,
      value,
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
                onChange={(inputSrc, value, errorText) =>  this.handleGradeEntry(inputSrc, value, errorText)}
                errorText={this.state.errorText}
                value={this.state.value}
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
