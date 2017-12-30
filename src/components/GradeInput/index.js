import React from 'React';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import UUID from 'uuid/v4';

export default class GradeInput extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string,
    error: PropTypes.bool,
    errorText: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      shouldDispalyError: false,
      errorText: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    let nextState = {};
    if(!this.state.shouldDisplayError && nextProps.value != ''){
      nextState = {shouldDispalyError: true, errorText: nextProps.error  ? ' ' : '' || nextProps.errorText };
    }
    else {
      nextState = {errorText: nextProps.error  ? ' ' : '' };
    }
    this.setState(nextState);
  }

  handleGradeEntry(value){
   this.props.onChange('GradeInput', value == '' ? value : parseInt(value).toString(),
   this.validateInput(value) ?
   '' :
   `על הציון להיות בין ${this.props.min} ל-${this.props.max}`);

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
            id={UUID()}
            fullWidth
            inputStyle={{ textAlign: 'center', margin : 0}}
            type="number"
            min={this.props.min} max={this.props.max}
            value={this.props.value}
            errorText={this.state.shouldDispalyError && this.state.errorText}
            onChange={(e) => this.handleGradeEntry(e.target.value)}
            onKeyPress={(e) => this.filterKeyPress(e)}
            errorStyle={{font: '13px Assistant Light', textAlign: 'right'}}            
            required
            />);
  }
}
