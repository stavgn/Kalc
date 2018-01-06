import React from 'React';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
    this.setState({ value, isValid });
  }

  validateInput(value) {
    if(this.state.minNumOfUnits)
      return value >= this.state.minNumOfUnits;
    return true;
  }

  render() {
    return (
      <div>
        <SelectField
           style={{textAlign: "center"}}
           fullWidth
           onChange={(e, index, val) => this.handleUnitsEntry(val)}
           errorText={this.state.value != '' && (this.state.isValid ? '' : ' ')}
           value={this.state.value}
           required>
          <MenuItem value={1} primaryText="1" />
          <MenuItem value={2} primaryText="2" />
          <MenuItem value={3} primaryText="3" />
          <MenuItem value={4} primaryText="4" />
          <MenuItem value={5} primaryText="5" />
        </SelectField>
        <input required name={`${this.props.name}.numOfUnits`} type="hidden" value={parseInt(this.state.value)} />
      </div>
    );
  }
}
