export const personActions = {
  ADD_PERSON: "ADD_PERSON",
  REMOVE_PERSON: "REMOVE_PERSON"
};

export const personReducer = (state, action) => {
  const { type, ...rest } = action;

  switch (type) {
    case personActions.ADD_PERSON:
      return state.concat({ ...rest });
    case personActions.REMOVE_PERSON:
      return state.filter((person) => person.id !== rest.id);
    default:
      throw new Error();
  }
};
