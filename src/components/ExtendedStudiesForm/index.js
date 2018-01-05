import React from 'React';
import PropTypes from 'prop-types';
import UUID from 'uuid/v4';
import GradesRow from '../GradesRow';
import GradesColumn from '../GradesColumn';
import AddExtendedStudyButton from '../AddExtendedStudyButton';
import RemoveExtendedStudyButton from '../RemoveExtendedStudyButton';

export default class ExtendedStudiesForm extends React.PureComponent {
  static propTypes = {
    onValidation: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    const studyId = UUID();
    this.state = {
      isAllValid: false,
      validations: {
        [studyId]: false
      },
      extendedStudies: [
        <GradesRow key={UUID()}>
          <GradesColumn id={studyId} onValidation={this.updateValidation} key={studyId} offset="s7"/>
        </GradesRow>
      ],
    };
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

  buildNewValidationsObj(studyId,isValid) {
    return {
      ...this.state.validations,
      [studyId]: isValid
    };
  }

  isAllValid(validations = this.state.validations) {
    return Object.values(validations).reduce((acc, curr) => acc && curr, true);
  }

  addExtendedStudy() {
    if(this.state.isAllValid != false) {
      this.props.onValidation('ExtendedStudiesForm', false);
    }
    const studyId = UUID();
    this.setState(({ extendedStudies,  validations}) => {
        return {
          isAllValid: false,
          extendedStudies: extendedStudies[extendedStudies.length - 1].props.children instanceof Array ?
            this.buildNextRow(extendedStudies, studyId) :
            this.addCoumnToExistingRow(extendedStudies, studyId),
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
            ...prevExtendedStudies[prevExtendedStudies.length - 1].props.children,
              props: {
                ...prevExtendedStudies[prevExtendedStudies.length - 1].props.children.props,
                offset: 's2'
              }
            }
          ]
        }
      }
    ];
  }

  buildNextRow(prevExtendedStudies, studyId) {
    return [...prevExtendedStudies,
      (<GradesRow key={UUID()}>
        <GradesColumn id={studyId} onValidation={this.updateValidation} key={studyId} offset="s7"/>
      </GradesRow>)
    ];
  }

  removeExtendedStudy() {
    const newValidationsObj = this.removeLastStudyId();
    const isAllValid = this.isAllValid(newValidationsObj);
    if(this.state.isAllValid != isAllValid) {
      this.props.onValidation('ExtendedStudiesForm',isAllValid);
    }

    this.setState(({ extendedStudies}) => {
      return {
        isAllValid,
        extendedStudies: extendedStudies[extendedStudies.length - 1].props.children instanceof Array ?
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
          children: {
            ...prevExtendedStudies[prevExtendedStudies.length - 1].props.children[1],
            props: {
              ...prevExtendedStudies[prevExtendedStudies.length - 1].props.children[1].props,
              offset: 's7'
            }
          }
        }
      }
    ];
}

render() {
  return (
    <div>
      <AddExtendedStudyButton onClick={() => this.addExtendedStudy()} />
      {this.state.extendedStudies}
      <RemoveExtendedStudyButton onClick={() => this.removeExtendedStudy()}/>
    </div>
    );
  }
}
