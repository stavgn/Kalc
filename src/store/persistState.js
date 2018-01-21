export function getStateFromLocalStorage() {
  try {
    const savedState = window.localStorage.getItem('state');
    if (savedState == null) {
      return undefined;
    }
    return JSON.parse(savedState);
  }
  catch(err) {
    return undefined;
  }
}

export function saveStateToLocalStorage(state) {
  try {
    window.localStorage.setItem('state', JSON.stringify(state.userTypedGrades));
  } catch (err) {
    // pass
  }
}
