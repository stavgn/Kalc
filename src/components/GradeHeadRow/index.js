import React from 'React';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import styles from './styles';
import GradeHeadColumn from '../GradeHeadColumn';

export default class GradeHeadRow extends React.PureComponent {
  render() {
    return (
        <Grid style={styles.headRow} justify="center" container>
          <Hidden smDown>
            <GradeHeadColumn md={6}/>
            <GradeHeadColumn md={6}/>
          </Hidden>
          <Hidden mdUp>
            <GradeHeadColumn xs={12}/>
          </Hidden>
        </Grid>
      );
  }
}
//    <GradeHeadColumn offset={2}/>
