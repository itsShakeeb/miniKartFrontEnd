export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("isLoggedIn");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("isLoggedIn", serializedState);
  } catch (error) {
    console.log("saveStateError", error);
  }
};
