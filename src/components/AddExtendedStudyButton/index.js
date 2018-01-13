import React from 'React';
import Icon from 'material-ui/Icon';
import PropTypes from 'prop-types';
import styles from './styles';

export default class AddExtendedStudyButton extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }
  render() {
    return (
          <a onClick={this.props.onClick} style={styles.icon}>
            <Icon color="primary" style={{ fontSize: 46 }}>add_circle</Icon>
          </a>

    );
  }
}
