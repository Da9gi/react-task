import React from "react";
import { Td } from "../styles/Styles";
import { TableBody, TableHead } from "./showScore";

export default function Summary({ heading, teamName, team }) {
  return (
    <Td>
      {heading}
      <table>
        <TableHead />
        <tbody>
          {team.length && <TableBody score={team} name={teamName} />}
        </tbody>
      </table>
    </Td>
  );
}
