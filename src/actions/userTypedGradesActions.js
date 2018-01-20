import {
  SUBMIT_GRADES_FORM,
  LOAD_PERSISTED_STATE
} from '../constants/actionTypes';

export function submitGradesForm(formData) {
  return {
    type: SUBMIT_GRADES_FORM,
    formData
  };
}

export function loadPersistedState(persistedState) {
  return {
    type: LOAD_PERSISTED_STATE,
    persistedState
  };
}
