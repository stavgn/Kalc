import React from 'React';
import PropTypes from 'prop-types';

export default class StudyInput extends React.PureComponent {
  static propTypes = {
    defaultStudyVal: PropTypes.string,
    disabled: PropTypes.bool
  }

  constructor(props) {
    super(props);
    this.state = {
      studyValue: props.defaultStudyVal || ''
    };
  }

  handleStudyEntry(e){
    const { target: { value }} = e;
    this.setState({studyValue: value});
  }

  render() {
    return <input style={{ direction: 'rtl', textAlign: 'right' }} onChange={(e) => this.handleStudyEntry(e)} type="text" disabled={this.props.disabled} value={this.state.studyValue} required/>;
  }
}
