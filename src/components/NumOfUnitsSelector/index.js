import React from 'React';
import PropTypes from 'prop-types';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

export default class NumOfUnitsSelector extends React.PureComponent {
  static propTypes = {
    initValue: PropTypes.number,
    onValidation: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      isValid: props.initValue ? true : false,
      minNumOfUnits: props.initValue,
      value: props.initValue || ''
    };
  }

  handleUnitsEntry(value) {
    const isValid = this.validateInput(value);
    if (this.state.isValid != isValid) {
        this.props.onValidation('numOfUnitsSelector', isValid, {errorText: isValid ? '' : `מינמום ${this.state.minNumOfUnits} יח"ל נדרשות במקצוע`});
    }
    const intValue = parseInt(value);
    this.setState({ value: intValue, isValid });
  }

  validateInput(value) {
    if(this.state.minNumOfUnits)
      return value >= this.state.minNumOfUnits;
    return true;
  }

  render() {
    return (
      <div>
        <Select
           style={{textAlign: "center",}}
           fullWidth
           onChange={(e) => this.handleUnitsEntry(e.target.value)}
           error={this.state.value != '' && !this.state.isValid}
           value={this.state.value}
           required>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
        <input required name={`${this.props.name}.numOfUnits`} type="hidden" value={this.state.value} />
      </div>
    );
  }
}
