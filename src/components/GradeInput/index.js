import React from 'React';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export default class GradeInput extends React.PureComponent {
  static propTypes = {
    onValidation: PropTypes.func.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    shouldDisplayErrorText: PropTypes.bool,
    initValue: PropTypes.number
  }

  constructor(props) {
    super(props);
  }

  state = {
    value: this.props.initValue || '',
    isValid: this.props.initValue
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.initValue != this.state.value)
      this.setState({value: nextProps.initValue, isValid: true});
  }

  handleGradeEntry(value){
    const isValid = this.validateInput(value);
    if (this.state.isValid != isValid) {
        this.props.onValidation('gradeInput',  isValid, {errorText: isValid ?  '' : this.generateErrorText()});
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

  generateErrorText() {
    return `על הציון להיות בין ${this.props.min} ל-${this.props.max}`;
  }

  render() {
    const isError = this.state.value != '' && !this.state.isValid;
    return (<TextField
            name={`${this.props.name}.grade`}
            type="number"
            inputProps={{max:this.props.max, min: this.props.min , style: { textAlign: 'center', margin : 0 }}}
            value={this.state.value}
            helperText={isError && this.props.shouldDisplayErrorText && this.generateErrorText()}
            error={isError}
            FormHelperTextProps={{error: true, style: {font: '13px Assistant Light', textAlign: 'right'}}}
            onChange={(e) => this.handleGradeEntry(e.target.value)}
            onKeyPress={(e) => this.filterKeyPress(e)}
            fullWidth
            required
            />);
  }
}
