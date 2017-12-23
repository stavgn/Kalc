import React from 'React';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import UUID from 'uuid/v4';

export default class GradeInput extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string,
    error: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
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
      nextState = {shouldDispalyError: true, errorText: nextProps.error  ? ' ' : '' };
    }
    else {
      nextState = {errorText: nextProps.error  ? ' ' : '' };
    }
    this.setState(nextState);
  }

  handleGradeEntry(value){
    if(this.validateInput(value)) {
       this.props.onChange('GradeInput', value == '' ? value : parseInt(value).toString());
     }
  }

  validateInput(input) {
    return (input >= 0 && input <= 100) || input == '';
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
            inputStyle={{ textAlign: 'center' }}
            type="number"
            min="0" max="100"
            value={this.props.value}
            errorText={this.state.shouldDispalyError && this.state.errorText}
            onChange={(e) => this.handleGradeEntry(e.target.value)}
            onKeyPress={(e) => this.filterKeyPress(e)}
            required
            />);
  }
}
