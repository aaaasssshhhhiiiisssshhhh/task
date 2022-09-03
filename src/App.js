import React from "react";
import { Hey } from "./component/GenerateForm";
export const App = () => {
  const personSchema = [
    {
      fieldName: "full Name",
      fieldType: "text",
      placeholder: "enter your name",
    },
    {
      fieldName: "phone",
      fieldType: "number",
      placeholder: "enter the number ",
    },
    {
      fieldName: "Occupation",
      fieldType: "text",
      placeholder: "enter your occupation",
    },
  ];

  return (
    <div>
      <Hey schema={personSchema} />
    </div>
  );
};
export default App;
