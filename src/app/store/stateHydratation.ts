import { ToDoState } from "../store/reducers";

export const loadstate = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    const rehydratedState: ToDoState = JSON.parse(
      serializedState,
      (key, value) => {
        return value;
      }
    );
    return rehydratedState;
  } catch (err) {
    return undefined;
  }
};

export const savestate = (state: Object) => {
  try {
    const serializableState = JSON.stringify(state);
    return localStorage.setItem("state", serializableState);
  } catch (err) {
    return console.error(err);
  }
};

export const clearState = () => {
  localStorage.clear();
};
