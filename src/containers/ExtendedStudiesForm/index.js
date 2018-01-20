import React from 'React';
import PropTypes from 'prop-types';
import UUID from 'uuid/v4';
import { connect } from 'react-redux';
import Offset from '../../components/Offset';
import GradesRow from '../../components/GradesRow';
import GradesColumn from '../../components/GradesColumn';
import AddExtendedStudyButton from '../../components/AddExtendedStudyButton';
import RemoveExtendedStudyButton from '../../components/RemoveExtendedStudyButton';

class ExtendedStudiesForm extends React.Component {
  static propTypes = {
    onValidation: PropTypes.func.isRequired,
    extendedStudies: PropTypes.object
  }

  constructor(props) {
    super(props);
    const studyId = UUID();
    this.state = {
      isAllValid: false,
      validations: {
        [studyId]: false
      },
      extendedStudies:
         [
           <GradesRow key={UUID()}>
            <Offset smDown/>
            <GradesColumn id={studyId} onValidation={this.updateValidation} key={studyId}/>
           </GradesRow>
         ]
    };
  }

  componentWillReceiveProps(nextProps) {
    const nextExtendedStudiesKeys = Object.keys(nextProps.extendedStudies);
    if(nextExtendedStudiesKeys.length > 0 && nextExtendedStudiesKeys.length != this.props.extendedStudies.length) {
      this.setState({
        isAllValid: true,
        validations: nextExtendedStudiesKeys.reduce((acc, curr) => {
          acc[curr] = true;
          return acc;
        },{}),
        extendedStudies: this.generateExtendedStudyArray(nextProps.extendedStudies)
      });

    }
  }

  generateExtendedStudyArray(nextExtendedStudies){
    return Object.keys(nextExtendedStudies).map((curr, index , arr) => {
      const row = (
        <GradesRow key={curr}>
          {!arr[index + 1] && <Offset smDown/>}
          <GradesColumn id={curr} onValidation={this.updateValidation} {...nextExtendedStudies[curr]} />
          {arr[index + 1] && <GradesColumn id={arr[index + 1]} onValidation={this.updateValidation} {...nextExtendedStudies[arr[index + 1]]}/>}
        </GradesRow>
      );
      delete arr[index + 1];
      return row;
    });
  }


  updateValidation = (studyId, isValid) => {
    const validations = this.buildNewValidationsObj(studyId,isValid),
          isAllValid = this.isAllValid(validations);

    if(this.state.isAllValid != isAllValid) {
      this.props.onValidation('ExtendedStudiesForm',isAllValid);
    }

    this.setState({
      isAllValid,
      validations
    });
  }

  buildNewValidationsObj(studyId, isValid) {
    return {
      ...this.state.validations,
      [studyId]: isValid
    };
  }

  isAllValid(validations = this.state.validations) {
    return Object.values(validations).reduce((acc, curr) => acc && curr, true);
  }

  addExtendedStudy = () => {
    if(this.state.isAllValid != false) {
      this.props.onValidation('ExtendedStudiesForm', false);
    }
    const studyId = UUID();
    this.setState(({ extendedStudies,  validations}) => {
        return {
          isAllValid: false,
          extendedStudies: extendedStudies[extendedStudies.length - 1].props.children[0].type == Offset ?
            this.addCoumnToExistingRow(extendedStudies, studyId) :
            this.buildNextRow(extendedStudies, studyId),
          validations: {
            ...validations,
            [studyId]: false
          }
        };
    });

  }

  addCoumnToExistingRow(prevExtendedStudies, studyId) {
    return [
      ...prevExtendedStudies.slice(0, prevExtendedStudies.length - 1),
      {
        ...prevExtendedStudies[prevExtendedStudies.length - 1],
        props: {
          ...prevExtendedStudies[prevExtendedStudies.length - 1].props,
          children: [
            <GradesColumn id={studyId} onValidation={this.updateValidation} key={studyId} />,
            {
            ...prevExtendedStudies[prevExtendedStudies.length - 1].props.children[1],

            }
          ]
        }
      }
    ];
  }

  buildNextRow(prevExtendedStudies, studyId) {
    return [...prevExtendedStudies,
      (<GradesRow key={UUID()}>
        <Offset smDown/>
        <GradesColumn id={studyId} onValidation={this.updateValidation} key={studyId} offset="s7"/>
      </GradesRow>)
    ];
  }

  removeExtendedStudy = () => {
    const newValidationsObj = this.removeLastStudyId();
    const isAllValid = this.isAllValid(newValidationsObj);
    if(this.state.isAllValid != isAllValid) {
      this.props.onValidation('ExtendedStudiesForm',isAllValid);
    }

    this.setState(({ extendedStudies}) => {
      return {
        isAllValid,
        extendedStudies: extendedStudies[extendedStudies.length - 1].props.children[0].type != Offset ?
          this.removeLastColumn(extendedStudies) :
          this.removeLastRow(extendedStudies),
          validations: newValidationsObj
      };
    });

  }

  removeLastStudyId(validations = this.state.validations) {
    if (Object.keys(validations).length > 1) {
      const cloneValidationsObj = JSON.parse(JSON.stringify(validations));
      delete cloneValidationsObj[Object.keys(cloneValidationsObj)[Object.keys(cloneValidationsObj).length -1]];
      return cloneValidationsObj;
    }
    return validations;
  }

  removeLastRow(prevExtendedStudies) {
    return prevExtendedStudies.length > 1  ? prevExtendedStudies.slice(0, prevExtendedStudies.length - 1) : prevExtendedStudies;
  }

  removeLastColumn(prevExtendedStudies) {
    return [
      ...prevExtendedStudies.slice(0, prevExtendedStudies.length - 1),
      {
        ...prevExtendedStudies[prevExtendedStudies.length - 1],
        props: {
          ...prevExtendedStudies[prevExtendedStudies.length - 1].props,
          children: [
            <Offset key smDown/>,
            prevExtendedStudies[prevExtendedStudies.length - 1].props.children[1]
          ]
        }
      }
    ];
}

render() {
  return (
    <div>
      <AddExtendedStudyButton onClick={this.addExtendedStudy} />
      {this.state.extendedStudies}
      <RemoveExtendedStudyButton onClick={this.removeExtendedStudy}/>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { extendedStudies } = state.userTypedGrades.bagrut;
  return {
    extendedStudies
  };
};
export default connect(mapStateToProps)(ExtendedStudiesForm);
