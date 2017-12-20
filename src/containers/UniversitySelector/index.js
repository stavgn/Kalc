import React from 'React';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUniversity } from '../../actions/universitiesActions';
import UniversityLabel from '../../components/UniversityLabel/';
import styles from './styles';

class UniversitySelector extends React.PureComponent {
  static propTypes = {
    universities: PropTypes.array.isRequired,
    selectUniversity: PropTypes.func.isRequired
  }

  static UniversitiesLogoList = {
      'Technion':  '../../static/images/TechnionLogo.png',
      'BGU University': '../../static/images/BGULogo.png',
      'The Hebrew University': '../../static/images/HEBLogo.png',
      'Tel-Aviv University': '../../static/images/TLVLogo.png'
    }

  constructor(props) {
    super(props);
    this.selected = [];
  }

  handleUniversitySelection(id) {
    this.props.selectUniversity(id);
  }

  render() {
    return (
      <div style={styles} className="row center-align">
      <div className="col s2"/>
      {
        this.props.universities.map((curr) => {
          return <UniversityLabel key={curr.id} handleUniversitySelection={(id) => this.handleUniversitySelection(id)} {...curr} />;
        })
      }
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    universities: Object.keys(state.universities).map(curr => {
      return {
        id: curr,
        logoURL: UniversitySelector.UniversitiesLogoList[state.universities[curr].name]
      };
    })
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectUniversity: bindActionCreators(selectUniversity, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UniversitySelector);
