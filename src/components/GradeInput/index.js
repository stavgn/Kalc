import React from 'React';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export default class GradeInput extends React.Component {
  static propTypes = {
    onValidation: PropTypes.func.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    shouldDisplayErrorText: PropTypes.bool
  }

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isValid: false
    };
  }

  handleGradeEntry(value){
    const isValid = this.validateInput(value);
    if (this.state.isValid != isValid) {
        this.props.onValidation('gradeInput',  isValid, {errorText: isValid ?  '' :  `על הציון להיות בין ${this.props.min} ל-${this.props.max}`});
    }
    this.setState({ isValid, value });
  }

  validateInput(input) {
    return (input >= this.props.min && input <= this.props.max) || input == '';
  }

  filterKeyPress(e) {
    if (e.which != 8 && e.which != 0 && e.which < 48 || e.which > 57) {
      e.preventDefault();
    }
  }

  render() {
    return (<TextField
            name={`${this.props.name}.grade`}
            inputStyle={{ textAlign: 'center', margin : 0 }}
            type="number"
            min={this.props.min} max={this.props.max}
            value={this.state.value}
            errorText={this.state.value != '' && (this.state.isValid ? '' : ' ')}
            onChange={(e) => this.handleGradeEntry(e.target.value)}
            onKeyPress={(e) => this.filterKeyPress(e)}
            errorStyle={{font: '13px Assistant Light', textAlign: 'right'}}
            fullWidth
            required
            />);
  }
}
