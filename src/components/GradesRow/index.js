import React from 'React';
import PropTypes from 'prop-types';
import styles from './styles';

export default class GradesRow extends React.PureComponent {
  static propTypes = {
     children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array,
    ]).isRequired
  }

  render() {
    return (
          <div style={styles.row} className="row">
            {this.props.children}
          </div>
        );
  }
}
