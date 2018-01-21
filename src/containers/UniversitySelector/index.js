import React from 'React';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUniversity } from '../../actions/universitiesActions';
import UniversityLabel from '../../components/UniversityLabel/';
import Technion  from '../../static/images/TechnionLogo.png';
import BGU  from '../../static/images/BGULogo.png';
import Hebrew  from '../../static/images/HEBLogo.png';
import TLV  from '../../static/images/TLVLogo.png';

export class UniversitySelector extends React.PureComponent {
  static propTypes = {
    universities: PropTypes.array.isRequired,
    selectUniversity: PropTypes.func.isRequired
  }

  static UniversitiesLogoList = {
      'Technion':  Technion,
      'BGU University': BGU,
      'The Hebrew University': Hebrew,
      'Tel-Aviv University': TLV
    }

  handleUniversitySelection = (id) => {
    this.props.selectUniversity(id);
  }

  render() {
    return (
      <Grid item xs={12}>
        <Grid spacing={0} justify="center" container>
            {this.props.universities.map((curr) => {
              return <UniversityLabel key={curr.id} handleUniversitySelection={this.handleUniversitySelection} {...curr} />;
            })}
        </Grid>
      </Grid>
    );


  }
}

const mapStateToProps = (state) => {
  return {
    universities: Object.keys(state.universities).map(curr => {
      return {
        id: curr,
        logo: UniversitySelector.UniversitiesLogoList[state.universities[curr].name]
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
