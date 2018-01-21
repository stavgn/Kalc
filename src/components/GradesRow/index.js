import React from 'React';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import './styles.scss';

export default class GradesRow extends React.PureComponent {
  static propTypes = {
     children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array,
    ]).isRequired
  }

  render() {
    return (
          <Grid className="gradesRow" justify="center" container>
            {this.props.children}
          </Grid>
        );
  }
}
