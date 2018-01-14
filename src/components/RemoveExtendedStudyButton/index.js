import React from 'React';
import Icon from 'material-ui/Icon';
import PropTypes from 'prop-types';
import './styles.scss';

export default class AddExtendedStudyButton extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }
  render() {
    return (
          <a onClick={this.props.onClick} className="RemoveExtendedStudyButtonIcon">
            <Icon color="error" className="RemoveExtendedStudyButton">remove_circle</Icon>
          </a>

    );
  }
}
