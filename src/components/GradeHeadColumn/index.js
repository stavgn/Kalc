import React from 'React';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import styles from './styles';

export default class GradeHeadColumn extends React.PureComponent {
  static propTypes = {
    xs: PropTypes.number,
    md: PropTypes.number,
    hidden: PropTypes.bool
  }
  render() {
    return (
        <Grid item {...this.props}>
          <Grid justify="center" container>
          <Grid item xs={3} sm={2}>
            <p style={styles.p}>ציון</p>
          </Grid>
          <Grid item xs={3} sm={2}>
            <p style={styles.p}>יח&quot;ל</p>
          </Grid>
          <Grid item xs={5} sm={4}>
            <p style={styles.p}>מקצוע</p>
          </Grid>
          </Grid>
        </Grid>
      );
  }
}
