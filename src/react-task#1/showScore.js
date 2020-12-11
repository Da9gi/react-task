import React from "react";
import { Td } from "./Styles";
import { Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";

export function TableHead() {
    const head = ["Players", "Goals", "Time"];
    return (
        <thead>
            {head.map((element) => (
                <Td>{element}</Td>
            ))}
        </thead>
    );
}

const ReturnScore = ({ fullname, goal, team }) => {
    if (goal) {
        return (
            <>
                <FieldArray name={team}>
                    {({ fields }) =>
                        fields.map((name, index) => (
                            <tbody key={index}>
                                {" "}
                                <Td>{fullname}</Td>
                                <Td>{goal}</Td>
                                <Td>
                                    <Field
                                        name={`${name}.time`}
                                        component="input"
                                        type="number"
                                        min="1"
                                        max="30"
                                    />
                                </Td>
                            </tbody>
                        ))
                    }
                </FieldArray>
                <ReturnScore goal={goal - 1} />
            </>
        );
    } else return null;
};

export function TableBody({ score, team, push }) {
    push(team, undefined);
    return (
        <>
            {score.map(({ fullname, goals }) => (
                <ReturnScore fullname={fullname} goal={goals} team={team} />
            ))}
        </>
    );
}
