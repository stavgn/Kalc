import React from 'React';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import styles from './styles';

export default class GradesRow extends React.PureComponent {
  static propTypes = {
     children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array,
    ]).isRequired
  }

  render() {
    return (
          <Grid style={styles.row} justify="center" container>
            {this.props.children}
          </Grid>
        );
  }
}
