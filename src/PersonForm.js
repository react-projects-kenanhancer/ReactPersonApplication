import React from "react";
import { PersonContext } from "./contextHooks/PersonContext";
import useInput from "./customHooks/useInput";

export default function PersonForm() {
  const { reset: resetFirstName, Input: InputFirstName } = useInput("John");
  const { reset: resetLastName, Input: InputLastName } = useInput("Doe");
  const { reset: resetCountry, Input: InputCountry } = useInput(
    "United Kingdom"
  );
  const { reset: resetCity, Input: InputCity } = useInput("London");

  const { addPerson } = React.useContext(PersonContext);

  const handleSubmit = (e) => {
    const formData = new FormData(e.target);

    const formEntries = Array.from(formData.entries());

    const data = formEntries.reduce(
      (acc, el) => ({ ...acc, [el[0]]: el[1] }),
      {}
    );

    addPerson(data);

    e.preventDefault();
  };

  const handleReset = (e) => {
    resetFirstName();
    resetLastName();
    resetCountry();
    resetCity();
  };

  return (
    <form className="formStyle" onSubmit={handleSubmit}>
      <div className="row">
        <div className="column">
          <label htmlFor="firstName">First name:</label>
          <br />
          <InputFirstName id="firstName" name="firstName" />
          <br />
          <label htmlFor="lastName">Last name:</label>
          <br />
          <InputLastName id="lastName" name="lastName" />
          <br />
        </div>
        <div className="column">
          <label htmlFor="country">Country:</label>
          <br />
          <InputCountry id="country" name="country" />
          <br />
          <label htmlFor="city">City:</label>
          <br />
          <InputCity name="city" />
        </div>
      </div>
      <br />
      <button type="submit">Add</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}
