import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import { withStyles } from 'material-ui/styles';
import InputField from './InputField';
import Suggestion from './Suggestion';
import SuggestionContainer from './SuggestionContainer';
import suggestions from '../../static/data/ExtendedStudies';

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    height: 'auto',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  textField: {
    width: '100%',
  },
});

class StudyInputSelector extends React.Component {
  static propTypes = {
    onValidation: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    errorText: PropTypes.string.isRequired,
    initValue: PropTypes.string

  }
  state = {
    isValid: this.props.initValue || false,
    value: this.props.initValue || '',
    suggestions: [],
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    const suggestions = getSuggestions(value), isValid = suggestions.length > 0;

    if(this.state.isValid != isValid){
      this.props.onValidation('studyInput', isValid);
    }

    this.setState({
      isValid,
      suggestions
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleChange = (event, { newValue }) => {
    const isValid = newValue == '' || this.checkForNoEnglishChar(newValue) && getSuggestions(newValue).length > 0;

    if(!this.checkForNoEnglishChar(newValue)) {
      this.props.onValidation('studyInput', isValid, isValid ? undefined : {errorText: 'שנה שפה לעברית'});
    }
    else {
        this.props.onValidation('studyInput', isValid);
    }

      this.setState({
        isValid,
        value: isValid ? newValue : this.state.value
      });

  };

  checkForNoEnglishChar(value) {
    return !value.match(/[a-zA-Z]/g);
  }

  render() {
    const { classes } = this.props;

    return (
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderInputComponent={InputField}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={SuggestionContainer}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={Suggestion}
        inputProps={{
          autoFocus: true,
          classes,
          placeholder: 'חפש מקצוע מוגבר',
          value: this.state.value,
          onChange: this.handleChange,
          name: `${this.props.name}.study`,
          errorText: this.props.errorText
        }}
      />
    );
  }
}


function getSuggestionValue(suggestion) {
  return suggestion;
}

function getSuggestions(value) {
  const inputValue = value.trim();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.slice(0, inputLength) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

export default withStyles(styles)(StudyInputSelector);
