import initialState from './initialState';
import {
  SELECT_UNIVERSITY
} from '../constants/actionTypes';

export function universities(state = initialState.universities, action) {
  switch (action.type) {
    case SELECT_UNIVERSITY:
      return {
        ...state,
        [action.universityID]: {
          ...state[action.universityID],
          shouldCalculate: !state[action.universityID].shouldCalculate
        }
      };
    default:
      return state;
  }

}
