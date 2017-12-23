import React from 'React';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class NumOfUnitsSelector extends React.PureComponent {
  static propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
    this.initialUnitsValue = props.value;
    this.state = {
      errorText: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errorText: nextProps.error  ? ' ' : '' });
  }

  handleUnitsEntry(value) {
    this.props.onChange('NumOfUnitsSelector', value, this.validateInput(value));
  }

  validateInput(value) {
    if(value < this.initialUnitsValue) {
    return `מינמום ${this.initialUnitsValue} יח"ל נדרשות במקצוע`;
    }
  }

  render() {
    return (
      <SelectField
         style={{textAlign: "center"}}
         fullWidth
         onChange={(e, index, val) => this.handleUnitsEntry(val)}
         value={this.props.value}
         errorText={this.state.errorText}
         required>
        <MenuItem value={1} primaryText="1" />
        <MenuItem value={2} primaryText="2" />
        <MenuItem value={3} primaryText="3" />
        <MenuItem value={4} primaryText="4" />
        <MenuItem value={5} primaryText="5" />
      </SelectField>
    );
  }
}
