import React from 'React';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GradeHeadRow from '../../components/GradeHeadRow';
import MandatoryStudiesGradesForm from '../MandatoryStudiesGradesForm';
import ExtendedStudiesForm from '../../components/ExtendedStudiesForm';
import PsychometricForm from '../../components/PsychometricForm';
import styles from './styles';


export default class GradesForm extends React.PureComponent {
  render() {
    return (
      <div>
        <form>
          <div style={{padding: '15px'}} className="card">
            <GradeHeadRow />
            <MandatoryStudiesGradesForm />
          </div>
          <div style={styles.card} className="card">
            <ExtendedStudiesForm />
          </div>
          <div style={styles.card} className="card">
            <PsychometricForm />
          </div>
        </form>
      </div>
    );
  }
}
