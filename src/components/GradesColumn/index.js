import React from 'React';
import PropTypes from 'prop-types';
import GradeInput from '../GradeInput';
import NumOfUnitsSelector from '../NumOfUnitsSelector';
import StudyInput from '../StudyInput';


export default class GradesColumn extends React.PureComponent {
  static propTypes = {
    offset: PropTypes.string,
    name: PropTypes.string,
    numOfUnits: PropTypes.number
  }

  render() {
    return (
          <div>
            <div className={`input-field col s1 offset-${this.props.offset}`}>
              <GradeInput />
            </div>
            <div className="input-field col s1">
              <NumOfUnitsSelector defaultUnitCount={this.props.numOfUnits}/>
            </div>
            <div className="input-field col s3">
              <StudyInput defaultStudyVal={this.props.name} disabled={this.props.name && true}/>
            </div>
          </div>
        );
  }
}
