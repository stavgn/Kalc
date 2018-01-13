import React from 'React';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import styles from './styles';

export default class UniversityLabel extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    logoURL: PropTypes.string.isRequired,
    handleUniversitySelection: PropTypes.func.isRequired
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
        <Grid item xs={6} md={3} lg={2}>
          <Paper style={styles.paper}>
            <div onClick={()=> this.selectUniversity()} style={this.state.isSelected ? {...styles.labelWrapper, backgroundColor: '#f5f5f5'} : styles.labelWrapper}>
            <span style={styles.helper}/>
              <img style={styles.img} src={this.props.logoURL} />
            </div>
          </Paper>
        </Grid>
      );
  }
}
