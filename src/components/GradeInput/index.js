import React from 'React';

export default class GradeInput extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      gradeValue: ''
    };
  }
  handleGradeEntry(e){
    const { target: { value }} = e;
    if (value >=0 && value <= 100) {
      this.setState({gradeValue: value});
    }
  }
  render() {
    return <input style={{ textAlign: 'center' }} type="number" min="0" max="100" value={this.state.gradeValue} onChange={(e) => this.handleGradeEntry(e)} required/>;
  }
}
