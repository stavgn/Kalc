import React from 'React';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GradesRow from '../../components/GradesRow';
import GradesColumn from '../../components/GradesColumn';
import { getMandotryStudiesFromState } from '../../reducers/userTypedGradesReducer'

export class MandatoryStudiesGradesForm extends React.Component {
  static propTypes = {
    mandatoryStudies: PropTypes.object.isRequired
  }
  
  render() {
    const { mandatoryStudies } = this.props;
    return  Object.keys(mandatoryStudies).map((curr, index, arr) => {
      const row = (
        <GradesRow key={curr}>
          <GradesColumn {...mandatoryStudies[curr]} {...(!arr[index + 1] && {offset: 's7'})}/>
          {arr[index + 1] && <GradesColumn {...mandatoryStudies[arr[index + 1]]} offset="s2"/>}
        </GradesRow>
      );
      delete arr[index + 1];
      return row;
    });
  }
}

const mapStateToProps = (state) => {
  return {
    mandatoryStudies: getMandotryStudiesFromState(state.userTypedGrades)
  };
};

const mapDisptachToProps = () => ({});

export default connect(mapStateToProps, mapDisptachToProps)(MandatoryStudiesGradesForm);
