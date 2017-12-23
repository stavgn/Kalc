import {
  SELECT_UNIVERSITY
} from '../constants/actionTypes';

export function selectUniversity(universityID) {
  return {
    type: SELECT_UNIVERSITY,
    universityID
  };
}
