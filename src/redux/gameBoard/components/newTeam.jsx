import React from "react";
import { ShowValues, TdTeam, Heading, ButtonDefault } from "../styles/Styles";
import Players from "./players";

export default function NewTeam({ teamName, push, heading, values, setGoals }) {
  return (
    <ShowValues>
      <table>
        <thead>
          <tr>
            <TdTeam>
              <Heading>{heading}</Heading>
            </TdTeam>
            <TdTeam>
              <ButtonDefault
                type="button"
                onClick={() => {
                  push(`${teamName}`, {
                    fullname: "",
                    t_shirt: null,
                    total_goals: 0,
                    goals: [],
                  });
                }}
              >
                Add Player
              </ButtonDefault>
            </TdTeam>
          </tr>
        </thead>
      </table>
      <hr />
      <Players name={teamName} values={values} setGoals={setGoals} />
    </ShowValues>
  );
}
