import React from 'React';
import PropTypes from 'prop-types';
import GradeInput from '../GradeInput';
import NumOfUnitsSelector from '../NumOfUnitsSelector';
import StudyInput from '../StudyInput';


export default class GradesColumn extends React.PureComponent {
  static propTypes = {
    offset: PropTypes.string
  }

  render() {
    return (
          <div>
            <div className={`input-field col s1 ${this.props.offset}`}>
              <GradeInput />
            </div>
            <div className="input-field col s1">
              <NumOfUnitsSelector />
            </div>
            <div className="input-field col s3">
              <StudyInput />
            </div>
          </div>
        );
  }
}
