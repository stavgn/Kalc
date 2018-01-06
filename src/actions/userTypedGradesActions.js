import {
  SUBMIT_GRADES_FORM
} from '../constants/actionTypes';

export function submitGradesForm(formData) {
  return {
    type: SUBMIT_GRADES_FORM,
    formData
  };
}
