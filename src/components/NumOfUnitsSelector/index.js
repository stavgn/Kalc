import React from 'React';
import PropTypes from 'prop-types';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

export default class NumOfUnitsSelector extends React.PureComponent {
  static propTypes = {
    initValue: PropTypes.number,
    onValidation: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    minNumOfUnits: PropTypes.number
  }

  constructor(props) {
    super(props);
  }

  state = {
    isValid: !!this.props.initValue,
    value: this.props.initValue || ''
  };

  handleUnitsEntry = ({target: { value }}) => {
    const isValid = this.validateInput(value);

    if (this.state.isValid != isValid) {
        this.props.onValidation('numOfUnitsSelector', isValid, {errorText: isValid ? '' : `מינמום ${this.props.minNumOfUnits} יח"ל נדרשות במקצוע`});
    }

    this.setState({ value, isValid });
  }

  validateInput(value) {
    if(this.props.minNumOfUnits)
      return value >= this.props.minNumOfUnits;
    return true;
  }

  render() {
    return (
      <div>
        <Select
           style={{textAlign: "center"}}
           fullWidth
           onChange={this.handleUnitsEntry}
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
        <input required name={`${this.props.name}.minNumOfUnits`} type="hidden" value={this.props.minNumOfUnits} />
      </div>
    );
  }
}
