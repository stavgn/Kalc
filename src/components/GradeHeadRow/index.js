import React from 'React';
import PropTypes from 'prop-types';
import styles from './styles';
import GradeHeadColumn from '../GradeHeadColumn';

export default class GradeHeadRow extends React.PureComponent {
  render() {
    return (
        <div style={styles.headRow} className="row">
          <GradeHeadColumn />
          <GradeHeadColumn offset="offset-s2"/>
        </div>
      );
  }
}
