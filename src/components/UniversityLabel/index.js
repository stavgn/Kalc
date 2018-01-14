import React from 'React';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import './styles.scss';

export default class UniversityLabel extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    handleUniversitySelection: PropTypes.func.isRequired
  }

  state = {
    isSelected: false,
  }

  selectUniversity = () => {
    this.props.handleUniversitySelection(this.props.id);
    this.setState((prevState) =>{
      return {
        isSelected: !prevState.isSelected
      };
    });
  }
  render() {
    console.log(this.state.img);
    return (
        <Grid item xs={6} md={3} lg={2}>
          <Paper className="labelPaper">
            <div onClick={this.selectUniversity} className={this.state.isSelected ? 'labelWrapperClicked': 'labelWrapper'}>
              <span className="helper" />
              <img className="img" src={this.props.logo} />
            </div>
          </Paper>
        </Grid>
      );
  }
}
