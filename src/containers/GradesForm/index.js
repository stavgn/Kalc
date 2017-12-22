import React from 'React';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GradeHeadRow from '../../components/GradeHeadRow';
import MandatoryStudiesGradesForm from '../MandatoryStudiesGradesForm';
import GradesRow from '../../components/GradesRow';
import GradesColumn from '../../components/GradesColumn';


export default class GradesForm extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <GradeHeadRow />
        <form>
          <MandatoryStudiesGradesForm />
          <GradesRow>
            <GradesColumn />
            <GradesColumn offset="s2"/>
          </GradesRow>
        </form>
      </div>);
  }
}
