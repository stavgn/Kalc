import React from 'React';
import PropTypes from 'prop-types';
import styles from './styles';
import GradesColumn from '../GradesColumn';

export default class GradesRow extends React.PureComponent {
  render() {
    return (
          <div style={styles.row} className="row">
            <GradesColumn />
            <GradesColumn offset="offset-s2"/>
          </div>
        );
  }
}
