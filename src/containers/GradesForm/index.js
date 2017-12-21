import React from 'React';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GradeHeadRow from '../../components/GradeHeadRow';
import GradesRow from '../../components/GradesRow';


export default class GradesForm extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <GradeHeadRow />
        <form>
          <GradesRow />
          <GradesRow />
          <GradesRow />
        </form>
      </div>);
  }
}
