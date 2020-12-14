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

export function TableBody({ score, name }) {
    return (
        <React.Fragment>
            {score.reduce((acc, { fullname, goals }) => {
                const arr = new Array(parseInt(goals)).fill(0);
                return acc.concat(
                    arr.map(() => (
                        <tbody>
                            <FieldArray name={name}>
                                {({ fields }) =>
                                    fields.map((name, index) => (
                                        <React.Fragment key={index}>
                                            <Td>{fullname}</Td>
                                            <Td>1</Td>
                                            <Td>
                                                <Field
                                                    name={`${name}.minute`}
                                                    component="input"
                                                    type="number"
                                                    min="1"
                                                    max="30"
                                                />
                                            </Td>
                                        </React.Fragment>
                                    ))
                                }
                            </FieldArray>
                        </tbody>
                    ))
                );
            }, [])}
        </React.Fragment>
    );
}
