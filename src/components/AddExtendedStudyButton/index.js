import React from 'React';
import PropTypes from 'prop-types';

export default class AddExtendedStudyButton extends React.Component {
  static propTypes = {
    offset: PropTypes.string
  }
  render() {
    return (
      <div className={` col s5 offset-${this.props.offset}`}>
      <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>

      </div>
    );
  }
}
