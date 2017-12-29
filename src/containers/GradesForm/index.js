import React from 'React';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GradeHeadRow from '../../components/GradeHeadRow';
import MandatoryStudiesGradesForm from '../MandatoryStudiesGradesForm';
import ExtendedStudiesForm from '../ExtendedStudiesForm';


export default class GradesForm extends React.PureComponent {
  render() {
    return (
      <div>
        <GradeHeadRow />
        <form>
          <MandatoryStudiesGradesForm />
          <ExtendedStudiesForm />
        </form>
      </div>
    );
  }
}
