import React from 'React';
import PropTypes from 'prop-types';

export default class NumOfUnitsSelector extends React.PureComponent {
  static propTypes = {
    defaultUnitCount: PropTypes.number
  }

  constructor(props) {
    super(props);
    this.state = {
      unitsValue: props.defaultUnitCount || 1
    };
  }

  handleUnitsEntry(e){
    const { target: { value }} = e;
    this.setState({unitsValue: value});
  }

  render() {
    return (
      <div>
        <select onChange={(e) => this.handleUnitsEntry(e)} className="browser-default" value={this.state.unitsValue} required>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    );
  }
}
