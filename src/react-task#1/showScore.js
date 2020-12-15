import React from "react";
import { Td } from "./Styles";
import { Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";

export function TableHead() {
    const head = ["Players", "Goals", "Time"];
    return (
        <thead>
            {head.map((element) => (
                <Td key={element}>{element}</Td>
            ))}
        </thead>
    );
}

export function TableBody({ score }) {
    return (
        <FieldArray name={score}>
            {({ fields }) =>
                fields.map((name, index) =>
                    score.reduce(
                        (acc, { fullname, total_goals }, currIndex) => {
                            const arr = new Array(parseInt(total_goals)).fill(
                                0
                            );
                            return acc.concat(
                                arr.map(() => (
                                    <tr>
                                        <Td>{fullname}</Td>
                                        <Td>1</Td>
                                        <Td>
                                            <Field
                                                name={`${name.goals}.minute`}
                                                component="input"
                                                type="number"
                                                min="1"
                                                max="30"
                                            />
                                        </Td>
                                    </tr>
                                ))
                            );
                        },
                        []
                    )
                )
            }
        </FieldArray>
    );
}
