import { combineReducers } from 'redux';
import initialState from './initialState';
import {
  SUBMIT_GRADES_FORM,
  LOAD_PERSISTED_STATE
} from '../constants/actionTypes';

function bagrut(state = initialState.userTypedGrades.bagrut, action) {
  switch (action.type) {
    case SUBMIT_GRADES_FORM:
      return Object.keys(action.formData).reduce((acc, studyId) => {
        if(studyId == 'psychometry')
          return acc; // ignore the psychometric grade
        state.hasOwnProperty(studyId) ? acc[studyId] = action.formData[studyId] : acc.extendedStudies[studyId] = action.formData[studyId];
        return acc;
      }, {extendedStudies: {}});
    case LOAD_PERSISTED_STATE:
      return action.persistedState.bagrut;
    default:
      return state;
    }
}
function psychometry(state = initialState.userTypedGrades.psychometry, action) {
  switch (action.type) {
    case SUBMIT_GRADES_FORM:
      return action.formData.psychometry;
    case LOAD_PERSISTED_STATE:
      return action.persistedState.psychometry;
    default:
      return state;
    }
}

export default combineReducers({bagrut, psychometry});

export const getMandotryStudiesFromState = (bagrut) => {
  return Object.keys(bagrut).filter((studyId) => studyId != 'extendedStudies').reduce((acc, studyId) => {
    acc[studyId] = bagrut[studyId];
    return acc;
  } ,{});
};
