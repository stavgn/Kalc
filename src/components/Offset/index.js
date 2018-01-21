import React from 'React';
import PropTypes from 'prop-types';
import Hidden from 'material-ui/Hidden';
import Grid from 'material-ui/Grid';

export default class Offset extends React.PureComponent {
  static propTypes = {
    xsUp: PropTypes.bool,
    xsDown: PropTypes.bool,
    smUp: PropTypes.bool,
    smDown: PropTypes.bool,
    mdUp: PropTypes.bool,
    mdDown: PropTypes.bool,
    lgUp: PropTypes.bool,
    lgDown: PropTypes.bool,
  }

  render() {
    return (
      <Hidden {...this.props}>
        <Grid style={{marginBottom: '30px'}} item xs={12} md={6} />
      </Hidden>
    );
  }
}
