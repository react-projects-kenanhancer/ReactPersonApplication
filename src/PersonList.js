import React from "react";
import { PersonContext } from "./contextHooks/PersonContext";

export default function PersonList() {
  const { persons } = React.useContext(PersonContext);

  return (
    <div style={{ height: "200px" }} className="scrollable">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>LastName</th>
            <th>Country</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.country}</td>
              <td>{person.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
