import React from "react";
import Container from "./Container";
import { PersonContextProvider } from "./contextHooks/PersonContext";
import Header from "./Header";
import PersonForm from "./PersonForm";
import PersonList from "./PersonList";
import "./styles.css";

export default function App() {
  return (
    <PersonContextProvider>
      <Container>
        <Header>Person Form</Header>
        <PersonForm />
      </Container>
      <br />
      <Container>
        <Header>Person List</Header>
        <PersonList />
      </Container>
    </PersonContextProvider>
  );
}
