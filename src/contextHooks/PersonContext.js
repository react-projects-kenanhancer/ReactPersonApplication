import React from "react";
import { v4 as uuid } from "uuid";
import { personActions, personReducer } from "../reducerHooks/personReducer";

export const PersonContext = React.createContext();

const { Provider, Consumer } = PersonContext;

export const PersonContextConsumer = Consumer;

export const PersonContextProvider = ({ children }) => {
  const [persons, dispatchPersons] = React.useReducer(personReducer, []);

  const addPerson = (args) =>
    dispatchPersons({ type: personActions.ADD_PERSON, id: uuid(), ...args });

  const removePerson = (id) =>
    dispatchPersons({ type: personActions.REMOVE_PERSON, id });

  return (
    <Provider value={{ persons, addPerson, removePerson }}>{children}</Provider>
  );
};
