import React from 'React';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GradesRow from '../../components/GradesRow';
import GradesColumn from '../../components/GradesColumn';
import AddExtendedStudyButton from '../../components/AddExtendedStudyButton';

export class ExtendedStudiesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extendedStudies: []
    };
  }

  addExtendedStudyColumn() {

  }

  render() {
    return (
      <div style={{borderTop: '1px solid black'}} className="row">
        <GradesRow>
          <AddExtendedStudyButton onClick={() => {}} />
          <GradesColumn offset="s2"/>
        </GradesRow>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDisptachToProps = () => ({});

export default connect(mapStateToProps, mapDisptachToProps)(ExtendedStudiesForm);
