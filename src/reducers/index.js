 import { combineReducers } from 'redux';
 import {universities} from './universitiesReducer';
 import userTypedGrades from './userTypedGradesReducer';


 const reducer = combineReducers({universities, userTypedGrades});
 export default reducer;
