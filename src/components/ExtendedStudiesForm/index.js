import React from 'React';
import PropTypes from 'prop-types';
import UUID from 'uuid/v4';
import GradesRow from '../GradesRow';
import GradesColumn from '../GradesColumn';
import AddExtendedStudyButton from '../AddExtendedStudyButton';
import RemoveExtendedStudyButton from '../RemoveExtendedStudyButton';


export default class ExtendedStudiesForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      extendedStudies: [
        <GradesRow key={UUID()}>
          <GradesColumn key={UUID()} offset="s7"/>
        </GradesRow>
      ]
    };
  }

  addExtendedStudy() {
    this.setState(({ extendedStudies }) => {
        return {
          extendedStudies: extendedStudies[extendedStudies.length - 1].props.children instanceof Array ?
            this.buildNextRow(extendedStudies) :
            this.addCoumnToExistingRow(extendedStudies)
        };
    });
  }

  addCoumnToExistingRow(prevExtendedStudies) {
    return [
      ...prevExtendedStudies.slice(0, prevExtendedStudies.length - 1),
      {
        ...prevExtendedStudies[prevExtendedStudies.length - 1],
        props: {
          ...prevExtendedStudies[prevExtendedStudies.length - 1].props,
          children: [
            <GradesColumn key={UUID()} />,
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

  buildNextRow(prevExtendedStudies) {
    return [...prevExtendedStudies,
      (<GradesRow key={UUID()}>
        <GradesColumn key={UUID()} offset="s7"/>
      </GradesRow>)
    ];
  }

  removeExtendedStudy() {
    this.setState(({ extendedStudies }) => {
      return {
        extendedStudies: extendedStudies[extendedStudies.length - 1].props.children instanceof Array ?
          this.removeLastColumn(extendedStudies) :
          this.removeLastRow(extendedStudies)
      };
    });
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
              ...prevExtendedStudies[prevExtendedStudies.length - 1].props.children[1].propTypes,
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
