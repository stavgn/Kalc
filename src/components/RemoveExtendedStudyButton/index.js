import React from 'React';
import PropTypes from 'prop-types';
import styles from './styles';

export default class AddExtendedStudyButton extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }
  render() {
    return (
          <a onClick={this.props.onClick} style={styles.icon} className="btn-floating btn-meduim waves-effect waves-light cyan">
            <i style={styles.remove} className="material-icons dp48">remove</i>
          </a>

    );
  }
}
