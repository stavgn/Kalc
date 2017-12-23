import React from 'React';
import PropTypes from 'prop-types';
import styles from './styles';

export default class UniversityLabel extends React.PureComponent {
  static propTypes = {
    logoURL: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };
  }

  selectUniversity() {
    this.props.handleUniversitySelection(this.props.id);
    this.setState((prevState) =>{
      return {
        isSelected: !prevState.isSelected
      };
    });
  }
  render() {
    return (
        <div style={styles.col} className="col s2">
          <div onClick={()=> this.selectUniversity()} style={styles.labelWrapper} className={this.state.isSelected ? "card blue-grey lighten-5" : "card"}>
            <img style={styles.img} className="responsive-img" src={this.props.logoURL} />
          </div>
        </div>
      );
  }
}
