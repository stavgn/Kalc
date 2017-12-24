import React from 'React';
import PropTypes from 'prop-types';
import AutoComplete from 'material-ui/AutoComplete';
import UUID from 'uuid/v4';
import ExtendedStudies from '../../static/data/ExtendedStudies';

export default class StudyInput extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    errorText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  handleStudyEntry(value, autoComplete){
    if(autoComplete.find((element) => element.match(new RegExp(value, 'g')))) {
      this.props.onChange('StudyInput', value);
    } else if (this.checkForEnglishChar) {
      this.props.onChange('StudyInput', '', 'שנה שפה לעברית');

    }
  }

  checkForEnglishChar(value) {
    return value.match(/^[A-z]+$/g);
  }
  render() {
    return (
      <AutoComplete
                fullWidth
                id={UUID()}
                type="text"
                inputStyle={{margin : 0}}
                errorText={this.props.errorText}
                style={{ direction: 'rtl', textAlign: 'right', cursor: 'default' }}
                onNewRequest={(value, autoComplete) => this.handleStudyEntry(value, autoComplete)}
                onUpdateInput={(value, autoComplete) => this.handleStudyEntry(value, autoComplete)}
                dataSource={ExtendedStudies}
                searchText={this.props.value}
                errorStyle={{font: '13px Assistant Light'}}
              />
            );
  }
}
