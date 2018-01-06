import { combineReducers } from 'redux';
import initialState from './initialState';
import {
  SUBMIT_GRADES_FORM
} from '../constants/actionTypes';

function bagrut(state = initialState.userTypedGrades.bagrut, action) {
  if (action.type == SUBMIT_GRADES_FORM) {

    return Object.keys(action.formData).reduce((acc, studyId) => {
      if(studyId == 'SAT')
        return acc; // ignore SAT's grade
      state.hasOwnProperty(studyId) ? acc[studyId] = action.formData[studyId] : acc.extendedStudies[studyId] = action.formData[studyId];
      return acc;
    }, {extendedStudies: {}});
  }
  return state;
}

function psychometry(state = initialState.userTypedGrades.psychometry, action) {
  if (action.type == SUBMIT_GRADES_FORM) {
    return  action.formData.SAT;
  }
  return state;
}

export default combineReducers({bagrut, psychometry});

export const getMandotryStudiesFromState = (bagrut) => {
  return Object.keys(bagrut).filter((studyId) => studyId != 'extendedStudies').reduce((acc, studyId) => {
    acc[studyId] = bagrut[studyId];
    return acc;
  } ,{});
};
