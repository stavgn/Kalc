import initialState from './initialState';

export default (state = initialState.userTypedGrades, action) => {
  return state;
};

export const getMandotryStudiesFromState = (userTypedGrades) => {
  return Object.keys(userTypedGrades).reduce((acc, curr) => {
    // get only mandatory studies from state (extended studies stored in an array)
    if (!(userTypedGrades[curr] instanceof Array)){
      const {name, numOfUnits} = userTypedGrades[curr];
      return {
        ...acc,
        [curr]: {name, minNumOfUnits: numOfUnits}
      };
    }
    return acc;
  }, {});
};
