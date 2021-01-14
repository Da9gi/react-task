import React from "react";
import { Td } from "../styles/Styles";
import { Field } from "react-final-form";

export function TableHead() {
  const head = ["Players", "Goals", "Time"];
  return (
    <thead>
      <tr>
        {head.map((element) => (
          <Td key={element}>{element}</Td>
        ))}
      </tr>
    </thead>
  );
}

export function TableBody({ score, name }) {
  return score.reduce((acc, { fullname, total_goals }, currIndex) => {
    const arr = new Array(parseInt(total_goals)).fill(0);
    return acc.concat(
      arr.map((val, index) => (
        <tr >
          <Td>{fullname}</Td>
          <Td>1</Td>
          <Td>
            <Field
              name={`${name}[${currIndex}].goals[${index}].minute`}
              component="input"
              type="number"
              min="1"
              max="30"
            />
          </Td>
        </tr>
      ))
    );
  }, []);
}
