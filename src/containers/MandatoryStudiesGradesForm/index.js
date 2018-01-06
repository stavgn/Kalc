import React from 'React';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GradesRow from '../../components/GradesRow';
import GradesColumn from '../../components/GradesColumn';
import { getMandotryStudiesFromState } from '../../reducers/userTypedGradesReducer';

class MandatoryStudiesGradesForm extends React.Component {
  static propTypes = {
    mandatoryStudies: PropTypes.object.isRequired,
    onValidation: PropTypes.func.isRequired
  }

  state = {
    isAllValid: false,
    validations: Object.keys(this.props.mandatoryStudies).reduce((acc,StudyId) => {
      acc[StudyId] = false;
      return acc;
    }, {})
  }

  updateValidation = (StudyId, isValid) => {
    const validations = this.buildNewValidationsObj(StudyId, isValid),
          isAllValid = this.isAllValid(validations);

    if(this.state.isAllValid != isAllValid) {
       this.props.onValidation('MandatoryStudiesGradesForm', isAllValid);
    }

    this.setState({
      isAllValid,
      validations
    });
  }

  buildNewValidationsObj(StudyId, isValid) {
    return {
      ...this.state.validations,
      [StudyId]: isValid
    };
  }

  isAllValid(validations = this.state.validations) {
    return Object.values(validations).reduce((acc, curr) => acc && curr, true);
  }
  render() {
    const { mandatoryStudies } = this.props;
    return  Object.keys(mandatoryStudies).map((curr, index, arr) => {
      const row = (
        <GradesRow key={curr}>
          <GradesColumn id={curr} onValidation={this.updateValidation} {...mandatoryStudies[curr]}  {...(!arr[index + 1] && {offset: 's7'})}/>
          {arr[index + 1] && <GradesColumn id={arr[index + 1]} onValidation={this.updateValidation} {...mandatoryStudies[arr[index + 1]]} offset="s2"/>}
        </GradesRow>
      );
      delete arr[index + 1];
      return row;
    });
  }
}

const mapStateToProps = (state) => {
  return {
    mandatoryStudies: getMandotryStudiesFromState(state.userTypedGrades.bagrut)
  };
};

export default connect(mapStateToProps)(MandatoryStudiesGradesForm);
