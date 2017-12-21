import React from 'React';
import PropTypes from 'prop-types';
import styles from './styles';

export default class GradeHeadColumn extends React.PureComponent {
  static propTypes = {
    offset: PropTypes.string
  }
  render() {
    return (
        <div>
          <div className={`col s1 center-align ${this.props.offset}`}>
            <p style={styles.p}>ציון</p>
          </div>
          <div className="col s1 center-align">
            <p style={styles.p}>יח&quot;ל</p>
          </div>
          <div className="col s3 right-align">
            <p style={styles.p}>מקצוע</p>
          </div>
        </div>
      );
  }
}
